import { Code, Highlight, Stack, Table } from "@mantine/core";
import ManageHeader from "~/components/ManageHeader";
import RoleConfigs from "~/pages/Admin-role/RoleConfigs";
import SearchPanel from "~/components/SearchPanel";
import FilterPanel from "~/components/FilterPanel";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import ManagePagination from "~/components/ManagePagination";
import DateUtils from "~/utils/DateUtils";
import RoleBagdeStatus from "~/components/RoleBagdeStatus";

const listResponse = {
  content: [
    {
      id: 3,
      createdAt: "1989-01-25T16:05:02Z",
      updatedAt: "2001-01-13T02:01:36Z",
      code: "CUSTOMER",
      name: "Khách hàng",
      status: 1,
    },
    {
      id: 2,
      createdAt: "1995-08-23T10:15:34Z",
      updatedAt: "1983-06-17T20:01:29Z",
      code: "EMPLOYEE",
      name: "Nhân viên",
      status: 1,
    },
    {
      id: 1,
      createdAt: "1971-04-11T00:45:46Z",
      updatedAt: "2006-04-25T20:05:23Z",
      code: "ADMIN",
      name: "Quản trị viên",
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 3,
  totalPages: 1,
  last: true,
};

function RoleManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.code}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <RoleBagdeStatus status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{RoleConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{RoleConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{RoleConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{RoleConfigs.properties.code.label}</Table.Td>
        <Table.Td>
          <Code>{entity.code}</Code>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{RoleConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{RoleConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <RoleBagdeStatus status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={RoleConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse}>
        <ManageTable
          listResponse={listResponse}
          properties={RoleConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        />
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default RoleManage;
