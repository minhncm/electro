import { Avatar, Badge, Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import UserConfigs from "~/pages/Admin-user/UserConfigs";
import ManagePagination from "~/components/ManagePagination";
import UserStatusBagde from "~/components/UserStatusBagde";
import DateUtils from "~/utils/DateUtils";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";
import ManageHeaderTitle from "~/components/ManageHeaderTitle/ManageHeaderTitle";
import ManageHeaderButtons from "~/components/ManageHeaderButton/ManageHeaderButtons";

function UserManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(UserConfigs.resourceUrl, UserConfigs.resourceKey);

  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.username}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.fullname}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.phone}</Highlight>
      </Table.Td>
      <Table.Td>{entity.gender === "M" ? "Nam" : "Nữ"}</Table.Td>
      <Table.Td>
        <Avatar
          src={entity.avatar}
          alt={entity.fullname}
          radius="xl"
          size="sm"
        />
      </Table.Td>
      <Table.Td>
        <UserStatusBagde status={entity.status} />
      </Table.Td>
      <Table.Td>
        <Stack gap="xs" align="flex-start">
          {entity.roles.map((role, index) => (
            <Badge key={index} variant="dot" size="sm">
              {role.name}
            </Badge>
          ))}
        </Stack>
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.username.label}</Table.Td>
        <Table.Td>{entity.username}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.fullname.label}</Table.Td>
        <Table.Td>{entity.fullname}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.email.label}</Table.Td>
        <Table.Td>{entity.email}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.phone.label}</Table.Td>
        <Table.Td>{entity.phone}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.gender.label}</Table.Td>
        <Table.Td>{entity.gender === "M" ? "Nam" : "Nữ"}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties["address.line"].label}</Table.Td>
        <Table.Td>{entity.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {UserConfigs.properties["address.province.name"].label}
        </Table.Td>
        <Table.Td>{entity.address.province.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {UserConfigs.properties["address.province.code"].label}
        </Table.Td>
        <Table.Td>{entity.address.province.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {UserConfigs.properties["address.district.name"].label}
        </Table.Td>
        <Table.Td>{entity.address.district.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {UserConfigs.properties["address.district.code"].label}
        </Table.Td>
        <Table.Td>{entity.address.district.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.avatar.label}</Table.Td>
        <Table.Td>
          <Avatar
            src={entity.avatar}
            alt={entity.fullname}
            radius="xl"
            size="sm"
          />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <UserStatusBagde status={entity.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.roles.label}</Table.Td>
        <Table.Td>
          <Stack gap="xs" align="flex-start">
            {entity.roles.map((role, index) => (
              <Badge key={index} variant="dot" size="sm">
                {role.name}
              </Badge>
            ))}
          </Stack>
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader>
        <ManageHeaderTitle title={UserConfigs.manageTitle} />
        <ManageHeaderButtons
          listResponse={listResponse}
          resourceUrl={UserConfigs.resourceUrl}
          resourceKey={UserConfigs.resourceKey}
        />
      </ManageHeader>

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={UserConfigs.properties}
          resourceUrl={UserConfigs.resourceUrl}
          resourceKey={UserConfigs.resourceKey}
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

export default UserManage;
