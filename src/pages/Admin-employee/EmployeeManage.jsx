import { Avatar, Badge, Highlight, Stack, Table } from "@mantine/core";
import ActiveStatusBadge from "~/components/ActiveStatusBadge";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import UserStatusBagde from "~/components/UserStatusBagde";
import EmployeeConfigs from "~/pages/Admin-employee/EmployeeConfigs";
import DateUtils from "~/utils/DateUtils";

const listResponse = {
  content: [
    {
      id: 1,
      createdAt: "2021-09-04T00:46:15Z",
      updatedAt: "2021-11-10T04:49:52Z",
      user: {
        id: 3,
        createdAt: "2021-11-30T14:45:42Z",
        updatedAt: "2022-03-05T10:40:25Z",
        username: "ethuillier2",
        fullname: "Ermin Thuillier",
        email: "ethuillier2@jimdo.com",
        phone: "0919944305",
        gender: "M",
        address: {
          id: 3,
          createdAt: "2021-08-15T14:35:21Z",
          updatedAt: "2022-04-08T15:22:57Z",
          line: "59 Del Sol Road",
          province: {
            id: 10,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Hà Giang",
            code: "02",
          },
          district: {
            id: 2,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Quận 12",
            code: "761",
          },
          ward: {
            id: 3,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Phường 13",
            code: "27259",
          },
        },
        avatar: null,
        status: 1,
        roles: [
          {
            id: 2,
            createdAt: "1995-08-23T10:15:34Z",
            updatedAt: "1983-06-17T20:01:29Z",
            code: "EMPLOYEE",
            name: "Nhân viên",
            status: 1,
          },
        ],
      },
      office: {
        id: 4,
        createdAt: "2021-09-14T14:49:48Z",
        updatedAt: "2022-02-10T20:03:22Z",
        name: "BlogXS",
        address: {
          id: 4,
          createdAt: "2022-03-20T07:32:29Z",
          updatedAt: "2021-08-27T16:10:58Z",
          line: "3918 Bashford Junction",
          province: {
            id: 29,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Thành phố Hồ Chí Minh",
            code: "79",
          },
          district: {
            id: 1,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Quận 1",
            code: "760",
          },
          ward: {
            id: 8937,
            createdAt: "2023-02-14T17:00:00Z",
            updatedAt: "2023-02-14T17:00:00Z",
            name: "Phường Đa Kao",
            code: "26737",
          },
        },
        status: 1,
      },
      department: {
        id: 5,
        createdAt: "2021-10-20T18:50:28Z",
        updatedAt: "2021-07-31T18:58:22Z",
        name: "Human Resources",
        status: 2,
      },
      jobType: {
        id: 2,
        createdAt: "2021-12-08T09:13:12Z",
        updatedAt: "2022-03-26T12:37:23Z",
        name: "Part-time",
        status: 1,
      },
      jobLevel: {
        id: 3,
        createdAt: "2022-01-20T05:14:44Z",
        updatedAt: "2021-08-30T05:29:20Z",
        name: "Intern",
        status: 3,
      },
      jobTitle: {
        id: 4,
        createdAt: "2022-02-08T12:12:42Z",
        updatedAt: "2021-09-16T14:32:18Z",
        name: "Paralegal",
        status: 1,
      },
    },
  ],
  page: 1,
  size: 5,
  totalElements: 1,
  totalPages: 1,
  last: true,
};

function EmployeeManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.user.fullname}</Highlight>
      </Table.Td>
      <Table.Td>
        <Avatar radius="xl" size="sm" src={entity.user.avatar} alt={entity.user.fullname} />
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
        <Table.Td>{EmployeeConfigs.properties["user.address.line"].label}</Table.Td>
        <Table.Td>{entity.user.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.address.province.name"].label}</Table.Td>
        <Table.Td>{entity.user.address.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.address.province.code"].label}</Table.Td>
        <Table.Td>{entity.user.address.province?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.address.district.name"].label}</Table.Td>
        <Table.Td>{entity.user.address.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.address.district.code"].label}</Table.Td>
        <Table.Td>{entity.user.address.district?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["user.avatar"].label}</Table.Td>
        <Table.Td>
          <Avatar src={entity.user.avatar} alt={entity.user.fullname} radius="xl" size="sm" />
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
        <Table.Td>{EmployeeConfigs.properties["office.address.line"].label}</Table.Td>
        <Table.Td>{entity.office.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["office.address.province.name"].label}</Table.Td>
        <Table.Td>{entity.office.address.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["office.address.province.code"].label}</Table.Td>
        <Table.Td>{entity.office.address.province?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["office.address.district.name"].label}</Table.Td>
        <Table.Td>{entity.office.address.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["office.address.district.code"].label}</Table.Td>
        <Table.Td>{entity.office.address.district?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["office.status"].label}</Table.Td>
        <Table.Td>
          <ActiveStatusBadge status={entity.office.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["department.name"].label}</Table.Td>
        <Table.Td>{entity.department.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["department.status"].label}</Table.Td>
        <Table.Td>
          <ActiveStatusBadge status={entity.department.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["jobType.name"].label}</Table.Td>
        <Table.Td>{entity.jobType.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["jobType.status"].label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.jobType.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["jobLevel.name"].label}</Table.Td>
        <Table.Td>{entity.jobLevel.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["jobLevel.status"].label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.jobLevel.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["jobTitle.name"].label}</Table.Td>
        <Table.Td>{entity.jobTitle.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{EmployeeConfigs.properties["jobTitle.status"].label}</Table.Td>
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

      <ManageMain listResponse={listResponse}>
        <ManageTable
          listResponse={listResponse}
          properties={EmployeeConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        />
      </ManageMain>
    </Stack>
  );
}

export default EmployeeManage;
