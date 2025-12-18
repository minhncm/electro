import { Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import DateUtils from "~/utils/DateUtils";

const listResponse = {
  content: [
    {
      id: 705,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Thành phố Thủ Đức",
      code: "769",
      province: {
        id: 29,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Thành phố Hồ Chí Minh",
        code: "79",
      },
    },
    {
      id: 704,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Huyện Ngọc Hiển",
      code: "973",
      province: {
        id: 9,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Cà Mau",
        code: "96",
      },
    },
    {
      id: 703,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Huyện Phú Tân",
      code: "972",
      province: {
        id: 9,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Cà Mau",
        code: "96",
      },
    },
    {
      id: 702,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Huyện Năm Căn",
      code: "971",
      province: {
        id: 9,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Cà Mau",
        code: "96",
      },
    },
    {
      id: 701,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Huyện Đầm Dơi",
      code: "970",
      province: {
        id: 9,
        createdAt: "2023-02-14T17:00:00Z",
        updatedAt: "2023-02-14T17:00:00Z",
        name: "Cà Mau",
        code: "96",
      },
    },
  ],
  page: 1,
  size: 5,
  totalElements: 705,
  totalPages: 141,
  last: false,
};

function DistrictManage() {
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
      <Table.Td>
        <Highlight size="sm">{entity.province.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.province.code}</Highlight>
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.name.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.name)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.code.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.code)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties["province.name"].label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.province.name)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties["province.code"].label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.province.code)}</Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={DistrictConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse}>
        <ManageTable
          listResponse={listResponse}
          properties={DistrictConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        />
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default DistrictManage;
