import { Code, ColorSwatch, Group, Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import ManagePagination from "~/components/ManagePagination";
import DateUtils from "~/utils/DateUtils";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import CustomerResourseConfigs from "~/pages/Admin-customer-resource/CustomerResourseConfigs";

const listResponse = {
  content: [
    {
      id: 5,
      createdAt: "2022-02-13T03:28:33Z",
      updatedAt: "2022-05-10T20:36:22Z",
      code: "13537-455",
      name: "AVD",
      description: "Other testicular hypofunction",
      color: "Orange",
      status: 1,
    },
    {
      id: 4,
      createdAt: "2022-03-19T09:57:29Z",
      updatedAt: "2021-11-28T04:50:59Z",
      code: "11559-724",
      name: "Normal",
      description: "Unspecified failure in dosage",
      color: "Green",
      status: 1,
    },
    {
      id: 3,
      createdAt: "2022-04-23T23:46:43Z",
      updatedAt: "2021-10-21T12:59:04Z",
      code: "64616-082",
      name: "Instagram",
      description: "Sedative, hypnotic or anxiolytic dependence, continuous",
      color: "Crimson",
      status: 2,
    },
    {
      id: 2,
      createdAt: "2022-01-11T01:53:09Z",
      updatedAt: "2022-05-16T12:00:07Z",
      code: "76358-195",
      name: "Google",
      description: "Blisters, epidermal loss [second degree] of hand, unspecified site",
      color: "Violet",
      status: 3,
    },
    {
      id: 1,
      createdAt: "2021-08-25T18:48:14Z",
      updatedAt: "2021-10-18T21:58:04Z",
      code: "53499-5971",
      name: "Facebook",
      description: "Congenital mitral insufficiency",
      color: "Blue",
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  last: true,
};

function CustomerResourseManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.code}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.name}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ColorSwatch color={entity.color} />
          <Code>{entity.color.toLowerCase()}</Code>
        </Group>
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{CustomerResourseConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerResourseConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerResourseConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerResourseConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerResourseConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerResourseConfigs.properties.description.label}</Table.Td>
        <Table.Td maw={300}>{entity.description}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerResourseConfigs.properties.color.label}</Table.Td>
        <Table.Td>
          <Group gap="xs">
            <ColorSwatch color={entity.color} />
            <Code>{entity.color.toLowerCase()}</Code>
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerResourseConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={CustomerResourseConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={CustomerResourseConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default CustomerResourseManage;
