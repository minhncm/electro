import { Anchor, Highlight, Stack, Table, Text, useMantineTheme } from "@mantine/core";
import { useModals } from "@mantine/modals";
import EntityDetailTable from "~/components/EntityDetailTable";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import WaybillStatusBadge from "~/components/WaybillStatusBadge";
import * as PageConfigs from "~/pages/PageConfig";
import DateUtils from "~/utils/DateUtils";
import MiscUtils from "~/utils/MiscUtils";
import OrderConfigs from "../Admin-order/OrderConfigs";
import WaybillConfigs from "./WaybillConfigs";

const listResponse = {
  content: [
    {
      id: 2,
      createdAt: "2025-10-29T13:44:35Z",
      updatedAt: "2025-10-29T13:44:35Z",
      code: "L4G68H",
      order: {
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
      shippingDate: "2025-10-28T17:00:00Z",
      expectedDeliveryTime: "2025-11-01T16:59:59Z",
      status: 1,
      codAmount: 0,
      shippingFee: 49500,
      weight: 1,
      length: 1,
      width: 1,
      height: 1,
      note: null,
      ghnPaymentTypeId: 1,
      ghnRequiredNote: "KHONGCHOXEMHANG",
    },
    {
      id: 1,
      createdAt: "2023-02-15T17:00:00Z",
      updatedAt: "2023-02-15T17:00:00Z",
      code: "LL939X",
      order: {
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
      shippingDate: "2023-02-15T17:00:00Z",
      expectedDeliveryTime: "2023-02-17T17:00:00Z",
      status: 1,
      codAmount: 200000,
      shippingFee: 20000,
      weight: 1,
      length: 50,
      width: 50,
      height: 50,
      note: null,
      ghnPaymentTypeId: 2,
      ghnRequiredNote: "KHONGCHOXEMHANG",
    },
  ],
  page: 1,
  size: 5,
  totalElements: 2,
  totalPages: 1,
  last: true,
};

function WaybillManage() {
  const theme = useMantineTheme();
  const modals = useModals();

  const handleViewOrderAnchor = (orderEntity) => {
    modals.openModal({
      size: "lg",
      overlayColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      title: <strong>Thông tin đơn hàng</strong>,
      children: (
        <EntityDetailTable
          entityDetailTableRowsFragment={(orderEntity) => (
            <OrderConfigs.EntityDetailTableRowsFragment entity={orderEntity} />
          )}
          entity={orderEntity}
        />
      ),
    });
  };

  const ShowedPropertiesFragment = ({ entity }) => {
    const PaymentMethodIcon = PageConfigs.paymentMethodIconMap[entity.order.paymentMethodType];

    return (
      <>
        <Table.Td>{entity.id}</Table.Td>
        <Table.Td>
          <Highlight size="sm" fs={theme.fontFamilyMonospace}>
            {entity.code}
          </Highlight>
        </Table.Td>
        <Table.Td>
          <Stack gap={2.5}>
            <Anchor onClick={() => handleViewOrderAnchor(entity.order)}>
              <Highlight size="sm" fs={theme.fontFamilyMonospace}>
                {entity.order.code}
              </Highlight>
            </Anchor>
            <PaymentMethodIcon color={theme.colors.gray[5]} />
          </Stack>
        </Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.shippingDate, "DD/MM/YYYY")}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.expectedDeliveryTime, "DD/MM/YYYY")}</Table.Td>
        <Table.Td>
          <WaybillStatusBadge status={entity.status} />
        </Table.Td>
        <Table.Td ta="right">{MiscUtils.toVND(entity.codAmount)}</Table.Td>
        <Table.Td ta="right">{MiscUtils.toVND(entity.shippingFee)}</Table.Td>
        <Table.Td>
          <Stack gap={0}>
            <Text size="xs">
              Khối lượng: <b>{entity.weight}</b> (gram)
            </Text>
            <Text size="xs">
              Chiều dài: <b>{entity.length}</b> (cm)
            </Text>
            <Text size="xs">
              Chiều rộng: <b>{entity.width}</b> (cm)
            </Text>
            <Text size="xs">
              Chiều cao: <b>{entity.height}</b> (cm)
            </Text>
          </Stack>
        </Table.Td>
      </>
    );
  };

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties["order.code"].label}</Table.Td>
        <Table.Td>{entity.order.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.shippingDate.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.shippingDate, "DD/MM/YYYY")}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.expectedDeliveryTime.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.expectedDeliveryTime, "DD/MM/YYYY")}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <WaybillStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.codAmount.label}</Table.Td>
        <Table.Td>{MiscUtils.toVND(entity.codAmount)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.shippingFee.label}</Table.Td>
        <Table.Td>{MiscUtils.toVND(entity.shippingFee)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{WaybillConfigs.properties.size.label}</Table.Td>
        <Table.Td>
          <Stack gap={0}>
            <Text size="xs">
              Khối lượng: <b>{entity.weight}</b> (gram)
            </Text>
            <Text size="xs">
              Chiều dài: <b>{entity.length}</b> (cm)
            </Text>
            <Text size="xs">
              Chiều rộng: <b>{entity.width}</b> (cm)
            </Text>
            <Text size="xs">
              Chiều cao: <b>{entity.height}</b> (cm)
            </Text>
          </Stack>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Ghi chú vận đơn</Table.Td>
        <Table.Td maw={300}>{entity.note}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Người trả phí dịch vụ GHN</Table.Td>
        <Table.Td>{WaybillConfigs.ghnPaymentTypeIdMap[entity.ghnPaymentTypeId]}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Ghi chú cho dịch vụ GHN</Table.Td>
        <Table.Td>{WaybillConfigs.ghnRequiredNoteMap[entity.ghnRequiredNote]}</Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={WaybillConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse}>
        <ManageTable
          listResponse={listResponse}
          properties={WaybillConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        />
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default WaybillManage;
