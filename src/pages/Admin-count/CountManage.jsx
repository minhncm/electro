import { Highlight, Stack, Table } from "@mantine/core";
import DocketStatusBadge from "~/components/DocketStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import CountConfigs from "~/pages/Admin-count/CountConfigs";
import DateUtils from "~/utils/DateUtils";
import MiscUtils from "~/utils/MiscUtils";

const listResponse = {
  content: [
    {
      id: 5,
      createdAt: "2021-07-10T15:24:16Z",
      updatedAt: "2022-03-03T20:33:40Z",
      code: "51668-402",
      warehouse: {
        id: 3,
        createdAt: "2021-10-16T08:47:15Z",
        updatedAt: "2021-08-28T11:03:44Z",
        code: "WARE-C",
        name: "Kho C",
        address: null,
        status: 2,
      },
      countVariants: [],
      note: "Universidad Tecnológica del Peru",
      status: 1,
    },
    {
      id: 4,
      createdAt: "2021-10-04T06:07:06Z",
      updatedAt: "2021-11-11T04:42:22Z",
      code: "53808-067",
      warehouse: {
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
      countVariants: [],
      note: "Universidade Federal Fluminense",
      status: 3,
    },
    {
      id: 3,
      createdAt: "2021-12-23T04:30:25Z",
      updatedAt: "2022-03-11T02:56:07Z",
      code: "66097-003",
      warehouse: {
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
      countVariants: [],
      note: null,
      status: 2,
    },
    {
      id: 2,
      createdAt: "2021-09-26T21:07:17Z",
      updatedAt: "2022-06-06T02:44:39Z",
      code: "58517-440",
      warehouse: {
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
      countVariants: [],
      note: null,
      status: 3,
    },
    {
      id: 1,
      createdAt: "2022-02-10T19:17:56Z",
      updatedAt: "2022-06-10T01:38:27Z",
      code: "58118-026",
      warehouse: {
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
      countVariants: [
        {
          variant: {
            id: 2,
            createdAt: "2022-05-06T13:40:45Z",
            updatedAt: "2022-04-02T13:30:28Z",
            product: {
              id: 1,
              createdAt: "2022-06-10T04:43:15Z",
              updatedAt: "2021-06-29T03:23:48Z",
              name: "Dell XPS 13 9315",
              code: "0003-1967",
              slug: "ealdus0",
            },
            sku: "52125-433",
            cost: 1.2e7,
            price: 1.25e7,
            properties: {
              content: [
                {
                  id: 1,
                  code: "size",
                  name: "Kích cỡ",
                  value: "M",
                },
                {
                  id: 2,
                  code: "color",
                  name: "Màu sắc",
                  value: "Đỏ",
                },
              ],
              totalElements: 2,
            },
            status: 1,
          },
          inventory: 70,
          actualInventory: 75,
        },
        {
          variant: {
            id: 3,
            createdAt: "2021-07-16T19:36:19Z",
            updatedAt: "2021-12-14T03:10:42Z",
            product: {
              id: 1,
              createdAt: "2022-06-10T04:43:15Z",
              updatedAt: "2021-06-29T03:23:48Z",
              name: "Dell XPS 13 9315",
              code: "0003-1967",
              slug: "ealdus0",
            },
            sku: "48951-8009",
            cost: 1.0e7,
            price: 1.0e7,
            properties: {
              content: [
                {
                  id: 1,
                  code: "size",
                  name: "Kích cỡ",
                  value: "L",
                },
                {
                  id: 2,
                  code: "color",
                  name: "Màu sắc",
                  value: "Đỏ",
                },
              ],
              totalElements: 2,
            },
            status: 1,
          },
          inventory: 30,
          actualInventory: 25,
        },
        {
          variant: {
            id: 1,
            createdAt: "2021-10-22T13:25:57Z",
            updatedAt: "2021-12-13T23:28:15Z",
            product: {
              id: 1,
              createdAt: "2022-06-10T04:43:15Z",
              updatedAt: "2021-06-29T03:23:48Z",
              name: "Dell XPS 13 9315",
              code: "0003-1967",
              slug: "ealdus0",
            },
            sku: "43063-210",
            cost: 9000000.0,
            price: 5500000.0,
            properties: {
              content: [
                {
                  id: 1,
                  code: "size",
                  name: "Kích cỡ",
                  value: "S",
                },
                {
                  id: 2,
                  code: "color",
                  name: "Màu sắc",
                  value: "Đỏ",
                },
              ],
              totalElements: 2,
            },
            status: 2,
          },
          inventory: 80,
          actualInventory: 80,
        },
      ],
      note: "Shikoku Christian College",
      status: 3,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  last: true,
};

function CountManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.code}</Highlight>
      </Table.Td>
      <Table.Td style={{ textAlign: "right" }}>{MiscUtils.formatterPrice(entity.countVariants.length)} SKU</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.warehouse.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <DocketStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{CountConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CountConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CountConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CountConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CountConfigs.properties["warehouse.name"].label}</Table.Td>
        <Table.Td>{entity.warehouse.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CountConfigs.properties.totalVariants.label}</Table.Td>
        <Table.Td>{MiscUtils.formatterPrice(entity.countVariants.length)} SKU</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Ghi chú phiếu kiểm kho</Table.Td>
        <Table.Td style={{ maxWidth: 300 }}>{entity.note}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CountConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <DocketStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={CountConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={CountConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default CountManage;
