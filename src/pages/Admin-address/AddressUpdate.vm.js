import { useForm } from "@mantine/form";
import AddressConfigs from "~/pages/Admin-address/AddressConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";
import useGetAllApi from "~/hooks/use-get-all-api";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import useUpdateApi from "~/hooks/use-update-api";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import MiscUtils from "~/utils/MiscUtils";

function useAddressUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: AddressConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(AddressConfigs.createUpdateFormSchema),
  });

  const [address, setAddress] = useState();
  const [prevFormValues, setPrevFormValues] = useState();
  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const updateApi = useUpdateApi(
    AddressConfigs.resourceUrl,
    AddressConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    AddressConfigs.resourceUrl,
    AddressConfigs.resourceKey,
    id,
    (address) => {
      setAddress(address);

      const formValues = {
        line: address.line || "",
        provinceId: address.province ? String(address.province.id) : null,
        districtId: address.district ? String(address.district.id) : null,
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

  const handleFormSubmit = form.onSubmit((formValues) => {
    if (!MiscUtils.isEqual(formValues, prevFormValues)) {
      const data = {
        line: formValues.line || null,
        province: formValues.provinceId || null,
        district: formValues.districtId || null,
        ward: formValues.wardId || null,
      };
      console.log(data);
      updateApi.mutate(data);
    }
  });

  return {
    address,
    form,
    provinceSelectList,
    districtSelectList,
    handleFormSubmit,
  };
}
export default useAddressUpdateViewModel;
