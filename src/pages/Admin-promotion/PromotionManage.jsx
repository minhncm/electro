import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import PromotionConfigs from "~/pages/Admin-promotion/PromotionConfigs";
import useGetAllApi from "~/hooks/use-get-all-api";
import * as PageConfigs from "~/pages/PageConfig";

function PromotionManage() {
  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(PromotionConfigs.resourceUrl, PromotionConfigs.resourceKey);
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.name}</Highlight>
      </Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.startDate)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.endDate)}</Table.Td>
      <Table.Td>{entity.percent}%</Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
      <Table.Td>{entity.products.length} sản phẩm</Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.startDate.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.startDate)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.endDate.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.endDate)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.percent.label}</Table.Td>
        <Table.Td>{entity.percent}%</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {PromotionConfigs.properties.numberOfProducts.label}
        </Table.Td>
        <Table.Td>{entity.products.length} sản phẩm</Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={PromotionConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={PromotionConfigs.properties}
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

export default PromotionManage;
