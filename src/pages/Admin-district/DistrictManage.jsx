import { Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import useGetAllApi from "~/hooks/use-get-all-api";
import * as PageConfigs from "~/pages/PageConfig";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import DateUtils from "~/utils/DateUtils";

function DistrictManage() {
  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(DistrictConfigs.resourceUrl, DistrictConfigs.resourceKey);
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.code}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.province.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.province.code}</Highlight>
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.name.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.name)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties.code.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.code)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties["province.name"].label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.province.name)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DistrictConfigs.properties["province.code"].label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.province.code)}</Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={DistrictConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={DistrictConfigs.properties}
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

export default DistrictManage;
