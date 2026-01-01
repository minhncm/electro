import { Code, ColorSwatch, Group, Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import OrderResourceConfigs from "~/pages/Admin-order-resourse/OrderResourceConfigs";

const listResponse = {
  content: [
    {
      id: 5,
      createdAt: "2021-12-21T00:55:27Z",
      updatedAt: "2022-06-03T12:34:58Z",
      code: "WEB",
      name: "Website",
      color: "Pink",
      customerResource: {
        id: 3,
        createdAt: "2022-04-23T23:46:43Z",
        updatedAt: "2021-10-21T12:59:04Z",
        code: "64616-082",
        name: "Instagram",
        description: "Sedative, hypnotic or anxiolytic dependence, continuous",
        color: "Crimson",
        status: 2,
      },
      status: 1,
    },
    {
      id: 4,
      createdAt: "2021-12-31T00:37:30Z",
      updatedAt: "2021-09-22T16:11:03Z",
      code: "POS",
      name: "POS",
      color: "Indigo",
      customerResource: {
        id: 2,
        createdAt: "2022-01-11T01:53:09Z",
        updatedAt: "2022-05-16T12:00:07Z",
        code: "76358-195",
        name: "Google",
        description: "Blisters, epidermal loss [second degree] of hand, unspecified site",
        color: "Violet",
        status: 3,
      },
      status: 1,
    },
    {
      id: 3,
      createdAt: "2021-12-22T13:39:26Z",
      updatedAt: "2022-05-17T01:30:22Z",
      code: "HRV",
      name: "Haravan",
      color: "Blue",
      customerResource: {
        id: 1,
        createdAt: "2021-08-25T18:48:14Z",
        updatedAt: "2021-10-18T21:58:04Z",
        code: "53499-5971",
        name: "Facebook",
        description: "Congenital mitral insufficiency",
        color: "Blue",
        status: 1,
      },
      status: 2,
    },
    {
      id: 2,
      createdAt: "2021-08-10T01:25:22Z",
      updatedAt: "2021-11-07T20:30:06Z",
      code: "FBK",
      name: "Facebook",
      color: "Yellow",
      customerResource: null,
      status: 1,
    },
    {
      id: 1,
      createdAt: "2022-04-22T04:46:21Z",
      updatedAt: "2022-02-12T21:37:06Z",
      code: "BIZ",
      name: "Bizweb",
      color: "Orange",
      customerResource: null,
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  last: true,
};

function OrderResourceManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.code}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ColorSwatch color={entity.color} />
          <Code>{entity.color.toLowerCase()}</Code>
        </Group>
      </Table.Td>
      <Table.Td>
        {entity.customerResource && (
          <Group gap="xs">
            <ColorSwatch color={entity.customerResource.color} />
            <Highlight size="sm">{entity.customerResource.name}</Highlight>
          </Group>
        )}
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{OrderResourceConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderResourceConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderResourceConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderResourceConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderResourceConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderResourceConfigs.properties.color.label}</Table.Td>
        <Table.Td>
          <Group gap="xs">
            <ColorSwatch color={entity.color} />
            <Code>{entity.color.toLowerCase()}</Code>
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderResourceConfigs.properties["customerResource.name"].label}</Table.Td>
        <Table.Td>
          {entity.customerResource && (
            <Group gap="xs">
              <ColorSwatch color={entity.customerResource.color} />
              {entity.customerResource.name}
            </Group>
          )}
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OrderResourceConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={OrderResourceConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={OrderResourceConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default OrderResourceManage;
