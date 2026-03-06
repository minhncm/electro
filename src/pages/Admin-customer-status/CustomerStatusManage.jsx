import {
  Code,
  ColorSwatch,
  Group,
  Highlight,
  Stack,
  Table,
} from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import ManagePagination from "~/components/ManagePagination";
import DateUtils from "~/utils/DateUtils";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import CustomerStatusConfigs from "~/pages/Admin-customer-status/CustomerStatusConfigs";
import useGetAllApi from "~/hooks/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";
import ManageHeaderTitle from "~/components/ManageHeaderTitle/ManageHeaderTitle";
import ManageHeaderButtons from "~/components/ManageHeaderButton/ManageHeaderButtons";

function CustomerStatusManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(
      CustomerStatusConfigs.resourceUrl,
      CustomerStatusConfigs.resourceKey,
    );
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.code}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ColorSwatch color={entity.color} />
          <Code>{entity.color.toLowerCase()}</Code>
        </Group>
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{CustomerStatusConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerStatusConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerStatusConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerStatusConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerStatusConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CustomerStatusConfigs.properties.description.label}
        </Table.Td>
        <Table.Td maw={300}>{entity.description}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerStatusConfigs.properties.color.label}</Table.Td>
        <Table.Td>
          <Group gap="xs">
            <ColorSwatch color={entity.color} />
            <Code>{entity.color.toLowerCase()}</Code>
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerStatusConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader>
        <ManageHeaderTitle title={CustomerStatusConfigs.manageTitle} />
        <ManageHeaderButtons
          listResponse={listResponse}
          resourceUrl={CustomerStatusConfigs.resourceUrl}
          resourceKey={CustomerStatusConfigs.resourceKey}
        />
      </ManageHeader>

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          resourceUrl={CustomerStatusConfigs.resourceUrl}
          resourceKey={CustomerStatusConfigs.resourceKey}
          properties={CustomerStatusConfigs.properties}
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

export default CustomerStatusManage;
