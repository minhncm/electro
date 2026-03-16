import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/use-get-all-api";
import useUpdateApi from "~/hooks/use-update-api";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import DestinationConfigs from "./DestinationConfigs";
import useGetByIdApi from "~/hooks/use-get-by-id-api";

function useDestinationUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: DestinationConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(DestinationConfigs.createUpdateFormSchema),
  });

  const [destination, setDestination] = useState();
  const [prevFormValues, setPrevFormValues] = useState();
  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const updateApi = useUpdateApi(
    DestinationConfigs.resourceUrl,
    DestinationConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    DestinationConfigs.resourceUrl,
    DestinationConfigs.resourceKey,
    id,
    (destination) => {
      setDestination(destination);
      const formValues = {
        contactFullname: destination.contactFullname,
        contactEmail: destination.contactEmail,
        contactPhone: destination.contactPhone,
        address: {
          line: destination.address.line,
          provinceId: destination.address.province
            ? String(destination.address.province.id)
            : null,
          districtId: destination.address.district
            ? String(destination.address.district.id)
            : null,
        },
        status: String(destination.status),
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
        contactFullname: values.contactFullname,
        contactEmail: values.contactEmail,
        contactPhone: values.contactPhone,
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
    destination,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useDestinationUpdateViewModel;
