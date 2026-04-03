import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import useUpdateApi from "~/hooks/admin/use-update-api";
import MiscUtils from "~/utils/MiscUtils";
import CustomerGroupConfigs from "../Admin-customer-group/CustomerGroupConfigs";
import CustomerResourceConfigs from "../Admin-customer-resource/CustomerResourceConfigs";
import CustomerStatusConfigs from "../Admin-customer-status/CustomerStatusConfigs";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import CustomerConfigs from "./CustomerConfigs";

function useCustomerUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CustomerConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CustomerConfigs.createUpdateFormSchema),
  });

  const [customer, setCustomer] = useState();
  const [prevFormValues, setPrevFormValues] = useState();
  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);
  const [customerGroupSelectList, setCustomerGroupSelectList] = useState([]);
  const [customerStatusSelectList, setCustomerStatusSelectList] = useState([]);
  const [customerResourceSelectList, setCustomerResourceSelectList] = useState(
    [],
  );

  const updateApi = useUpdateApi(
    CustomerConfigs.resourceUrl,
    CustomerConfigs.resourceKey,
    id,
  );

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

  useGetByIdApi(
    CustomerConfigs.resourceUrl,
    CustomerConfigs.resourceKey,
    id,
    (customer) => {
      setCustomer(customer);
      const formValues = {
        user: {
          username: customer.user.username,
          password: customer.user.password,
          fullname: customer.user.fullname,
          email: customer.user.email,
          phone: customer.user.phone,
          gender: customer.user.gender,
          address: {
            line: customer.user.address.line,
            provinceId: customer.user.address.province
              ? String(customer.user.address.province.id)
              : null,
            districtId: customer.user.address.district
              ? String(customer.user.address.district.id)
              : null,
          },
          avatar: customer.user.avatar,
          status: String(customer.user.status),
          roles: customer.user.roles.map((role) => String(role.id)),
        },
        customerGroupId: customer.customerGroup
          ? String(customer.customerGroup.id)
          : null,
        customerResourceId: customer.customerResource
          ? String(customer.customerResource.id)
          : null,
        customerStatusId: customer.customerStatus
          ? String(customer.customerStatus.id)
          : null,
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
    if (!MiscUtils.isEqual(prevFormValues, values)) {
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
          status: Number(values.user.status),
          roleIds: values.user.roles.map((roleId) => Number(roleId)),
        },
        customerGroupId: Number(values.customerGroupId),
        customerResourceId: Number(values.customerResourceId),
        customerStatusId: Number(values.customerStatusId),
      };

      updateApi.mutate(data);
    }
  });

  return {
    form,
    customer,
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

export default useCustomerUpdateViewModel;
