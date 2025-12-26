import { Code, ColorSwatch, Group, Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import ManagePagination from "~/components/ManagePagination";
import DateUtils from "~/utils/DateUtils";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import CustomerGroupConfigs from "~/pages/Admin-customer-group/CustomerGroupConfigs";

const listResponse = {
  content: [
    {
      id: 5,
      createdAt: "2021-10-28T17:20:18Z",
      updatedAt: "2021-12-10T13:31:28Z",
      code: "76436-202",
      name: "VIP",
      description: "Common ventricle",
      color: "Green",
      status: 3,
    },
    {
      id: 4,
      createdAt: "2021-10-20T10:12:24Z",
      updatedAt: "2022-02-28T12:00:00Z",
      code: "63304-551",
      name: "Potential",
      description: "Unspecified disorder of carbohydrate transport and metabolism",
      color: "Orange",
      status: 2,
    },
    {
      id: 3,
      createdAt: "2022-01-20T04:21:17Z",
      updatedAt: "2022-02-05T10:55:09Z",
      code: "65162-539",
      name: "Instagram",
      description: "Salmonella osteomyelitis",
      color: "Red",
      status: 1,
    },
    {
      id: 2,
      createdAt: "2022-03-29T12:59:34Z",
      updatedAt: "2021-08-26T00:05:04Z",
      code: "0904-6089",
      name: "Google",
      description: "Amphetamine and other psychostimulant dependence, unspecified",
      color: "Pink",
      status: 3,
    },
    {
      id: 1,
      createdAt: "2022-01-23T07:14:28Z",
      updatedAt: "2021-12-24T00:08:47Z",
      code: "52270-001",
      name: "Facebook",
      description:
        "Other and unspecified malignant neoplasms of lymphoid and histiocytic tissue, lymph nodes of multiple sites",
      color: "Blue",
      status: 2,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  last: true,
};

function CustomerGroupManage() {
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
        <Table.Td>{CustomerGroupConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerGroupConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerGroupConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerGroupConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerGroupConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerGroupConfigs.properties.description.label}</Table.Td>
        <Table.Td maw={300}>{entity.description}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerGroupConfigs.properties.color.label}</Table.Td>
        <Table.Td>
          <Group gap="xs">
            <ColorSwatch color={entity.color} />
            <Code>{entity.color.toLowerCase()}</Code>
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerGroupConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={CustomerGroupConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={CustomerGroupConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default CustomerGroupManage;
