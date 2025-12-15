import { AppShell, Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import AddressConfigs from "~/pages/Admin-address/AddressConfigs";
import DateUtils from "~/utils/DateUtils";

const listResponse = {
  content: [
    {
      id: 34,
      createdAt: "2025-11-16T08:46:19Z",
      updatedAt: "2025-11-16T08:46:19Z",
      line: "Thon Phu My",
      province: {
        id: 62,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Sóc Trăng",
        code: "94",
      },
      district: {
        id: 688,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Huyện Trần Đề",
        code: "951",
      },
      ward: {
        id: 10444,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Xã Tài Văn",
        code: "31687",
      },
    },
    {
      id: 33,
      createdAt: "2025-11-16T08:37:12Z",
      updatedAt: "2025-11-16T08:37:12Z",
      line: "Thon Phu My",
      province: {
        id: 60,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Cần Thơ",
        code: "92",
      },
      district: {
        id: 669,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Huyện Thới Lai",
        code: "927",
      },
      ward: {
        id: 10276,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Xã Định Môn",
        code: "31288",
      },
    },
    {
      id: 32,
      createdAt: "2025-11-16T07:07:27Z",
      updatedAt: "2025-11-16T07:07:27Z",
      line: "Thon Phu My",
      province: {
        id: 40,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Quảng Nam",
        code: "49",
      },
      district: {
        id: 382,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Huyện Quế Sơn",
        code: "509",
      },
      ward: {
        id: 6794,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Xã Quế Xuân 2",
        code: "20647",
      },
    },
    {
      id: 31,
      createdAt: "2025-10-23T10:21:42Z",
      updatedAt: "2025-10-23T10:21:42Z",
      line: "Thôn Phú Mỹ",
      province: {
        id: 40,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Quảng Nam",
        code: "49",
      },
      district: {
        id: 382,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Huyện Quế Sơn",
        code: "509",
      },
      ward: {
        id: 6794,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Xã Quế Xuân 2",
        code: "20647",
      },
    },
    {
      id: 30,
      createdAt: "2021-10-06T12:21:11Z",
      updatedAt: "2022-05-03T01:50:28Z",
      line: "02 Moland Court",
      province: {
        id: 9,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Cà Mau",
        code: "96",
      },
      district: {
        id: 10,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Quận 7",
        code: "778",
      },
      ward: null,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 34,
  totalPages: 7,
  last: false,
};

function AdminAddress() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.line || ""}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.province?.name || ""}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.district?.name || ""}
        </Highlight>
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
        <Table.Td>{AddressConfigs.properties.provinceName.label}</Table.Td>
        <Table.Td>{entity.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties.provinceId.label}</Table.Td>
        <Table.Td>{entity.province?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties.districtName.label}</Table.Td>
        <Table.Td>{entity.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{AddressConfigs.properties.districtId.label}</Table.Td>
        <Table.Td>{entity.district?.code}</Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <AppShell.Main bg="gray.0">
      <Stack>
        <ManageHeader title={"Quản lý địa chỉ"} />
        <SearchPanel />
        {/* <FilterPanel /> */}

        <ManageMain listResponse={listResponse} isLoading={false}>
          <ManageTable
            listResponse={listResponse}
            properties={AddressConfigs.properties}
            resourceUrl={AddressConfigs.resourceUrl}
            resourceKey={AddressConfigs.resourceKey}
            showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
            entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
          />
        </ManageMain>

        <ManagePagination />
      </Stack>
    </AppShell.Main>
  );
}

export default AdminAddress;
