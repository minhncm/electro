import { useForm } from "@mantine/form";
import WarehouseConfigs from "./WarehouseConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useCreateApi from "~/hooks/use-create-api";
import useGetAllApi from "~/hooks/use-get-all-api";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import * as PageConfigs from "~/pages/PageConfig";

function useWarehouseCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: WarehouseConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(WarehouseConfigs.createUpdateFormSchema),
  });

  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const createApi = useCreateApi(WarehouseConfigs.resourceUrl);

  useGetAllApi(
    ProvinceConfigs.resourceUrl,
    ProvinceConfigs.resourceKey,
    {
      all: 1,
    },
    (provinces) => {
      const selectList = provinces.content.map((province) => ({
        value: String(province.id),
        label: province.name,
      }));

      setProvinceSelectList(selectList);
    },
  );

  useGetAllApi(
    DistrictConfigs.resourceUrl,
    DistrictConfigs.resourceKey,
    {
      all: 1,
    },
    (districts) => {
      const selectList = districts.content.map((district) => ({
        value: String(district.id),
        label: district.name,
      }));

      setDistrictSelectList(selectList);
    },
  );

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      code: values.code,
      name: values.name,
      address: {
        line: values.address.line,
        provinceId: Number(values.address.provinceId),
        districtId: Number(values.address.districtId),
      },
      status: Number(values.status),
    };
    createApi.mutate(data);
  });

  return {
    form,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useWarehouseCreateViewModel;
