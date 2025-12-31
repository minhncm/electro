import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import DestinationConfigs from "~/pages/Admin-destination/DestinationConfigs";

const listResponse = {
  content: [
    {
      id: 4,
      createdAt: "2021-12-30T08:41:07Z",
      updatedAt: "2021-11-03T00:49:17Z",
      contactFullname: "Dan Wellington",
      contactEmail: "gmanders3@bandcamp.com",
      contactPhone: "03123131231",
      address: {
        id: 24,
        createdAt: "2022-05-03T02:02:06Z",
        updatedAt: "2021-12-15T02:32:12Z",
        line: "27 7th Alley",
        province: {
          id: 10,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Hà Giang",
          code: "02",
        },
        district: {
          id: 28,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận Hà Đông",
          code: "268",
        },
        ward: null,
      },
      status: 1,
    },
    {
      id: 3,
      createdAt: "2021-10-19T11:02:53Z",
      updatedAt: "2022-02-25T14:47:06Z",
      contactFullname: "Vin Diesel",
      contactEmail: "gnegus2@nationalgeographic.com",
      contactPhone: "03123131231",
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
      status: 2,
    },
    {
      id: 2,
      createdAt: "2021-08-10T03:26:25Z",
      updatedAt: "2021-11-24T18:59:50Z",
      contactFullname: "Johny Down",
      contactEmail: "saleksandrov1@twitpic.com",
      contactPhone: "03123131231",
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
      status: 2,
    },
    {
      id: 1,
      createdAt: "2021-10-17T19:13:21Z",
      updatedAt: "2022-01-14T19:02:33Z",
      contactFullname: "Mike Smith",
      contactEmail: "jdaulby0@chron.com",
      contactPhone: "03123131231",
      address: {
        id: 21,
        createdAt: "2021-08-13T20:01:01Z",
        updatedAt: "2022-02-06T11:06:42Z",
        line: "3851 Kinsman Trail",
        province: {
          id: 4,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Hải Dương",
          code: "30",
        },
        district: {
          id: 18,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận Hai Bà Trưng",
          code: "007",
        },
        ward: null,
      },
      status: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 4,
  totalPages: 1,
  last: true,
};

function DestinationManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.address.line || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.address.province?.name || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.address.district?.name || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.contactFullname.label}</Table.Td>
        <Table.Td>{entity.contactFullname}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.contactEmail.label}</Table.Td>
        <Table.Td>{entity.contactEmail}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.contactPhone.label}</Table.Td>
        <Table.Td>{entity.contactPhone}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties["address.line"].label}</Table.Td>
        <Table.Td>{entity.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties["address.province.name"].label}</Table.Td>
        <Table.Td>{entity.address.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties["address.district.name"].label}</Table.Td>
        <Table.Td>{entity.address.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={DestinationConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={DestinationConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default DestinationManage;
