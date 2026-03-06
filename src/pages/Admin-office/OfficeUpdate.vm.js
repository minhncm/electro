import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/use-get-all-api";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import MiscUtils from "~/utils/MiscUtils";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import OfficeConfigs from "./OfficeConfigs";

function useOfficeUpdateViewModel(id) {
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

  const [office, setOffice] = useState();
  const [prevFormValues, setPrevFormValues] = useState();
  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const updateApi = useUpdateApi(
    OfficeConfigs.resourceUrl,
    OfficeConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    OfficeConfigs.resourceUrl,
    OfficeConfigs.resourceKey,
    id,
    (office) => {
      setOffice(office);
      const formValues = {
        name: office.name,
        address: {
          line: office.address.line || "",
          provinceId: office.address.province.id
            ? String(office.address.province.id)
            : null,
          districtId: office.address.district.id
            ? String(office.address.district.id)
            : null,
        },
        status: Number(office.status),
      };
      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

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
    if (!MiscUtils.isEqual(prevFormValues, values)) {
      const data = {
        name: values.name,
        address: {
          line: values.address.line,
          provinceId: Number(values.address.provinceId),
          districtId: Number(values.address.districtId),
        },
        status: Number(values.status),
      };

      updateApi.mutate(data);
    }
  });

  return {
    form,
    office,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useOfficeUpdateViewModel;
