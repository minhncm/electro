import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useCreateApi from "~/hooks/admin/use-create-api";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import CustomerGroupConfigs from "../Admin-customer-group/CustomerGroupConfigs";
import CustomerResourceConfigs from "../Admin-customer-resource/CustomerResourceConfigs";
import CustomerStatusConfigs from "../Admin-customer-status/CustomerStatusConfigs";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import CustomerConfigs from "./CustomerConfigs";

function useCustomerCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CustomerConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CustomerConfigs.createUpdateFormSchema),
  });

  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);
  const [customerGroupSelectList, setCustomerGroupSelectList] = useState([]);
  const [customerResourceSelectList, setCustomerResourceSelectList] = useState(
    [],
  );
  const [customerStatusSelectList, setCustomerStatusSelectList] = useState([]);

  const createApi = useCreateApi(CustomerConfigs.resourceUrl);

  const genderSelectList = [
    { value: "M", label: "Nam" },
    { value: "F", label: "Nữ" },
  ];

  const statusSelectList = [
    { value: "1", label: "Đã kích hoạt" },
    { value: "2", label: "Chưa kích hoạt" },
  ];

  const roleSelectList = [
    {
      value: String(CustomerConfigs.CUSTOMER_ROLE_ID),
      label: "Khách hàng",
    },
  ];

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

  useGetAllApi(
    CustomerGroupConfigs.resourceUrl,
    CustomerGroupConfigs.resourceKey,
    { all: 1 },
    (customerGroups) => {
      const selectList = customerGroups.content.map((customerGroup) => ({
        value: String(customerGroup.id),
        label: customerGroup.name,
      }));
      setCustomerGroupSelectList(selectList);
    },
  );

  useGetAllApi(
    CustomerResourceConfigs.resourceUrl,
    CustomerResourceConfigs.resourceKey,
    { all: 1 },
    (customerResources) => {
      const selectList = customerResources.content.map((customerResource) => ({
        value: String(customerResource.id),
        label: customerResource.name,
      }));
      setCustomerResourceSelectList(selectList);
    },
  );

  useGetAllApi(
    CustomerStatusConfigs.resourceUrl,
    CustomerStatusConfigs.resourceKey,
    { all: 1 },
    (customerStatusList) => {
      const selectList = customerStatusList.content.map((customerStatus) => ({
        value: String(customerStatus.id),
        label: customerStatus.name,
      }));
      setCustomerStatusSelectList(selectList);
    },
  );

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      user: {
        username: values.user.username,
        password: values.user.password,
        fullname: values.user.fullname,
        email: values.user.email,
        phone: values.user.phone,
        gender: values.user.gender,
        address: {
          line: values.user.address.line,
          provinceId: Number(values.user.address.provinceId),
          districtId: Number(values.user.address.districtId),
        },
        avatar: values.user.avatar,
        status: values.user.status,
        roleIds: values.user.roles.map((roleId) => Number(roleId)),
      },
      customerGroupId: Number(values.customerGroupId),
      customerResourceId: Number(values.customerResourceId),
      customerStatusId: Number(values.customerStatusId),
    };

    createApi.mutate(data);
  });

  return {
    form,
    provinceSelectList,
    districtSelectList,
    roleSelectList,
    genderSelectList,
    statusSelectList,
    customerGroupSelectList,
    customerResourceSelectList,
    customerStatusSelectList,
    handleFormSubmit,
  };
}

export default useCustomerCreateViewModel;
