import { Highlight, Stack, Table } from "@mantine/core";
import { ArrowNarrowRight } from "tabler-icons-react";
import DocketStatusBadge from "~/components/DocketStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import MiscUtils from "~/utils/MiscUtils";
import TransferConfigs from "~/pages/Admin-transfer/TransferConfigs";
import useGetAllApi from "~/hooks/use-get-all-api";
import * as PageConfigs from "~/pages/PageConfig";

function TransferManage() {
  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(TransferConfigs.resourceUrl, TransferConfigs.resourceKey);
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.code}</Highlight>
      </Table.Td>
      <Table.Td>{entity.exportDocket.warehouse.name}</Table.Td>
      <Table.Td>
        <DocketStatusBadge status={entity.exportDocket.status} />
      </Table.Td>
      <Table.Td>
        <ArrowNarrowRight size={18} />
      </Table.Td>
      <Table.Td>{entity.importDocket.warehouse.name}</Table.Td>
      <Table.Td>
        <DocketStatusBadge status={entity.importDocket.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{TransferConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{TransferConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{TransferConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{TransferConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Mã phiếu xuất</Table.Td>
        <Table.Td>{entity.exportDocket.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {TransferConfigs.properties["exportDocket.warehouse.name"].label}
        </Table.Td>
        <Table.Td>{entity.exportDocket.warehouse.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {TransferConfigs.properties["exportDocket.status"].label}
        </Table.Td>
        <Table.Td>
          <DocketStatusBadge status={entity.exportDocket.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Mã phiếu nhập</Table.Td>
        <Table.Td>{entity.importDocket.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {TransferConfigs.properties["importDocket.warehouse.name"].label}
        </Table.Td>
        <Table.Td>{entity.importDocket.warehouse.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {TransferConfigs.properties["importDocket.status"].label}
        </Table.Td>
        <Table.Td>
          <DocketStatusBadge status={entity.importDocket.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Số mặt hàng</Table.Td>
        <Table.Td>
          {MiscUtils.formatterPrice(entity.exportDocket.docketVariants.length)}{" "}
          SKU
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{TransferConfigs.properties.note.label}</Table.Td>
        <Table.Td style={{ maxWidth: 300 }}>{entity.note}</Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={TransferConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={TransferConfigs.properties}
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

export default TransferManage;
