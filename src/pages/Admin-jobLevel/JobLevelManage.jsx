import { Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import ManagePagination from "~/components/ManagePagination";
import DateUtils from "~/utils/DateUtils";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import JobLevelConfigs from "~/pages/Admin-jobLevel/JobLevelConfigs";

const listResponse = {
  content: [
    {
      id: 4,
      createdAt: "2022-02-08T12:12:42Z",
      updatedAt: "2021-09-16T14:32:18Z",
      name: "Fresher",
      status: 1,
    },
    {
      id: 3,
      createdAt: "2022-01-20T05:14:44Z",
      updatedAt: "2021-08-30T05:29:20Z",
      name: "Intern",
      status: 3,
    },
    {
      id: 2,
      createdAt: "2021-12-08T09:13:12Z",
      updatedAt: "2022-03-26T12:37:23Z",
      name: "Master",
      status: 2,
    },
    {
      id: 1,
      createdAt: "2021-09-11T16:37:21Z",
      updatedAt: "2021-08-20T03:54:26Z",
      name: "Senior",
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 4,
  totalPages: 1,
  last: true,
};

function JobLevelManage() {
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
        <Table.Td>{JobLevelConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{JobLevelConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{JobLevelConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{JobLevelConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{JobLevelConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={JobLevelConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse}>
        <ManageTable
          listResponse={listResponse}
          properties={JobLevelConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        />
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default JobLevelManage;
