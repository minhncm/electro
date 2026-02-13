import {
  Avatar,
  Badge,
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
import CustomerConfigs from "~/pages/Admin-customer/CustomerConfigs";
import ManagePagination from "~/components/ManagePagination";
import UserStatusBagde from "~/components/UserStatusBagde";
import DateUtils from "~/utils/DateUtils";
import useGetAllApi from "~/hooks/use-get-all-api";
import * as PageConfigs from "~/pages/PageConfig";

function CustomerManage() {
  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(CustomerConfigs.resourceUrl, CustomerConfigs.resourceKey);

  console.log(listResponse);

  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.user.fullname}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.user.phone}</Highlight>
      </Table.Td>
      <Table.Td>
        <Avatar
          src={entity.user.avatar}
          alt={entity.user.fullname}
          radius="xl"
          size="sm"
        />
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ColorSwatch color={entity.customerGroup.color} />
          <Highlight size="sm">{entity.customerGroup.name}</Highlight>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ColorSwatch color={entity.customerStatus.color} />
          <Highlight size="sm">{entity.customerStatus.name}</Highlight>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ColorSwatch color={entity.customerResource.color} />
          <Highlight size="sm">{entity.customerResource.name}</Highlight>
        </Group>
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.username"].label}</Table.Td>
        <Table.Td>{entity.user.username}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.fullname"].label}</Table.Td>
        <Table.Td>{entity.user.fullname}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.email"].label}</Table.Td>
        <Table.Td>{entity.user.email}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.phone"].label}</Table.Td>
        <Table.Td>{entity.user.phone}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.gender"].label}</Table.Td>
        <Table.Td>{entity.user.gender === "M" ? "Nam" : "Nữ"}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CustomerConfigs.properties["user.address.line"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CustomerConfigs.properties["user.address.province.name"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CustomerConfigs.properties["user.address.province.code"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.province?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CustomerConfigs.properties["user.address.district.name"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CustomerConfigs.properties["user.address.district.code"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.district?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.avatar"].label}</Table.Td>
        <Table.Td>
          <Avatar
            src={entity.user.avatar}
            alt={entity.user.fullname}
            radius="xl"
            size="sm"
          />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.status"].label}</Table.Td>
        <Table.Td>
          <UserStatusBagde status={entity.user.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.roles"].label}</Table.Td>
        <Table.Td>
          <Stack spacing="xs" align="flex-start">
            {entity.user.roles.map((role, index) => (
              <Badge key={index} variant="dot" size="sm">
                {role.name}
              </Badge>
            ))}
          </Stack>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CustomerConfigs.properties["customerGroup.name"].label}
        </Table.Td>
        <Table.Td>
          <Group spacing="xs">
            <ColorSwatch color={entity.customerGroup.color} />
            {entity.customerGroup.name}
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CustomerConfigs.properties["customerStatus.name"].label}
        </Table.Td>
        <Table.Td>
          <Group spacing="xs">
            <ColorSwatch color={entity.customerStatus.color} />
            {entity.customerStatus.name}
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {CustomerConfigs.properties["customerResource.name"].label}
        </Table.Td>
        <Table.Td>
          <Group spacing="xs">
            <ColorSwatch color={entity.customerResource.color} />
            {entity.customerResource.name}
          </Group>
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={CustomerConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={CustomerConfigs.properties}
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

export default CustomerManage;
