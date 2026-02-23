import {
  Anchor,
  Highlight,
  Stack,
  Table,
  Text,
  useMantineTheme,
} from "@mantine/core";
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
import useGetAllApi from "~/hooks/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";

function WaybillManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(WaybillConfigs.resourceUrl, WaybillConfigs.resourceKey);
  const theme = useMantineTheme();
  const modals = useModals();

  const handleViewOrderAnchor = (orderEntity) => {
    modals.openModal({
      size: "lg",
      overlayColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
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
    const PaymentMethodIcon =
      PageConfigs.paymentMethodIconMap[entity.order.paymentMethodType];

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
        <Table.Td>
          {DateUtils.formatterDate(entity.shippingDate, "DD/MM/YYYY")}
        </Table.Td>
        <Table.Td>
          {DateUtils.formatterDate(entity.expectedDeliveryTime, "DD/MM/YYYY")}
        </Table.Td>
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
        <Table.Td>
          {DateUtils.formatterDate(entity.shippingDate, "DD/MM/YYYY")}
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {WaybillConfigs.properties.expectedDeliveryTime.label}
        </Table.Td>
        <Table.Td>
          {DateUtils.formatterDate(entity.expectedDeliveryTime, "DD/MM/YYYY")}
        </Table.Td>
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
        <Table.Td>
          {WaybillConfigs.ghnPaymentTypeIdMap[entity.ghnPaymentTypeId]}
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Ghi chú cho dịch vụ GHN</Table.Td>
        <Table.Td>
          {WaybillConfigs.ghnRequiredNoteMap[entity.ghnRequiredNote]}
        </Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={WaybillConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={WaybillConfigs.properties}
          showedPropertiesFragment={(entity) => (
            <ShowedPropertiesFragment entity={entity} />
          )}
          entityDetailTableRowsFragment={(entity) => (
            <EntityDetailTableRowsFragment entity={entity} />
          )}
        />
      </ManageMain>

      <ManagePagination listResponse={listResponse} />
    </Stack>
  );
}

export default WaybillManage;
