import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import DestinationConfigs from "~/pages/Admin-destination/DestinationConfigs";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";
import ManageHeaderTitle from "~/components/ManageHeaderTitle/ManageHeaderTitle";
import ManageHeaderButtons from "~/components/ManageHeaderButton/ManageHeaderButtons";

function DestinationManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(
      DestinationConfigs.resourceUrl,
      DestinationConfigs.resourceKey,
    );
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.address.line || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.address.province?.name || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.address.district?.name || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {DestinationConfigs.properties.contactFullname.label}
        </Table.Td>
        <Table.Td>{entity.contactFullname}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.contactEmail.label}</Table.Td>
        <Table.Td>{entity.contactEmail}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.contactPhone.label}</Table.Td>
        <Table.Td>{entity.contactPhone}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {DestinationConfigs.properties["address.line"].label}
        </Table.Td>
        <Table.Td>{entity.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {DestinationConfigs.properties["address.province.name"].label}
        </Table.Td>
        <Table.Td>{entity.address.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {DestinationConfigs.properties["address.district.name"].label}
        </Table.Td>
        <Table.Td>{entity.address.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{DestinationConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader>
        <ManageHeaderTitle title={DestinationConfigs.manageTitle} />
        <ManageHeaderButtons
          listResponse={listResponse}
          resourceUrl={DestinationConfigs.resourceUrl}
          resourceKey={DestinationConfigs.resourceKey}
        />
      </ManageHeader>

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          resourceUrl={DestinationConfigs.resourceUrl}
          resourceKey={DestinationConfigs.resourceKey}
          properties={DestinationConfigs.properties}
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

export default DestinationManage;
