import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import BrandConfigs from "~/pages/Admin-brand/BrandConfigs";
import DateUtils from "~/utils/DateUtils";

const listResponse = {
  content: [
    {
      id: 50,
      createdAt: "2022-03-21T20:16:00Z",
      updatedAt: "2022-06-06T15:32:43Z",
      name: "Cronin, Schmitt and Conroy",
      code: "9738",
      description: "Remove head/neck sutures",
      status: 3,
    },
    {
      id: 49,
      createdAt: "2021-06-17T00:17:30Z",
      updatedAt: "2021-08-06T11:33:59Z",
      name: "Kautzer, Marvin and Hoppe",
      code: "3982",
      description: "Imp/rep crtd sinus lead",
      status: 2,
    },
    {
      id: 48,
      createdAt: "2021-10-30T04:06:23Z",
      updatedAt: "2022-05-15T09:32:00Z",
      name: "Hilll-Bode",
      code: "9389",
      description: "Rehabilitation NEC",
      status: 2,
    },
    {
      id: 47,
      createdAt: "2021-10-27T17:40:07Z",
      updatedAt: "2022-04-15T18:03:49Z",
      name: "Ruecker and Sons",
      code: "9423",
      description: "Neuroleptic therapy",
      status: 1,
    },
    {
      id: 46,
      createdAt: "2021-08-24T13:30:01Z",
      updatedAt: "2022-06-05T05:53:44Z",
      name: "Hessel Group",
      code: "5912",
      description: "Lap lys perivesureth adh",
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 50,
  totalPages: 10,
  last: false,
};

function BrandManage() {
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
        <Highlight highlightColor="blue" size="sm">
          {entity.code}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{BrandConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{BrandConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{BrandConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{BrandConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{BrandConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{BrandConfigs.properties.description.label}</Table.Td>
        <Table.Td maw={300}>{entity.description}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{BrandConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={BrandConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={BrandConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default BrandManage;
