import { Avatar, Highlight, Stack, Table } from "@mantine/core";
import React from "react";
import { QuestionMark } from "tabler-icons-react";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import CategoryConfigs from "~/pages/Admin-category/CategoryConfigs";
import DateUtils from "~/utils/DateUtils";
import BrandConfigs from "../Admin-brand/BrandConfigs";
import useGetAllApi from "~/hooks/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";

function CategoryManage() {
  const { isLoading, data: listResponse = PageConfigs.initialListResponse } =
    useGetAllApi(BrandConfigs.resourceUrl, BrandConfigs.resourceKey);
  console.log(listResponse);

  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.name}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.slug}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Avatar
          src={entity.thumbnail}
          alt={entity.name}
          radius="lg"
          size="lg"
          color="grape"
        >
          <QuestionMark size={30} />
        </Avatar>
      </Table.Td>
      <Table.Td>
        {entity.parentCategory ? entity.parentCategory.name : <em>không có</em>}
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{CategoryConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CategoryConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CategoryConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CategoryConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CategoryConfigs.properties.slug.label}</Table.Td>
        <Table.Td>{entity.slug}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CategoryConfigs.properties.description.label}</Table.Td>
        <Table.Td style={{ maxWidth: 300 }}>{entity.description}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CategoryConfigs.properties.thumbnail.label}</Table.Td>
        <Table.Td>
          <Avatar
            src={entity.thumbnail}
            alt={entity.name}
            radius="lg"
            size="lg"
            color="grape"
          >
            <QuestionMark size={30} />
          </Avatar>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CategoryConfigs.properties["parentCategory.name"].label}
        </Table.Td>
        <Table.Td>
          {entity.parentCategory ? (
            entity.parentCategory.name
          ) : (
            <em>không có</em>
          )}
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CategoryConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={CategoryConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={CategoryConfigs.properties}
          showedPropertiesFragment={(entity) => (
            <ShowedPropertiesFragment entity={entity} />
          )}
          entityDetailTableRowsFragment={(entity) => (
            <EntityDetailTableRowsFragment entity={entity} />
          )}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default CategoryManage;
