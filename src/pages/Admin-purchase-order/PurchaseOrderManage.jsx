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
import useGetAllApi from "~/hooks/use-get-all-api";
import * as PageConfigs from "~/pages/PageConfig";

function PurchaseOrderManage() {
  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(
      PurchaseOrderConfigs.resourceUrl,
      PurchaseOrderConfigs.resourceKey,
    );
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
            {[
              entity.destination.address.district?.name,
              entity.destination.address.province?.name,
            ]
              .filter(Boolean)
              .join(", ")}
          </Text>
        </Stack>
      </Table.Td>
      <Table.Td style={{ textAlign: "right" }}>
        {MiscUtils.toVND(entity.totalAmount)}
      </Table.Td>
      <Table.Td>
        <ActionIcon
          color="blue"
          variant="subtle"
          size={24}
          title="Tạo phiếu nhập kho"
        >
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
        <Table.Td>
          {PurchaseOrderConfigs.properties["supplier.displayName"].label}
        </Table.Td>
        <Table.Td>{entity.supplier.displayName}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {PurchaseOrderConfigs.properties["destination.address.line"].label}
        </Table.Td>
        <Table.Td>
          <Stack spacing={0}>
            <Text inherit>{entity.destination.address.line}</Text>
            <Text inherit>
              {[
                entity.destination.address.district?.name,
                entity.destination.address.province?.name,
              ]
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
            {[
              entity.destination.contactFullname,
              entity.destination.contactPhone,
              entity.destination.contactEmail,
            ]
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

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={PurchaseOrderConfigs.properties}
          showedPropertiesFragment={(entity) => (
            <ShowedPropertiesFragment entity={entity} />
          )}
          entityDetailTableRowsFragment={(entity) => (
            <EntityDetailTableRowsFragment entity={entity} />
          )}
        ></ManageTable>
      </ManageMain>

      <ManagePagination listResponse={listResponse} />
    </Stack>
  );
}

export default PurchaseOrderManage;
