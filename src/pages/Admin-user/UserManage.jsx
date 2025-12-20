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

const listResponse = {
  content: [
    {
      id: 9,
      createdAt: "2025-11-16T08:46:19Z",
      updatedAt: "2025-11-16T08:46:19Z",
      username: "minh",
      fullname: "minh cong",
      email: "ncm071205@gmail.com",
      phone: "0702772847",
      gender: "M",
      address: {
        id: 34,
        createdAt: "2025-11-16T08:46:19Z",
        updatedAt: "2025-11-16T08:46:19Z",
        line: "Thon Phu My",
        province: {
          id: 62,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Sóc Trăng",
          code: "94",
        },
        district: {
          id: 688,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Huyện Trần Đề",
          code: "951",
        },
        ward: {
          id: 10444,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Xã Tài Văn",
          code: "31687",
        },
      },
      avatar: null,
      status: 1,
      roles: [
        {
          id: 3,
          createdAt: "1989-01-25T16:05:02Z",
          updatedAt: "2001-01-13T02:01:36Z",
          code: "CUSTOMER",
          name: "Khách hàng",
          status: 1,
        },
      ],
    },
    {
      id: 6,
      createdAt: "2025-10-23T10:21:42Z",
      updatedAt: "2025-10-23T10:21:42Z",
      username: "ncm",
      fullname: "Nguyễn Công Minh",
      email: "ncm07120@gmail.com",
      phone: "0702772847",
      gender: "M",
      address: {
        id: 31,
        createdAt: "2025-10-23T10:21:42Z",
        updatedAt: "2025-10-23T10:21:42Z",
        line: "Thôn Phú Mỹ",
        province: {
          id: 40,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quảng Nam",
          code: "49",
        },
        district: {
          id: 382,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Huyện Quế Sơn",
          code: "509",
        },
        ward: {
          id: 6794,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Xã Quế Xuân 2",
          code: "20647",
        },
      },
      avatar: null,
      status: 1,
      roles: [
        {
          id: 3,
          createdAt: "1989-01-25T16:05:02Z",
          updatedAt: "2001-01-13T02:01:36Z",
          code: "CUSTOMER",
          name: "Khách hàng",
          status: 1,
        },
      ],
    },
    {
      id: 5,
      createdAt: "2022-03-27T04:16:32Z",
      updatedAt: "2021-10-03T05:04:10Z",
      username: "tkorting4",
      fullname: "Tanya Korting",
      email: "tkorting4@livejournal.com",
      phone: "0919944735",
      gender: "F",
      address: {
        id: 5,
        createdAt: "2021-10-31T22:12:07Z",
        updatedAt: "2021-06-20T23:36:16Z",
        line: "18726 Delaware Parkway",
        province: {
          id: 1,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Hà Nội",
          code: "01",
        },
        district: {
          id: 26,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận Bắc Từ Liêm",
          code: "021",
        },
        ward: {
          id: 4,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Phường 09",
          code: "27262",
        },
      },
      avatar: null,
      status: 1,
      roles: [
        {
          id: 3,
          createdAt: "1989-01-25T16:05:02Z",
          updatedAt: "2001-01-13T02:01:36Z",
          code: "CUSTOMER",
          name: "Khách hàng",
          status: 1,
        },
      ],
    },
    {
      id: 4,
      createdAt: "2022-01-26T21:22:37Z",
      updatedAt: "2022-05-03T19:25:59Z",
      username: "dtreat3",
      fullname: "Danila Treat",
      email: "dtreat3@nymag.com",
      phone: "0919944735",
      gender: "F",
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
      avatar: null,
      status: 1,
      roles: [
        {
          id: 3,
          createdAt: "1989-01-25T16:05:02Z",
          updatedAt: "2001-01-13T02:01:36Z",
          code: "CUSTOMER",
          name: "Khách hàng",
          status: 1,
        },
      ],
    },
    {
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
  ],
  page: 1,
  size: 5,
  totalElements: 7,
  totalPages: 2,
  last: false,
};

function UserManager() {
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
        <Avatar src={entity.avatar} alt={entity.fullname} radius="xl" size="sm" />
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
        <Table.Td>{UserConfigs.properties["address.province.name"].label}</Table.Td>
        <Table.Td>{entity.address.province.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties["address.province.code"].label}</Table.Td>
        <Table.Td>{entity.address.province.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties["address.district.name"].label}</Table.Td>
        <Table.Td>{entity.address.district.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties["address.district.code"].label}</Table.Td>
        <Table.Td>{entity.address.district.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{UserConfigs.properties.avatar.label}</Table.Td>
        <Table.Td>
          <Avatar src={entity.avatar} alt={entity.fullname} radius="xl" size="sm" />
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
      <ManageHeader title={UserConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={UserConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default UserManager;
