import { useForm } from "@mantine/form";
import OfficeConfigs from "./OfficeConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/use-create-api";
import useGetAllApi from "~/hooks/use-get-all-api";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import { useState } from "react";
import DistrictConfigs from "../Admin-district/DistrictConfigs";

function useOfficeCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: OfficeConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(OfficeConfigs.createUpdateFormSchema),
  });

  const statusSelectList = [
    {
      value: "1",
      label: "Đang hoạt động",
    },
    {
      value: "2",
      label: "Ít hoạt động",
    },
    {
      value: "3",
      label: "Không hoạt động",
    },
  ];

  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const createApi = useCreateApi(OfficeConfigs.resourceUrl);

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

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
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

export default useOfficeCreateViewModel;
