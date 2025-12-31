import { ActionIcon, Highlight, Stack, Table, Text } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import MiscUtils from "~/utils/MiscUtils";
import PurchaseOrderConfigs from "~/pages/Admin-purchase-order/PurchaseOrderConfigs";
import PurchaseOrderStatusBadge from "~/components/PurchaseOrderStatusBadge";

const listResponse = {
  content: [
    {
      id: 5,
      createdAt: "2022-05-08T21:34:55Z",
      updatedAt: "2022-06-17T22:16:04Z",
      code: "52686-224",
      supplier: {
        id: 3,
        createdAt: "2022-05-07T14:04:34Z",
        updatedAt: "2021-08-11T06:11:43Z",
        displayName: "Topicblab",
        code: "43419-861",
        contactFullname: "Alla Gunnell",
        contactEmail: "agunnell2@g.co",
        contactPhone: "0919944500",
        companyName: "Voolith",
        taxCode: "68001-237",
        email: "agunnell2@amazonaws.com",
        phone: "303-523-6126",
        fax: "Sub-Ex",
        website: null,
        address: {
          id: 15,
          createdAt: "2021-08-06T20:47:45Z",
          updatedAt: "2021-12-18T23:49:55Z",
          line: "65 Londonderry Pass",
          province: {
            id: 5,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Hải Phòng",
            code: "31",
          },
          district: {
            id: 21,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Huyện Sóc Sơn",
            code: "016",
          },
          ward: null,
        },
        description: "Man replac invert uterus",
        note: "Burn NOS ear",
        status: 2,
      },
      purchaseOrderVariants: [],
      destination: {
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
      totalAmount: 1250000.0,
      note: null,
      status: 2,
      dockets: [
        {
          id: 5,
          createdAt: "2021-12-16T10:41:03Z",
          updatedAt: "2021-08-05T10:16:06Z",
          type: 1,
          code: "68788-108",
          warehouse: {
            id: 2,
            createdAt: "2022-05-28T05:11:14Z",
            updatedAt: "2022-02-25T08:13:22Z",
            code: "WARE-B",
            name: "Kho B",
            status: 1,
          },
          status: 2,
        },
      ],
    },
    {
      id: 4,
      createdAt: "2021-12-06T06:14:48Z",
      updatedAt: "2021-10-05T06:10:53Z",
      code: "09043-110",
      supplier: {
        id: 2,
        createdAt: "2021-07-15T12:55:46Z",
        updatedAt: "2021-09-20T08:40:51Z",
        displayName: "Roomm",
        code: "49035-519",
        contactFullname: "Jeth Knipe",
        contactEmail: "jknipe1@nymag.com",
        contactPhone: "0919944500",
        companyName: "Babblestorm",
        taxCode: "43598-012",
        email: "jknipe1@woothemes.com",
        phone: "134-360-5820",
        fax: "Zathin",
        website: null,
        address: {
          id: 14,
          createdAt: "2021-10-29T21:00:41Z",
          updatedAt: "2021-07-04T07:46:37Z",
          line: "5 Loeprich Crossing",
          province: {
            id: 3,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Bắc Ninh",
            code: "27",
          },
          district: {
            id: 6,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Quận 4",
            code: "773",
          },
          ward: null,
        },
        description: "Insert antimicrobial env",
        note: "Power aircraft acc-psngr",
        status: 1,
      },
      purchaseOrderVariants: [],
      destination: {
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
      totalAmount: 2000000.0,
      note: "Revision of Drainage Device in L Wrist Jt, Open Approach",
      status: 2,
      dockets: [
        {
          id: 4,
          createdAt: "2022-01-26T18:34:39Z",
          updatedAt: "2022-04-22T15:26:16Z",
          type: 1,
          code: "50436-646",
          warehouse: {
            id: 1,
            createdAt: "2022-03-16T11:12:55Z",
            updatedAt: "2021-11-07T21:05:32Z",
            code: "WARE-A",
            name: "Kho A",
            status: 1,
          },
          status: 2,
        },
      ],
    },
    {
      id: 3,
      createdAt: "2021-10-16T17:57:29Z",
      updatedAt: "2021-08-07T06:54:28Z",
      code: "68479-116",
      supplier: {
        id: 2,
        createdAt: "2021-07-15T12:55:46Z",
        updatedAt: "2021-09-20T08:40:51Z",
        displayName: "Roomm",
        code: "49035-519",
        contactFullname: "Jeth Knipe",
        contactEmail: "jknipe1@nymag.com",
        contactPhone: "0919944500",
        companyName: "Babblestorm",
        taxCode: "43598-012",
        email: "jknipe1@woothemes.com",
        phone: "134-360-5820",
        fax: "Zathin",
        website: null,
        address: {
          id: 14,
          createdAt: "2021-10-29T21:00:41Z",
          updatedAt: "2021-07-04T07:46:37Z",
          line: "5 Loeprich Crossing",
          province: {
            id: 3,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Bắc Ninh",
            code: "27",
          },
          district: {
            id: 6,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Quận 4",
            code: "773",
          },
          ward: null,
        },
        description: "Insert antimicrobial env",
        note: "Power aircraft acc-psngr",
        status: 1,
      },
      purchaseOrderVariants: [
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
          cost: 1500000.0,
          quantity: 2,
          amount: 3000000.0,
        },
      ],
      destination: {
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
      totalAmount: 3000000.0,
      note: null,
      status: 1,
      dockets: [
        {
          id: 3,
          createdAt: "2022-02-19T21:04:06Z",
          updatedAt: "2021-12-19T17:26:02Z",
          type: 1,
          code: "36987-325",
          warehouse: {
            id: 3,
            createdAt: "2021-10-16T08:47:15Z",
            updatedAt: "2021-08-28T11:03:44Z",
            code: "WARE-C",
            name: "Kho C",
            status: 2,
          },
          status: 1,
        },
      ],
    },
    {
      id: 2,
      createdAt: "2022-07-13T09:31:05Z",
      updatedAt: "2021-09-12T18:47:12Z",
      code: "48951-203",
      supplier: {
        id: 2,
        createdAt: "2021-07-15T12:55:46Z",
        updatedAt: "2021-09-20T08:40:51Z",
        displayName: "Roomm",
        code: "49035-519",
        contactFullname: "Jeth Knipe",
        contactEmail: "jknipe1@nymag.com",
        contactPhone: "0919944500",
        companyName: "Babblestorm",
        taxCode: "43598-012",
        email: "jknipe1@woothemes.com",
        phone: "134-360-5820",
        fax: "Zathin",
        website: null,
        address: {
          id: 14,
          createdAt: "2021-10-29T21:00:41Z",
          updatedAt: "2021-07-04T07:46:37Z",
          line: "5 Loeprich Crossing",
          province: {
            id: 3,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Bắc Ninh",
            code: "27",
          },
          district: {
            id: 6,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Quận 4",
            code: "773",
          },
          ward: null,
        },
        description: "Insert antimicrobial env",
        note: "Power aircraft acc-psngr",
        status: 1,
      },
      purchaseOrderVariants: [
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
          cost: 1500000.0,
          quantity: 1,
          amount: 1500000.0,
        },
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
          cost: 500000.0,
          quantity: 2,
          amount: 1000000.0,
        },
      ],
      destination: {
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
      totalAmount: 2500000.0,
      note: null,
      status: 2,
      dockets: [
        {
          id: 2,
          createdAt: "2021-12-05T04:44:55Z",
          updatedAt: "2021-10-13T04:24:38Z",
          type: 1,
          code: "36987-145",
          warehouse: {
            id: 2,
            createdAt: "2022-05-28T05:11:14Z",
            updatedAt: "2022-02-25T08:13:22Z",
            code: "WARE-B",
            name: "Kho B",
            status: 1,
          },
          status: 1,
        },
      ],
    },
    {
      id: 1,
      createdAt: "2022-03-19T15:22:03Z",
      updatedAt: "2022-04-01T21:27:05Z",
      code: "41520-499",
      supplier: {
        id: 1,
        createdAt: "2022-05-15T19:47:51Z",
        updatedAt: "2021-12-06T08:10:37Z",
        displayName: "Yodo",
        code: "0944-3032",
        contactFullname: "Aubrie Cowley",
        contactEmail: "acowley0@mysql.com",
        contactPhone: "0919944500",
        companyName: "Rhynyx",
        taxCode: "49349-988",
        email: "acowley0@japanpost.jp",
        phone: "714-908-9882",
        fax: "Holdlamis",
        website: null,
        address: {
          id: 10,
          createdAt: "2021-10-03T02:46:55Z",
          updatedAt: "2021-11-24T17:13:34Z",
          line: "0 Coleman Park",
          province: {
            id: 9,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Cà Mau",
            code: "96",
          },
          district: {
            id: 6,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Quận 4",
            code: "773",
          },
          ward: null,
        },
        description: "Oth uni salpingo-oophor",
        note: "Meningococc endocarditis",
        status: 3,
      },
      purchaseOrderVariants: [
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
          cost: 500000.0,
          quantity: 1,
          amount: 500000.0,
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
          cost: 250000.0,
          quantity: 2,
          amount: 500000.0,
        },
      ],
      destination: {
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
      totalAmount: 1000000.0,
      note: "Revision of Intraluminal Device in Fallopian Tube, Endo",
      status: 1,
      dockets: [
        {
          id: 1,
          createdAt: "2022-07-07T17:17:58Z",
          updatedAt: "2022-02-22T15:04:49Z",
          type: 1,
          code: "68016-008",
          warehouse: {
            id: 1,
            createdAt: "2022-03-16T11:12:55Z",
            updatedAt: "2021-11-07T21:05:32Z",
            code: "WARE-A",
            name: "Kho A",
            status: 1,
          },
          status: 3,
        },
      ],
    },
  ],
  page: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  last: true,
};

function PurchaseOrderManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.code}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.supplier.displayName}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Stack spacing={0}>
          <Highlight highlightColor="blue" size="sm">
            {entity.destination.address.line || ""}
          </Highlight>
          <Text inherit>
            {[entity.destination.address.district?.name, entity.destination.address.province?.name]
              .filter(Boolean)
              .join(", ")}
          </Text>
        </Stack>
      </Table.Td>
      <Table.Td style={{ textAlign: "right" }}>{MiscUtils.toVND(entity.totalAmount)}</Table.Td>
      <Table.Td>
        <ActionIcon color="blue" variant="subtle" size={24} title="Tạo phiếu nhập kho">
          <Plus />
        </ActionIcon>
      </Table.Td>
      <Table.Td>
        <PurchaseOrderStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{PurchaseOrderConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PurchaseOrderConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PurchaseOrderConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PurchaseOrderConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PurchaseOrderConfigs.properties["supplier.displayName"].label}</Table.Td>
        <Table.Td>{entity.supplier.displayName}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PurchaseOrderConfigs.properties["destination.address.line"].label}</Table.Td>
        <Table.Td>
          <Stack spacing={0}>
            <Text inherit>{entity.destination.address.line}</Text>
            <Text inherit>
              {[entity.destination.address.district?.name, entity.destination.address.province?.name]
                .filter(Boolean)
                .join(", ")}
            </Text>
          </Stack>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Người liên hệ điểm nhập hàng</Table.Td>
        <Table.Td>
          <Stack spacing={0}>
            {[entity.destination.contactFullname, entity.destination.contactPhone, entity.destination.contactEmail]
              .filter(Boolean)
              .map((item) => (
                <Text key={item} inherit>
                  {item}
                </Text>
              ))}
          </Stack>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PurchaseOrderConfigs.properties.totalAmount.label}</Table.Td>
        <Table.Td>{MiscUtils.toVND(entity.totalAmount)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PurchaseOrderConfigs.properties.note.label}</Table.Td>
        <Table.Td style={{ maxWidth: 300 }}>{entity.note}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PurchaseOrderConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <PurchaseOrderStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={PurchaseOrderConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={PurchaseOrderConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default PurchaseOrderManage;
