import { Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DepartmentConfigs from "./DepartmentConfigs";
import ManagePagination from "~/components/ManagePagination";
import DateUtils from "~/utils/DateUtils";
import ActiveStatusBadge from "~/components/ActiveStatusBadge";
import useGetAllApi from "~/hooks/use-get-all-api";
import * as PageConfigs from "~/pages/PageConfig";

function DepartmentManage() {
  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(DepartmentConfigs.resourceUrl, DepartmentConfigs.resourceKey);
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
        <ActiveStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DepartmentConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <ActiveStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={DepartmentConfigs.manageTitle} />

      <SearchPanel />

      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={DepartmentConfigs.properties}
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

export default DepartmentManage;
