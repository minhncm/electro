import { useForm } from "@mantine/form";
import DestinationConfigs from "./DestinationConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useCreateApi from "~/hooks/admin/use-create-api";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import * as PageConfigs from "~/pages/PageConfig";

function useDestinationCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: DestinationConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(DestinationConfigs.createUpdateFormSchema),
  });

  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const createApi = useCreateApi(DestinationConfigs.resourceUrl);

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
      contactFullname: values.contactFullname,
      contactEmail: values.contactEmail,
      contactPhone: values.contactPhone,
      address: {
        line: values.address.line,
        provinceId: values.address.provinceId,
        districtId: values.address.districtId,
      },
      status: values.status,
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

export default useDestinationCreateViewModel;
