import { Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";

const listResponse = {
  content: [
    {
      id: 63,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Bạc Liêu",
      code: "95",
    },
    {
      id: 62,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Sóc Trăng",
      code: "94",
    },
    {
      id: 61,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Hậu Giang",
      code: "93",
    },
    {
      id: 60,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Cần Thơ",
      code: "92",
    },
    {
      id: 59,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Kiên Giang",
      code: "91",
    },
  ],
  page: 1,
  size: 5,
  totalElements: 63,
  totalPages: 13,
  last: false,
};

function ProvinceManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.code}</Highlight>
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{ProvinceConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProvinceConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProvinceConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProvinceConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProvinceConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title="Quản lý tỉnh thành" />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={ProvinceConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default ProvinceManage;
