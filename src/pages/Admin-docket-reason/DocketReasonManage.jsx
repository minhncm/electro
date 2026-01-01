import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import DocketReasonConfigs from "~/pages/Admin-docket-reason/DocketReasonConfigs";

const listResponse = {
  content: [
    {
      id: 6,
      createdAt: "2021-09-13T08:19:28Z",
      updatedAt: "2021-10-11T03:36:10Z",
      name: "Trả hàng lỗi",
      status: 2,
    },
    {
      id: 5,
      createdAt: "2022-02-02T07:35:04Z",
      updatedAt: "2022-06-11T11:05:41Z",
      name: "Kiểm kho",
      status: 1,
    },
    {
      id: 4,
      createdAt: "2022-03-31T04:59:41Z",
      updatedAt: "2021-09-15T21:19:25Z",
      name: "Điều chuyển kho",
      status: 1,
    },
    {
      id: 3,
      createdAt: "2022-03-31T04:59:41Z",
      updatedAt: "2021-09-15T21:19:25Z",
      name: "Mua hàng",
      status: 1,
    },
    {
      id: 2,
      createdAt: "2022-03-31T04:59:41Z",
      updatedAt: "2021-09-15T21:19:25Z",
      name: "Xuất kho",
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 6,
  totalPages: 2,
  last: false,
};

function DocketReasonManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{DocketReasonConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DocketReasonConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DocketReasonConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DocketReasonConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DocketReasonConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={DocketReasonConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={DocketReasonConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default DocketReasonManage;
