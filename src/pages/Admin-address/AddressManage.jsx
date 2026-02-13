import { Highlight, Stack, Table } from "@mantine/core";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import useGetAllApi from "~/hooks/use-get-all-api";
import * as PageConfigs from "~/pages/PageConfig";
import AddressConfigs from "~/pages/Admin-address/AddressConfigs";
import DateUtils from "~/utils/DateUtils";

function AdminAddress() {
  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(AddressConfigs.resourceUrl, AddressConfigs.resourceKey);

  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.line || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.province?.name || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.district?.name || ""}</Highlight>
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties.line.label}</Table.Td>
        <Table.Td>{entity.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties["province.name"].label}</Table.Td>
        <Table.Td>{entity.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties.provinceId.label}</Table.Td>
        <Table.Td>{entity.province?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties["district.name"].label}</Table.Td>
        <Table.Td>{entity.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties.districtId.label}</Table.Td>
        <Table.Td>{entity.district?.code}</Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={"Quản lý địa chỉ"} />
      <SearchPanel />
      {/* <FilterPanel /> */}

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={AddressConfigs.properties}
          showedPropertiesFragment={(entity) => (
            <ShowedPropertiesFragment entity={entity} />
          )}
          entityDetailTableRowsFragment={(entity) => (
            <EntityDetailTableRowsFragment entity={entity} />
          )}
        />
      </ManageMain>

      <ManagePagination listResponse={listResponse} />
    </Stack>
  );
}

export default AdminAddress;
