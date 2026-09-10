import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";
import SupplierConfigs from "~/pages/Admin-supplier/SupplierConfigs";
import DateUtils from "~/utils/DateUtils";
import ManageHeaderTitle from "~/components/ManageHeaderTitle/ManageHeaderTitle";
import ManageHeaderButtons from "~/components/ManageHeaderButton/ManageHeaderButtons";

function SupplierManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(SupplierConfigs.resourceUrl, SupplierConfigs.resourceKey);
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.displayName}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.code}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.contactFullname || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.contactPhone || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.companyName || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.displayName.label}</Table.Td>
        <Table.Td>{entity.displayName}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.contactFullname.label}</Table.Td>
        <Table.Td>{entity.contactFullname}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.contactEmail.label}</Table.Td>
        <Table.Td>{entity.contactEmail}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.contactPhone.label}</Table.Td>
        <Table.Td>{entity.contactPhone}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.companyName.label}</Table.Td>
        <Table.Td>{entity.companyName}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.taxCode.label}</Table.Td>
        <Table.Td>{entity.taxCode}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.email.label}</Table.Td>
        <Table.Td>{entity.email}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.phone.label}</Table.Td>
        <Table.Td>{entity.phone}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.fax.label}</Table.Td>
        <Table.Td>{entity.fax}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.website.label}</Table.Td>
        <Table.Td>{entity.website}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties["address.line"].label}</Table.Td>
        <Table.Td>{entity.address?.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {SupplierConfigs.properties["address.province.name"].label}
        </Table.Td>
        <Table.Td>{entity.address?.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {SupplierConfigs.properties["address.district.name"].label}
        </Table.Td>
        <Table.Td>{entity.address?.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.description.label}</Table.Td>
        <Table.Td style={{ maxWidth: 300 }}>{entity.description}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.note.label}</Table.Td>
        <Table.Td style={{ maxWidth: 300 }}>{entity.note}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SupplierConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader>
        <ManageHeaderTitle title={SupplierConfigs.manageTitle} />
        <ManageHeaderButtons
          listResponse={listResponse}
          resourceUrl={SupplierConfigs.resourceUrl}
          resourceKey={SupplierConfigs.resourceKey}
        />
      </ManageHeader>

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={SupplierConfigs.properties}
          resourceUrl={SupplierConfigs.resourceUrl}
          resourceKey={SupplierConfigs.resourceKey}
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

export default SupplierManage;
