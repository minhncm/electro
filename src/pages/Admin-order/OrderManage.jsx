import { ActionIcon, ColorSwatch, Group, Highlight, Stack, Table, Text, useMantineTheme } from "@mantine/core";
import { Clipboard, Plus } from "tabler-icons-react";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import OrderPaymentStatusBadge from "~/components/OrderPaymentStatusBadge";
import OrderStatusBadge from "~/components/OrderStatusBadge";
import SearchPanel from "~/components/SearchPanel";
import DocketConfigs from "~/pages/Admin-docket/DocketConfigs";
import OrderConfigs from "~/pages/Admin-order/OrderConfigs";
import * as PageConfigs from "~/pages/PageConfig";
import DateUtils from "~/utils/DateUtils";
import MiscUtils from "~/utils/MiscUtils";
import NotifyUtils from "~/utils/NotifyUtils";

const listResponse = {
  content: [
    {
      id: 8,
      createdAt: "2025-10-29T14:04:03Z",
      updatedAt: "2025-10-29T14:04:03Z",
      code: "ICGADO7IJHTE",
      status: 2,
      toName: "Nguyễn Công Minh",
      toPhone: "0702772847",
      toAddress: "Thôn Phú Mỹ",
      toWardName: "Xã Quế Xuân 2",
      toDistrictName: "Huyện Quế Sơn",
      toProvinceName: "Quảng Nam",
      orderResource: {
        id: 1,
        createdAt: "2022-04-22T04:46:21Z",
        updatedAt: "2022-02-12T21:37:06Z",
        code: "BIZ",
        name: "Bizweb",
        color: "Orange",
        customerResource: null,
        status: 1,
      },
      orderCancellationReason: null,
      note: null,
      user: {
        id: 6,
        createdAt: "2025-10-23T10:21:42Z",
        updatedAt: "2025-10-23T10:21:42Z",
        username: "ncm",
        fullname: "Nguyễn Công Minh",
        email: "ncm07120@gmail.com",
        phone: "0702772847",
        gender: "M",
        address: {
          id: 31,
          createdAt: "2025-10-23T10:21:42Z",
          updatedAt: "2025-10-23T10:21:42Z",
          line: "Thôn Phú Mỹ",
          province: {
            id: 40,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Quảng Nam",
            code: "49",
          },
          district: {
            id: 382,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Huyện Quế Sơn",
            code: "509",
          },
          ward: {
            id: 6794,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Xã Quế Xuân 2",
            code: "20647",
          },
        },
        avatar: null,
        status: 1,
        roles: [
          {
            id: 3,
            createdAt: "1989-01-25T16:05:02Z",
            updatedAt: "2001-01-13T02:01:36Z",
            code: "CUSTOMER",
            name: "Khách hàng",
            status: 1,
          },
        ],
      },
      orderVariants: [
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
          price: 5500000.0,
          quantity: 1,
          amount: 5500000.0,
        },
      ],
      totalAmount: 5500000.0,
      tax: 0.1,
      shippingCost: 0.0,
      totalPay: 6050000.0,
      paymentMethodType: "CASH",
      paymentStatus: 1,
    },
    {
      id: 7,
      createdAt: "2025-10-29T10:02:37Z",
      updatedAt: "2025-10-29T10:02:37Z",
      code: "PIVZPSXKZBWW",
      status: 4,
      toName: "Nguyễn Công Minh",
      toPhone: "0702772847",
      toAddress: "Thôn Phú Mỹ",
      toWardName: "Xã Quế Xuân 2",
      toDistrictName: "Huyện Quế Sơn",
      toProvinceName: "Quảng Nam",
      orderResource: {
        id: 1,
        createdAt: "2022-04-22T04:46:21Z",
        updatedAt: "2022-02-12T21:37:06Z",
        code: "BIZ",
        name: "Bizweb",
        color: "Orange",
        customerResource: null,
        status: 1,
      },
      orderCancellationReason: null,
      note: null,
      user: {
        id: 6,
        createdAt: "2025-10-23T10:21:42Z",
        updatedAt: "2025-10-23T10:21:42Z",
        username: "ncm",
        fullname: "Nguyễn Công Minh",
        email: "ncm07120@gmail.com",
        phone: "0702772847",
        gender: "M",
        address: {
          id: 31,
          createdAt: "2025-10-23T10:21:42Z",
          updatedAt: "2025-10-23T10:21:42Z",
          line: "Thôn Phú Mỹ",
          province: {
            id: 40,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Quảng Nam",
            code: "49",
          },
          district: {
            id: 382,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Huyện Quế Sơn",
            code: "509",
          },
          ward: {
            id: 6794,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Xã Quế Xuân 2",
            code: "20647",
          },
        },
        avatar: null,
        status: 1,
        roles: [
          {
            id: 3,
            createdAt: "1989-01-25T16:05:02Z",
            updatedAt: "2001-01-13T02:01:36Z",
            code: "CUSTOMER",
            name: "Khách hàng",
            status: 1,
          },
        ],
      },
      orderVariants: [
        {
          variant: {
            id: 8,
            createdAt: "2021-07-16T19:36:19Z",
            updatedAt: "2021-12-14T03:10:42Z",
            product: {
              id: 6,
              createdAt: "2021-09-09T22:01:45Z",
              updatedAt: "2022-01-12T14:36:14Z",
              name: "Loa Harman Kardon Onyx Studio 7",
              code: "49288-3039",
              slug: "harman",
            },
            sku: "abc-6",
            cost: 1.0e7,
            price: 1.1e7,
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
          price: 11000000.0,
          quantity: 1,
          amount: 11000000.0,
        },
      ],
      totalAmount: 11000000.0,
      tax: 0.1,
      shippingCost: 49500.0,
      totalPay: 12149500.0,
      paymentMethodType: "PAYPAL",
      paymentStatus: 2,
    },
    {
      id: 2,
      createdAt: "2022-05-02T16:20:36Z",
      updatedAt: "2022-07-02T02:02:05Z",
      code: "36987-166",
      status: 4,
      toName: "do mixi",
      toPhone: "0909998877",
      toAddress: "Streaming house",
      toWardName: "Phường 14",
      toDistrictName: "Quận 10",
      toProvinceName: "TP Hồ Chí Minh",
      orderResource: {
        id: 1,
        createdAt: "2022-04-22T04:46:21Z",
        updatedAt: "2022-02-12T21:37:06Z",
        code: "BIZ",
        name: "Bizweb",
        color: "Orange",
        customerResource: null,
        status: 1,
      },
      orderCancellationReason: null,
      note: "Insertion of Other Device into Left Upper Leg, Perc Approach",
      user: {
        id: 4,
        createdAt: "2022-01-26T21:22:37Z",
        updatedAt: "2022-05-03T19:25:59Z",
        username: "dtreat3",
        fullname: "Danila Treat",
        email: "dtreat3@nymag.com",
        phone: "0919944735",
        gender: "F",
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
        avatar: null,
        status: 1,
        roles: [
          {
            id: 3,
            createdAt: "1989-01-25T16:05:02Z",
            updatedAt: "2001-01-13T02:01:36Z",
            code: "CUSTOMER",
            name: "Khách hàng",
            status: 1,
          },
        ],
      },
      orderVariants: [
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
          price: 300000.0,
          quantity: 2,
          amount: 600000.0,
        },
      ],
      totalAmount: 600000.0,
      tax: 0.1,
      shippingCost: 40000.0,
      totalPay: 700000.0,
      paymentMethodType: "CASH",
      paymentStatus: 2,
    },
    {
      id: 1,
      createdAt: "2022-06-30T01:32:41Z",
      updatedAt: "2021-08-16T20:28:55Z",
      code: "68400-107",
      status: 1,
      toName: "thang",
      toPhone: "0909998877",
      toAddress: "Streaming house",
      toWardName: "Phường 14",
      toDistrictName: "Quận 10",
      toProvinceName: "TP Hồ Chí Minh",
      orderResource: {
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
      orderCancellationReason: null,
      note: null,
      user: {
        id: 4,
        createdAt: "2022-01-26T21:22:37Z",
        updatedAt: "2022-05-03T19:25:59Z",
        username: "dtreat3",
        fullname: "Danila Treat",
        email: "dtreat3@nymag.com",
        phone: "0919944735",
        gender: "F",
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
        avatar: null,
        status: 1,
        roles: [
          {
            id: 3,
            createdAt: "1989-01-25T16:05:02Z",
            updatedAt: "2001-01-13T02:01:36Z",
            code: "CUSTOMER",
            name: "Khách hàng",
            status: 1,
          },
        ],
      },
      orderVariants: [
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
          price: 200000.0,
          quantity: 2,
          amount: 400000.0,
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
          price: 100000.0,
          quantity: 1,
          amount: 100000.0,
        },
      ],
      totalAmount: 500000.0,
      tax: 0.1,
      shippingCost: 50000.0,
      totalPay: 600000.0,
      paymentMethodType: "CASH",
      paymentStatus: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 4,
  totalPages: 1,
  last: true,
};

function OrderManage() {
  const theme = useMantineTheme();
  const ShowedPropertiesFragment = ({ entity }) => {
    const PaymentMethodIcon = PageConfigs.paymentMethodIconMap[entity.paymentMethodType];

    return (
      <>
        <Table.Td>{entity.id}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
        <Table.Td>
          <Group gap="xs">
            <Highlight size="sm" fs={theme.fontFamilyMonospace}>
              {entity.code}
            </Highlight>
            <ActionIcon
              color="blue"
              variant="outline"
              size="sm"
              title="Sao chép mã đơn hàng này"
              onClick={() => {
                void navigator.clipboard.writeText(entity.code);
                NotifyUtils.simple(
                  <Text inherit>
                    Đã sao chép mã đơn hàng <strong>{entity.code}</strong>
                  </Text>
                );
              }}
            >
              <Clipboard size={15} strokeWidth={1.5} />
            </ActionIcon>
          </Group>
        </Table.Td>
        <Table.Td>
          <Group gap="xs">
            <ColorSwatch color={entity.orderResource.color} />
            <Highlight size="sm">{entity.orderResource.name}</Highlight>
          </Group>
        </Table.Td>
        <Table.Td>
          <Stack gap={0}>
            <Highlight size="sm">{entity.user.fullname}</Highlight>
            <Highlight size="xs" color="dimmed">
              {entity.user.username}
            </Highlight>
          </Stack>
        </Table.Td>
        <Table.Td>
          <Stack gap={0}>
            <Highlight size="sm">{entity.toName}</Highlight>
            <Highlight size="xs">{entity.toPhone}</Highlight>
            <Highlight size="xs" color="dimmed">
              {entity.toAddress}
            </Highlight>
            <Highlight size="xs" color="dimmed">
              {[entity.toWardName, entity.toDistrictName].join(", ")}
            </Highlight>
            <Highlight size="xs" color="dimmed">
              {entity.toProvinceName}
            </Highlight>
          </Stack>
        </Table.Td>
        <Table.Td style={{ textAlign: "right" }}>
          <Stack align="end" gap={5}>
            <Text weight={500} size="sm">
              {MiscUtils.toVND(entity.totalPay) + " ₫"}
            </Text>
            <PaymentMethodIcon color={theme.colors.gray[5]} />
          </Stack>
        </Table.Td>
        <Table.Td>
          <ActionIcon
            color="blue"
            variant="subtle"
            size={24}
            title="Tạo phiếu xuất kho"
            component="a"
            href={DocketConfigs.managerPath + "/create"}
            target="_blank"
          >
            <Plus />
          </ActionIcon>
        </Table.Td>
        <Table.Td>
          <Stack gap="xs" sx={{ alignItems: "start" }}>
            <OrderStatusBadge status={entity.status} />
            <OrderPaymentStatusBadge status={entity.paymentStatus} />
          </Stack>
        </Table.Td>
      </>
    );
  };

  const EntityDetailTableRowsFragment = ({ entity }) => {
    const PaymentMethodIcon = PageConfigs.paymentMethodIconMap[entity.paymentMethodType];

    return (
      <>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.id.label}</Table.Td>
          <Table.Td>{entity.id}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.createdAt.label}</Table.Td>
          <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.updatedAt.label}</Table.Td>
          <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.code.label}</Table.Td>
          <Table.Td>{entity.code}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.status.label}</Table.Td>
          <Table.Td>
            <OrderStatusBadge status={entity.status} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties["orderResource.name"].label}</Table.Td>
          <Table.Td>
            <Group gap="xs">
              <ColorSwatch color={entity.orderResource.color} />
              {entity.orderResource.name}
            </Group>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Tên lý do hủy đơn hàng</Table.Td>
          <Table.Td>{entity.orderCancellationReason?.name}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Ghi chú đơn hàng</Table.Td>
          <Table.Td style={{ maxWidth: 300 }}>{entity.note}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Người đặt hàng</Table.Td>
          <Table.Td>
            <Stack gap={0}>
              <Text size="sm">{entity.user.fullname}</Text>
              <Text size="xs" c="dimmed">
                {entity.user.username}
              </Text>
            </Stack>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Người nhận hàng</Table.Td>
          <Table.Td>
            <Stack gap={0}>
              <Text size="sm">{entity.toName}</Text>
              <Text size="xs">{entity.toPhone}</Text>
              <Text size="xs" c="dimmed">
                {[entity.toAddress, entity.toWardName, entity.toDistrictName, entity.toProvinceName].join(", ")}
              </Text>
            </Stack>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Số mặt hàng</Table.Td>
          <Table.Td>{entity.orderVariants.length} SKU</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Tổng thành tiền</Table.Td>
          <Table.Td>{MiscUtils.toVND(entity.totalAmount)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Thuế</Table.Td>
          <Table.Td>{entity.tax * 100 + "%"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Phí vận chuyển</Table.Td>
          <Table.Td>{MiscUtils.toVND(entity.shippingCost)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.totalPay.label}</Table.Td>
          <Table.Td>{MiscUtils.toVND(entity.totalPay)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Hình thức thanh toán</Table.Td>
          <Table.Td>
            <PaymentMethodIcon />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Trạng thái thanh toán</Table.Td>
          <Table.Td>
            <OrderPaymentStatusBadge status={entity.paymentStatus} />
          </Table.Td>
        </Table.Tr>
      </>
    );
  };

  return (
    <Stack>
      <ManageHeader title={OrderConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={OrderConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default OrderManage;
