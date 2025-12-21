import { Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DepartmentConfigs from "./DepartmentConfigs";
import ManagePagination from "~/components/ManagePagination";
import DateUtils from "~/utils/DateUtils";
import ActiveStatusBadge from "~/components/ActiveStatusBadge";

const listResponse = {
  content: [
    {
      id: 5,
      createdAt: "2021-10-20T18:50:28Z",
      updatedAt: "2021-07-31T18:58:22Z",
      name: "Human Resources",
      status: 2,
    },
    {
      id: 4,
      createdAt: "2021-08-07T16:28:26Z",
      updatedAt: "2021-11-20T08:29:28Z",
      name: "Support",
      status: 3,
    },
    {
      id: 3,
      createdAt: "2021-11-01T19:55:33Z",
      updatedAt: "2021-11-28T14:13:39Z",
      name: "Human Resources",
      status: 3,
    },
    {
      id: 2,
      createdAt: "2022-05-21T16:55:27Z",
      updatedAt: "2022-01-06T00:26:20Z",
      name: "Training",
      status: 2,
    },
    {
      id: 1,
      createdAt: "2022-06-01T17:50:54Z",
      updatedAt: "2021-09-28T08:01:05Z",
      name: "Legal",
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  last: true,
};

function DepartmentManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.name}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <ActiveStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <ActiveStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={DepartmentConfigs.manageTitle} />

      <SearchPanel />

      <FilterPanel />

      <ManageMain listResponse={listResponse}>
        <ManageTable
          listResponse={listResponse}
          properties={DepartmentConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        />
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default DepartmentManage;
