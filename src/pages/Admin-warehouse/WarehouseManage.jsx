import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";

const listResponse = {
  content: [
    {
      id: 3,
      createdAt: "2021-10-16T08:47:15Z",
      updatedAt: "2021-08-28T11:03:44Z",
      code: "WARE-C",
      name: "Kho C",
      address: null,
      status: 2,
    },
    {
      id: 2,
      createdAt: "2022-05-28T05:11:14Z",
      updatedAt: "2022-02-25T08:13:22Z",
      code: "WARE-B",
      name: "Kho B",
      address: {
        id: 23,
        createdAt: "2021-06-21T07:13:51Z",
        updatedAt: "2021-06-09T02:31:20Z",
        line: "6 Harper Plaza",
        province: {
          id: 5,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Hải Phòng",
          code: "31",
        },
        district: {
          id: 20,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận Thanh Xuân",
          code: "009",
        },
        ward: null,
      },
      status: 1,
    },
    {
      id: 1,
      createdAt: "2022-03-16T11:12:55Z",
      updatedAt: "2021-11-07T21:05:32Z",
      code: "WARE-A",
      name: "Kho A",
      address: {
        id: 22,
        createdAt: "2021-11-23T04:49:42Z",
        updatedAt: "2021-06-09T20:18:32Z",
        line: "551 Ridge Oak Crossing",
        province: {
          id: 8,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Hà Nam",
          code: "35",
        },
        district: {
          id: 5,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận 11",
          code: "772",
        },
        ward: null,
      },
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 3,
  totalPages: 1,
  last: true,
};

function WarehouseManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
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
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{WarehouseConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WarehouseConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WarehouseConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WarehouseConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WarehouseConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WarehouseConfigs.properties["address.line"].label}</Table.Td>
        <Table.Td>{entity.address?.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WarehouseConfigs.properties["address.province.name"].label}</Table.Td>
        <Table.Td>{entity.address?.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WarehouseConfigs.properties["address.district.name"].label}</Table.Td>
        <Table.Td>{entity.address?.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WarehouseConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={WarehouseConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={WarehouseConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default WarehouseManage;
