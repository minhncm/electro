import { Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import OfficeConfigs from "./OfficeConfigs";
import ManagePagination from "~/components/ManagePagination";
import DateUtils from "~/utils/DateUtils";
import ActiveStatusBadge from "~/components/ActiveStatusBadge";

const listResponse = {
  content: [
    {
      id: 5,
      createdAt: "2021-08-18T04:44:50Z",
      updatedAt: "2021-07-19T12:33:23Z",
      name: "BlogXS",
      address: {
        id: 5,
        createdAt: "2021-10-31T22:12:07Z",
        updatedAt: "2021-06-20T23:36:16Z",
        line: "18726 Delaware Parkway",
        province: {
          id: 1,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Hà Nội",
          code: "01",
        },
        district: {
          id: 26,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận Bắc Từ Liêm",
          code: "021",
        },
        ward: {
          id: 4,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Phường 09",
          code: "27262",
        },
      },
      status: 3,
    },
    {
      id: 4,
      createdAt: "2021-09-14T14:49:48Z",
      updatedAt: "2022-02-10T20:03:22Z",
      name: "BlogXS",
      address: {
        id: 4,
        createdAt: "2022-03-20T07:32:29Z",
        updatedAt: "2021-08-27T16:10:58Z",
        line: "3918 Bashford Junction",
        province: {
          id: 29,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Thành phố Hồ Chí Minh",
          code: "79",
        },
        district: {
          id: 1,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận 1",
          code: "760",
        },
        ward: {
          id: 8937,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Phường Đa Kao",
          code: "26737",
        },
      },
      status: 1,
    },
    {
      id: 3,
      createdAt: "2021-06-29T03:10:15Z",
      updatedAt: "2021-09-21T15:05:41Z",
      name: "Yadel",
      address: {
        id: 3,
        createdAt: "2021-08-15T14:35:21Z",
        updatedAt: "2022-04-08T15:22:57Z",
        line: "59 Del Sol Road",
        province: {
          id: 10,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Hà Giang",
          code: "02",
        },
        district: {
          id: 2,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận 12",
          code: "761",
        },
        ward: {
          id: 3,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Phường 13",
          code: "27259",
        },
      },
      status: 2,
    },
    {
      id: 2,
      createdAt: "2021-07-09T01:07:20Z",
      updatedAt: "2021-10-23T01:36:12Z",
      name: "Skyndu",
      address: {
        id: 2,
        createdAt: "2021-08-22T14:08:28Z",
        updatedAt: "2021-08-31T00:42:14Z",
        line: "9121 Calypso Street",
        province: {
          id: 7,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Thái Bình",
          code: "34",
        },
        district: {
          id: 26,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận Bắc Từ Liêm",
          code: "021",
        },
        ward: {
          id: 2,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Phường 10",
          code: "27340",
        },
      },
      status: 1,
    },
    {
      id: 1,
      createdAt: "2021-09-21T00:19:24Z",
      updatedAt: "2021-08-26T10:40:14Z",
      name: "Talane",
      address: {
        id: 1,
        createdAt: "2021-09-29T14:58:33Z",
        updatedAt: "2021-07-30T07:27:56Z",
        line: "140 Commercial Way",
        province: {
          id: 7,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Thái Bình",
          code: "34",
        },
        district: {
          id: 28,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận Hà Đông",
          code: "268",
        },
        ward: {
          id: 1,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Phường 06",
          code: "27337",
        },
      },
      status: 3,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  last: true,
};

function OfficeManage() {
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
          {entity.address.line || ""}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.address.province?.name || ""}
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
        <Table.Td>{OfficeConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OfficeConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OfficeConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OfficeConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OfficeConfigs.properties["address.line"].label}</Table.Td>
        <Table.Td>{entity.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OfficeConfigs.properties["address.province.name"].label}</Table.Td>
        <Table.Td>{entity.address.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OfficeConfigs.properties["address.province.code"].label}</Table.Td>
        <Table.Td>{entity.address.province?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OfficeConfigs.properties["address.district.name"].label}</Table.Td>
        <Table.Td>{entity.address.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OfficeConfigs.properties["address.district.code"].label}</Table.Td>
        <Table.Td>{entity.address.district?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{OfficeConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <ActiveStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={OfficeConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse}>
        <ManageTable
          listResponse={listResponse}
          properties={OfficeConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        />
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default OfficeManage;
