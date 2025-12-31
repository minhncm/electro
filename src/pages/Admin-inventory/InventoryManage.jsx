import { ActionIcon, Anchor, Group, Stack, Table, Title, useMantineTheme } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Hash, Plus } from "tabler-icons-react";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ProductInventoryTransactionsModal from "~/components/ProductInventoryTransactionsModal";
import InventoryConfigs from "~/pages/Admin-inventory/InventoryConfigs";

const listResponse = {
  content: [
    {
      product: {
        id: 1,
        createdAt: "2022-06-10T04:43:15Z",
        updatedAt: "2021-06-29T03:23:48Z",
        name: "Dell XPS 13 9315",
        code: "0003-1967",
        slug: "ealdus0",
        brand: {
          id: 3,
          createdAt: "2021-12-05T22:08:25Z",
          updatedAt: "2021-12-22T04:02:07Z",
          name: "Lehner-O'Hara",
          code: "8884",
          description: "Muscle thermography",
          status: 1,
        },
        supplier: {
          id: 5,
          createdAt: "2021-09-18T05:13:01Z",
          updatedAt: "2022-01-02T02:04:03Z",
          displayName: "Kimia",
          code: "49349-675",
          contactFullname: "El De Carlo",
          contactEmail: "ede4@wisc.edu",
          contactPhone: "0919944500",
          companyName: "Kanoodle",
          taxCode: "57520-0467",
          email: "ede4@exblog.jp",
          phone: "509-999-7966",
          fax: "Zaam-Dox",
          website: null,
          address: {
            id: 11,
            createdAt: "2022-01-09T13:34:48Z",
            updatedAt: "2021-12-13T10:34:12Z",
            line: "7 Mosinee Street",
            province: {
              id: 4,
              createdAt: "2023-02-14T17:00:00Z",
              updatedAt: "2023-02-14T17:00:00Z",
              name: "Hải Dương",
              code: "30",
            },
            district: {
              id: 22,
              createdAt: "2023-02-14T17:00:00Z",
              updatedAt: "2023-02-14T17:00:00Z",
              name: "Huyện Đông Anh",
              code: "017",
            },
            ward: null,
          },
          description: "Pancreat transplant NOS",
          note: "Acc poison-analgesic NOS",
          status: 2,
        },
      },
      transactions: [
        {
          docket: {
            id: 3,
            createdAt: "2022-02-19T21:04:06Z",
            updatedAt: "2021-12-19T17:26:02Z",
            type: 1,
            code: "36987-325",
            reason: {
              id: 1,
              createdAt: "2022-01-02T08:22:57Z",
              updatedAt: "2021-12-18T12:24:30Z",
              name: "Nhập kho",
              status: 1,
            },
            warehouse: {
              id: 3,
              createdAt: "2021-10-16T08:47:15Z",
              updatedAt: "2021-08-28T11:03:44Z",
              code: "WARE-C",
              name: "Kho C",
              address: null,
              status: 2,
            },
            purchaseOrder: {
              id: 3,
              createdAt: "2021-10-16T17:57:29Z",
              updatedAt: "2021-08-07T06:54:28Z",
              code: "68479-116",
              status: 1,
            },
            order: null,
            status: 1,
          },
          variant: {
            id: 3,
            createdAt: "2021-07-16T19:36:19Z",
            updatedAt: "2021-12-14T03:10:42Z",
            sku: "48951-8009",
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
          quantity: 2,
        },
        {
          docket: {
            id: 2,
            createdAt: "2021-12-05T04:44:55Z",
            updatedAt: "2021-10-13T04:24:38Z",
            type: 1,
            code: "36987-145",
            reason: {
              id: 1,
              createdAt: "2022-01-02T08:22:57Z",
              updatedAt: "2021-12-18T12:24:30Z",
              name: "Nhập kho",
              status: 1,
            },
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
            purchaseOrder: {
              id: 2,
              createdAt: "2022-07-13T09:31:05Z",
              updatedAt: "2021-09-12T18:47:12Z",
              code: "48951-203",
              status: 2,
            },
            order: null,
            status: 1,
          },
          variant: {
            id: 2,
            createdAt: "2022-05-06T13:40:45Z",
            updatedAt: "2022-04-02T13:30:28Z",
            sku: "52125-433",
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
          quantity: 2,
        },
        {
          docket: {
            id: 2,
            createdAt: "2021-12-05T04:44:55Z",
            updatedAt: "2021-10-13T04:24:38Z",
            type: 1,
            code: "36987-145",
            reason: {
              id: 1,
              createdAt: "2022-01-02T08:22:57Z",
              updatedAt: "2021-12-18T12:24:30Z",
              name: "Nhập kho",
              status: 1,
            },
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
            purchaseOrder: {
              id: 2,
              createdAt: "2022-07-13T09:31:05Z",
              updatedAt: "2021-09-12T18:47:12Z",
              code: "48951-203",
              status: 2,
            },
            order: null,
            status: 1,
          },
          variant: {
            id: 3,
            createdAt: "2021-07-16T19:36:19Z",
            updatedAt: "2021-12-14T03:10:42Z",
            sku: "48951-8009",
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
          quantity: 1,
        },
        {
          docket: {
            id: 1,
            createdAt: "2022-07-07T17:17:58Z",
            updatedAt: "2022-02-22T15:04:49Z",
            type: 1,
            code: "68016-008",
            reason: {
              id: 1,
              createdAt: "2022-01-02T08:22:57Z",
              updatedAt: "2021-12-18T12:24:30Z",
              name: "Nhập kho",
              status: 1,
            },
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
            purchaseOrder: {
              id: 1,
              createdAt: "2022-03-19T15:22:03Z",
              updatedAt: "2022-04-01T21:27:05Z",
              code: "41520-499",
              status: 1,
            },
            order: null,
            status: 3,
          },
          variant: {
            id: 1,
            createdAt: "2021-10-22T13:25:57Z",
            updatedAt: "2021-12-13T23:28:15Z",
            sku: "43063-210",
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
          quantity: 2,
        },
        {
          docket: {
            id: 1,
            createdAt: "2022-07-07T17:17:58Z",
            updatedAt: "2022-02-22T15:04:49Z",
            type: 1,
            code: "68016-008",
            reason: {
              id: 1,
              createdAt: "2022-01-02T08:22:57Z",
              updatedAt: "2021-12-18T12:24:30Z",
              name: "Nhập kho",
              status: 1,
            },
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
            purchaseOrder: {
              id: 1,
              createdAt: "2022-03-19T15:22:03Z",
              updatedAt: "2022-04-01T21:27:05Z",
              code: "41520-499",
              status: 1,
            },
            order: null,
            status: 3,
          },
          variant: {
            id: 2,
            createdAt: "2022-05-06T13:40:45Z",
            updatedAt: "2022-04-02T13:30:28Z",
            sku: "52125-433",
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
          quantity: 1,
        },
      ],
      inventory: 3,
      waitingForDelivery: 0,
      canBeSold: 3,
      areComing: 5,
    },
    {
      product: {
        id: 101,
        createdAt: "2021-09-09T22:01:45Z",
        updatedAt: "2022-01-12T14:36:14Z",
        name: "Lenovo ThinkPad X13 Gen 2 (AMD)",
        code: "prod-87",
        slug: "prod-87",
        brand: {
          id: 3,
          createdAt: "2021-12-05T22:08:25Z",
          updatedAt: "2021-12-22T04:02:07Z",
          name: "Lehner-O'Hara",
          code: "8884",
          description: "Muscle thermography",
          status: 1,
        },
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
      },
      transactions: [
        {
          docket: {
            id: 1,
            createdAt: "2022-07-07T17:17:58Z",
            updatedAt: "2022-02-22T15:04:49Z",
            type: 1,
            code: "68016-008",
            reason: {
              id: 1,
              createdAt: "2022-01-02T08:22:57Z",
              updatedAt: "2021-12-18T12:24:30Z",
              name: "Nhập kho",
              status: 1,
            },
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
            purchaseOrder: {
              id: 1,
              createdAt: "2022-03-19T15:22:03Z",
              updatedAt: "2022-04-01T21:27:05Z",
              code: "41520-499",
              status: 1,
            },
            order: null,
            status: 3,
          },
          variant: {
            id: 103,
            createdAt: "2021-09-09T22:01:45Z",
            updatedAt: "2022-01-12T14:36:14Z",
            sku: "var-87",
            properties: null,
            status: 1,
          },
          quantity: 8,
        },
      ],
      inventory: 8,
      waitingForDelivery: 0,
      canBeSold: 8,
      areComing: 0,
    },
    {
      product: {
        id: 100,
        createdAt: "2021-09-09T22:01:45Z",
        updatedAt: "2022-01-12T14:36:14Z",
        name: "Dell Precision 5540",
        code: "prod-86",
        slug: "prod-86",
        brand: {
          id: 2,
          createdAt: "2021-06-18T03:09:09Z",
          updatedAt: "2022-03-30T06:45:08Z",
          name: "Schowalter, Hartmann and Kihn",
          code: "4994",
          description: "Reduction anal prolapse",
          status: 3,
        },
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
      },
      transactions: [
        {
          docket: {
            id: 1,
            createdAt: "2022-07-07T17:17:58Z",
            updatedAt: "2022-02-22T15:04:49Z",
            type: 1,
            code: "68016-008",
            reason: {
              id: 1,
              createdAt: "2022-01-02T08:22:57Z",
              updatedAt: "2021-12-18T12:24:30Z",
              name: "Nhập kho",
              status: 1,
            },
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
            purchaseOrder: {
              id: 1,
              createdAt: "2022-03-19T15:22:03Z",
              updatedAt: "2022-04-01T21:27:05Z",
              code: "41520-499",
              status: 1,
            },
            order: null,
            status: 3,
          },
          variant: {
            id: 102,
            createdAt: "2021-09-09T22:01:45Z",
            updatedAt: "2022-01-12T14:36:14Z",
            sku: "var-86",
            properties: null,
            status: 1,
          },
          quantity: 13,
        },
      ],
      inventory: 13,
      waitingForDelivery: 0,
      canBeSold: 13,
      areComing: 0,
    },
    {
      product: {
        id: 99,
        createdAt: "2021-09-09T22:01:45Z",
        updatedAt: "2022-01-12T14:36:14Z",
        name: "Dell Alienware x15 R1 GAMING",
        code: "prod-85",
        slug: "prod-85",
        brand: {
          id: 1,
          createdAt: "2022-06-05T05:40:37Z",
          updatedAt: "2022-04-03T18:57:04Z",
          name: "Cruickshank-VonRueden",
          code: "5025",
          description: "Lap abltn liver les/tiss",
          status: 3,
        },
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
      },
      transactions: [
        {
          docket: {
            id: 1,
            createdAt: "2022-07-07T17:17:58Z",
            updatedAt: "2022-02-22T15:04:49Z",
            type: 1,
            code: "68016-008",
            reason: {
              id: 1,
              createdAt: "2022-01-02T08:22:57Z",
              updatedAt: "2021-12-18T12:24:30Z",
              name: "Nhập kho",
              status: 1,
            },
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
            purchaseOrder: {
              id: 1,
              createdAt: "2022-03-19T15:22:03Z",
              updatedAt: "2022-04-01T21:27:05Z",
              code: "41520-499",
              status: 1,
            },
            order: null,
            status: 3,
          },
          variant: {
            id: 101,
            createdAt: "2021-09-09T22:01:45Z",
            updatedAt: "2022-01-12T14:36:14Z",
            sku: "var-85",
            properties: null,
            status: 1,
          },
          quantity: 12,
        },
      ],
      inventory: 12,
      waitingForDelivery: 0,
      canBeSold: 12,
      areComing: 0,
    },
    {
      product: {
        id: 98,
        createdAt: "2021-09-09T22:01:45Z",
        updatedAt: "2022-01-12T14:36:14Z",
        name: "Dell Alienware m15 R6",
        code: "prod-84",
        slug: "prod-84",
        brand: {
          id: 2,
          createdAt: "2021-06-18T03:09:09Z",
          updatedAt: "2022-03-30T06:45:08Z",
          name: "Schowalter, Hartmann and Kihn",
          code: "4994",
          description: "Reduction anal prolapse",
          status: 3,
        },
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
      },
      transactions: [
        {
          docket: {
            id: 1,
            createdAt: "2022-07-07T17:17:58Z",
            updatedAt: "2022-02-22T15:04:49Z",
            type: 1,
            code: "68016-008",
            reason: {
              id: 1,
              createdAt: "2022-01-02T08:22:57Z",
              updatedAt: "2021-12-18T12:24:30Z",
              name: "Nhập kho",
              status: 1,
            },
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
            purchaseOrder: {
              id: 1,
              createdAt: "2022-03-19T15:22:03Z",
              updatedAt: "2022-04-01T21:27:05Z",
              code: "41520-499",
              status: 1,
            },
            order: null,
            status: 3,
          },
          variant: {
            id: 100,
            createdAt: "2021-09-09T22:01:45Z",
            updatedAt: "2022-01-12T14:36:14Z",
            sku: "var-84",
            properties: null,
            status: 1,
          },
          quantity: 13,
        },
      ],
      inventory: 13,
      waitingForDelivery: 0,
      canBeSold: 13,
      areComing: 0,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 101,
  totalPages: 21,
  last: false,
};

function InventoryManage() {
  const theme = useMantineTheme();
  const modals = useModals();

  const handleTransactionsAnchor = (productName, transactions) => {
    modals.openModal({
      size: 1200,
      overlayColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      title: <strong>Lịch sử nhập xuất của sản phẩm &quot;{productName}&quot;</strong>,
      children: <ProductInventoryTransactionsModal transactions={transactions} />,
    });
  };

  const entitiesTableHeadsFragment = (
    <Table.Tr>
      <Table.Th>Mã sản phẩm</Table.Th>
      <Table.Th>Tên sản phẩm</Table.Th>
      <Table.Th>Nhãn hiệu</Table.Th>
      <Table.Th>Nhà cung cấp</Table.Th>
      <Table.Th>Tồn thực tế</Table.Th>
      <Table.Th>Chờ xuất</Table.Th>
      <Table.Th>Có thể bán</Table.Th>
      <Table.Th>Sắp về</Table.Th>
      <Table.Th>Theo dõi</Table.Th>
      <Table.Th>Lịch sử</Table.Th>
    </Table.Tr>
  );

  const entitiesTableRowsFragment = listResponse.content.map((entity) => (
    <Table.Tr key={entity.product.id}>
      <Table.Td>{entity.product.code}</Table.Td>
      <Table.Td>{entity.product.name}</Table.Td>
      <Table.Td>{entity.product.brand?.name}</Table.Td>
      <Table.Td>{entity.product.supplier?.displayName}</Table.Td>
      <Table.Td>{entity.inventory}</Table.Td>
      <Table.Td>{entity.waitingForDelivery}</Table.Td>
      <Table.Td>{entity.canBeSold}</Table.Td>
      <Table.Td>{entity.areComing}</Table.Td>
      <Table.Td>
        <ActionIcon color="blue" variant="subtle" size={24} title="Thiết lập định mức tồn kho cho sản phẩm">
          <Plus />
        </ActionIcon>
      </Table.Td>
      <Table.Td>
        <Anchor inherit onClick={() => handleTransactionsAnchor(entity.product.name, entity.transactions)}>
          Giao dịch
        </Anchor>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Stack>
      <Group gap="xs">
        <ActionIcon>
          <Hash />
        </ActionIcon>
        <Title order={3}>{InventoryConfigs.manageTitle}</Title>
      </Group>

      <ManageMain listResponse={listResponse} isLoading={false}>
        <Table horizontalSpacing="sm" verticalSpacing="sm" highlightOnHover striped>
          <Table.Thead>{entitiesTableHeadsFragment}</Table.Thead>
          <Table.Tbody>{entitiesTableRowsFragment}</Table.Tbody>
        </Table>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default InventoryManage;
