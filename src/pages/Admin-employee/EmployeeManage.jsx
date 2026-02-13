import { Avatar, Badge, Highlight, Stack, Table } from "@mantine/core";
import ActiveStatusBadge from "~/components/ActiveStatusBadge";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import UserStatusBagde from "~/components/UserStatusBagde";
import useGetAllApi from "~/hooks/use-get-all-api";
import * as PageConfigs from "~/pages/PageConfig";
import EmployeeConfigs from "~/pages/Admin-employee/EmployeeConfigs";
import DateUtils from "~/utils/DateUtils";

function EmployeeManage() {
  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(EmployeeConfigs.resourceUrl, EmployeeConfigs.resourceKey);

  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.user.fullname}</Highlight>
      </Table.Td>
      <Table.Td>
        <Avatar
          radius="xl"
          size="sm"
          src={entity.user.avatar}
          alt={entity.user.fullname}
        />
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.office.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.department.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.jobType.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.jobLevel.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.jobTitle.name}</Highlight>
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.username"].label}</Table.Td>
        <Table.Td>{entity.user.username}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.fullname"].label}</Table.Td>
        <Table.Td>{entity.user.fullname}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.email"].label}</Table.Td>
        <Table.Td>{entity.user.email}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.phone"].label}</Table.Td>
        <Table.Td>{entity.user.phone}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.gender"].label}</Table.Td>
        <Table.Td>{entity.user.gender === "M" ? "Nam" : "Nữ"}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["user.address.line"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["user.address.province.name"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["user.address.province.code"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.province?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["user.address.district.name"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["user.address.district.code"].label}
        </Table.Td>
        <Table.Td>{entity.user.address.district?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.avatar"].label}</Table.Td>
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
        <Table.Td>{EmployeeConfigs.properties["user.status"].label}</Table.Td>
        <Table.Td>
          <UserStatusBagde status={entity.user.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.roles"].label}</Table.Td>
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
        <Table.Td>{EmployeeConfigs.properties["office.name"].label}</Table.Td>
        <Table.Td>{entity.office.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["office.address.line"].label}
        </Table.Td>
        <Table.Td>{entity.office.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["office.address.province.name"].label}
        </Table.Td>
        <Table.Td>{entity.office.address.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["office.address.province.code"].label}
        </Table.Td>
        <Table.Td>{entity.office.address.province?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["office.address.district.name"].label}
        </Table.Td>
        <Table.Td>{entity.office.address.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["office.address.district.code"].label}
        </Table.Td>
        <Table.Td>{entity.office.address.district?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["office.status"].label}</Table.Td>
        <Table.Td>
          <ActiveStatusBadge status={entity.office.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["department.name"].label}
        </Table.Td>
        <Table.Td>{entity.department.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["department.status"].label}
        </Table.Td>
        <Table.Td>
          <ActiveStatusBadge status={entity.department.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["jobType.name"].label}</Table.Td>
        <Table.Td>{entity.jobType.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["jobType.status"].label}
        </Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.jobType.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["jobLevel.name"].label}</Table.Td>
        <Table.Td>{entity.jobLevel.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["jobLevel.status"].label}
        </Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.jobLevel.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["jobTitle.name"].label}</Table.Td>
        <Table.Td>{entity.jobTitle.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          {EmployeeConfigs.properties["jobTitle.status"].label}
        </Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.jobTitle.status} />
        </Table.Td>
      </Table.Tr>
    </>
  );

  return (
    <Stack>
      <ManageHeader title={EmployeeConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={EmployeeConfigs.properties}
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

export default EmployeeManage;
