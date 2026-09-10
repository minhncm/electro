import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import useUpdateApi from "~/hooks/admin/use-update-api";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import WarehouseConfigs from "./WarehouseConfigs";

function useWarehouseUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: WarehouseConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(WarehouseConfigs.createUpdateFormSchema),
  });

  const [warehouse, setWarehouse] = useState();
  const [prevFormValues, setPrevFormValues] = useState();
  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const updateApi = useUpdateApi(
    WarehouseConfigs.resourceUrl,
    WarehouseConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    WarehouseConfigs.resourceUrl,
    WarehouseConfigs.resourceKey,
    id,
    (warehouse) => {
      setWarehouse(warehouse);
      const formValues = {
        code: warehouse.code,
        name: warehouse.name,
        address: {
          line: warehouse.address.line,
          provinceId: warehouse.address.province
            ? String(warehouse.address.province.id)
            : null,
          districtId: warehouse.address.district
            ? String(warehouse.address.district.id)
            : null,
        },
        status: String(warehouse.status),
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
        code: values.code,
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
    warehouse,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useWarehouseUpdateViewModel;
