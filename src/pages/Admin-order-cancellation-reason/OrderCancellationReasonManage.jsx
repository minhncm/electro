import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import OrderCancellationReasonConfigs from "~/pages/Admin-order-cancellation-reason/OrderCancellationReasonConfigs";

const listResponse = {
  content: [
    {
      id: 5,
      createdAt: "2021-08-25T22:18:38Z",
      updatedAt: "2022-02-02T07:58:07Z",
      name: "Nhân viên làm sai",
      note: null,
      status: 2,
    },
    {
      id: 4,
      createdAt: "2022-03-14T03:30:34Z",
      updatedAt: "2021-11-16T04:45:21Z",
      name: "Không liên hệ được",
      note: "Cras felis urna, facilisis at finibus non, pharetra in turpis.",
      status: 1,
    },
    {
      id: 3,
      createdAt: "2021-08-31T20:46:49Z",
      updatedAt: "2022-02-22T03:13:24Z",
      name: "Khách hàng hủy",
      note: null,
      status: 1,
    },
    {
      id: 2,
      createdAt: "2021-12-30T20:37:36Z",
      updatedAt: "2021-10-19T22:49:33Z",
      name: "Hết hàng trong kho",
      note: null,
      status: 1,
    },
    {
      id: 1,
      createdAt: "2021-10-03T14:16:01Z",
      updatedAt: "2021-11-17T17:55:52Z",
      name: "Giao hàng nhưng khách không nhận",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  last: true,
};

function OrderCancellationReasonManage() {
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
        <Table.Td>{OrderCancellationReasonConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderCancellationReasonConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderCancellationReasonConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderCancellationReasonConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderCancellationReasonConfigs.properties.note.label}</Table.Td>
        <Table.Td style={{ maxWidth: 300 }}>{entity.note}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderCancellationReasonConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={OrderCancellationReasonConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={OrderCancellationReasonConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default OrderCancellationReasonManage;
