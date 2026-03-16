import { useForm } from "@mantine/form";
import SupplierConfigs from "./SupplierConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useCreateApi from "~/hooks/use-create-api";
import useGetAllApi from "~/hooks/use-get-all-api";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import * as PageConfigs from "~/pages/PageConfig";

function useSupplierCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: SupplierConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(SupplierConfigs.createUpdateFormSchema),
  });

  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const createApi = useCreateApi(SupplierConfigs.resourceUrl);

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
      displayName: values.displayName,
      code: values.code,
      contactFullname: values.contactFullname,
      contactEmail: values.contactEmail,
      contactPhone: values.contactPhone,
      companyName: values.companyName,
      taxCode: values.taxCode,
      email: values.email,
      phone: values.phone,
      fax: values.fax,
      website: values.website,
      address: {
        line: values.address.line,
        provinceId: values.address.provinceId,
        districtId: values.address.districtId,
      },
      description: values.description,
      note: values.note,
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

export default useSupplierCreateViewModel;
