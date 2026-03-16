import { useForm } from "@mantine/form";
import SupplierConfigs from "./SupplierConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useCreateApi from "~/hooks/use-create-api";
import useGetAllApi from "~/hooks/use-get-all-api";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import * as PageConfigs from "~/pages/PageConfig";
import useUpdateApi from "~/hooks/use-update-api";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import MiscUtils from "~/utils/MiscUtils";

function useSupplierUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: SupplierConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(SupplierConfigs.createUpdateFormSchema),
  });

  const [supplier, setSupplier] = useState();
  const [prevFormValues, setPrevFormValues] = useState();
  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const updateApi = useUpdateApi(
    SupplierConfigs.resourceUrl,
    SupplierConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    SupplierConfigs.resourceUrl,
    SupplierConfigs.resourceKey,
    id,
    (supplier) => {
      setSupplier(supplier);
      const formValues = {
        displayName: supplier.displayName,
        code: supplier.code,
        contactFullname: supplier.contactFullname,
        contactEmail: supplier.contactEmail,
        contactPhone: supplier.contactPhone,
        companyName: supplier.companyName,
        taxCode: supplier.taxCode,
        email: supplier.email,
        phone: supplier.phone,
        fax: supplier.fax,
        website: supplier.website,
        address: {
          line: supplier.address.line,
          provinceId: supplier.address.province
            ? String(supplier.address.province.id)
            : null,
          districtId: supplier.address.district
            ? String(supplier.address.district.id)
            : null,
        },
        description: supplier.description,
        note: supplier.note,
        status: String(supplier.status),
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

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    if (!MiscUtils.isEqual(prevFormValues, values)) {
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
        status: Number(values.status),
      };

      updateApi.mutate(data);
    }
  });

  return {
    form,
    supplier,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useSupplierUpdateViewModel;
