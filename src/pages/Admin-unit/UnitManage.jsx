import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import UnitConfigs from "~/pages/Admin-unit/UnitConfigs";
import useGetAllApi from "~/hooks/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";
import ManageHeaderTitle from "~/components/ManageHeaderTitle/ManageHeaderTitle";
import ManageHeaderButtons from "~/components/ManageHeaderButton/ManageHeaderButtons";

function UnitManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(UnitConfigs.resourceUrl, UnitConfigs.resourceKey);
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
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{UnitConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UnitConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UnitConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UnitConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UnitConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader>
        <ManageHeaderTitle title={UnitConfigs.manageTitle} />
        <ManageHeaderButtons
          listResponse={listResponse}
          resourceUrl={UnitConfigs.resourceUrl}
          resourceKey={UnitConfigs.resourceKey}
        />
      </ManageHeader>

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          resourceUrl={UnitConfigs.resourceUrl}
          resourceKey={UnitConfigs.resourceKey}
          properties={UnitConfigs.properties}
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

export default UnitManage;
