import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import useGetAllApi from "~/hooks/use-get-all-api";
import * as PageConfigs from "~/pages/PageConfig";
import SuppilerConfigs from "~/pages/Admin-supplier/SupplierConfigs";
import DateUtils from "~/utils/DateUtils";

function SupplierManage() {
  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(SuppilerConfigs.resourceUrl, SuppilerConfigs.resourceKey);
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.displayName}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.code}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.contactFullname || ""}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.contactPhone || ""}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.companyName || ""}
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
        <Table.Td>{SuppilerConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.displayName.label}</Table.Td>
        <Table.Td>{entity.displayName}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.contactFullname.label}</Table.Td>
        <Table.Td>{entity.contactFullname}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.contactEmail.label}</Table.Td>
        <Table.Td>{entity.contactEmail}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.contactPhone.label}</Table.Td>
        <Table.Td>{entity.contactPhone}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.companyName.label}</Table.Td>
        <Table.Td>{entity.companyName}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.taxCode.label}</Table.Td>
        <Table.Td>{entity.taxCode}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.email.label}</Table.Td>
        <Table.Td>{entity.email}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.phone.label}</Table.Td>
        <Table.Td>{entity.phone}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.fax.label}</Table.Td>
        <Table.Td>{entity.fax}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.website.label}</Table.Td>
        <Table.Td>{entity.website}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties["address.line"].label}</Table.Td>
        <Table.Td>{entity.address?.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {SuppilerConfigs.properties["address.province.name"].label}
        </Table.Td>
        <Table.Td>{entity.address?.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {SuppilerConfigs.properties["address.district.name"].label}
        </Table.Td>
        <Table.Td>{entity.address?.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.description.label}</Table.Td>
        <Table.Td style={{ maxWidth: 300 }}>{entity.description}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.note.label}</Table.Td>
        <Table.Td style={{ maxWidth: 300 }}>{entity.note}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={SuppilerConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={SuppilerConfigs.properties}
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
