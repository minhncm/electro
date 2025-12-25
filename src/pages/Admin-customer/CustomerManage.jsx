import { Avatar, Badge, ColorSwatch, Group, Highlight, Stack, Table } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import CustomerConfigs from "~/pages/Admin-customer/CustomerConfigs";
import ManagePagination from "~/components/ManagePagination";
import UserStatusBagde from "~/components/UserStatusBagde";
import DateUtils from "~/utils/DateUtils";

const listResponse = {
  content: [
    {
      id: 4,
      createdAt: "2025-11-16T08:46:37Z",
      updatedAt: "2025-11-16T08:46:37Z",
      user: {
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
      customerGroup: {
        id: 1,
        createdAt: "2022-01-23T07:14:28Z",
        updatedAt: "2021-12-24T00:08:47Z",
        code: "52270-001",
        name: "Facebook",
        description:
          "Other and unspecified malignant neoplasms of lymphoid and histiocytic tissue, lymph nodes of multiple sites",
        color: "Blue",
        status: 2,
      },
      customerStatus: {
        id: 1,
        createdAt: "2022-03-06T05:54:55Z",
        updatedAt: "2022-02-28T18:22:53Z",
        code: "55045-3602",
        name: "Active",
        description: "Miliary tuberculosis, unspecified, unspecified",
        color: "Pink",
        status: 3,
      },
      customerResource: {
        id: 1,
        createdAt: "2021-08-25T18:48:14Z",
        updatedAt: "2021-10-18T21:58:04Z",
        code: "53499-5971",
        name: "Facebook",
        description: "Congenital mitral insufficiency",
        color: "Blue",
        status: 1,
      },
    },
    {
      id: 3,
      createdAt: "2025-10-23T10:22:01Z",
      updatedAt: "2025-10-23T10:22:01Z",
      user: {
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
      customerGroup: {
        id: 1,
        createdAt: "2022-01-23T07:14:28Z",
        updatedAt: "2021-12-24T00:08:47Z",
        code: "52270-001",
        name: "Facebook",
        description:
          "Other and unspecified malignant neoplasms of lymphoid and histiocytic tissue, lymph nodes of multiple sites",
        color: "Blue",
        status: 2,
      },
      customerStatus: {
        id: 1,
        createdAt: "2022-03-06T05:54:55Z",
        updatedAt: "2022-02-28T18:22:53Z",
        code: "55045-3602",
        name: "Active",
        description: "Miliary tuberculosis, unspecified, unspecified",
        color: "Pink",
        status: 3,
      },
      customerResource: {
        id: 1,
        createdAt: "2021-08-25T18:48:14Z",
        updatedAt: "2021-10-18T21:58:04Z",
        code: "53499-5971",
        name: "Facebook",
        description: "Congenital mitral insufficiency",
        color: "Blue",
        status: 1,
      },
    },
    {
      id: 2,
      createdAt: "2021-08-22T05:52:55Z",
      updatedAt: "2022-03-05T02:30:21Z",
      user: {
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
      customerGroup: {
        id: 2,
        createdAt: "2022-03-29T12:59:34Z",
        updatedAt: "2021-08-26T00:05:04Z",
        code: "0904-6089",
        name: "Google",
        description: "Amphetamine and other psychostimulant dependence, unspecified",
        color: "Pink",
        status: 3,
      },
      customerStatus: {
        id: 2,
        createdAt: "2021-11-04T12:46:58Z",
        updatedAt: "2022-01-06T14:22:50Z",
        code: "60429-239",
        name: "Disable",
        description: "Screening for malignant neoplasms of skin",
        color: "Aquamarine",
        status: 1,
      },
      customerResource: {
        id: 4,
        createdAt: "2022-03-19T09:57:29Z",
        updatedAt: "2021-11-28T04:50:59Z",
        code: "11559-724",
        name: "Normal",
        description: "Unspecified failure in dosage",
        color: "Green",
        status: 1,
      },
    },
    {
      id: 1,
      createdAt: "2022-05-01T06:27:06Z",
      updatedAt: "2022-02-02T09:18:00Z",
      user: {
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
      customerGroup: {
        id: 4,
        createdAt: "2021-10-20T10:12:24Z",
        updatedAt: "2022-02-28T12:00:00Z",
        code: "63304-551",
        name: "Potential",
        description: "Unspecified disorder of carbohydrate transport and metabolism",
        color: "Orange",
        status: 2,
      },
      customerStatus: {
        id: 3,
        createdAt: "2022-03-26T23:15:17Z",
        updatedAt: "2021-09-29T10:49:37Z",
        code: "49281-395",
        name: "None",
        description: "Other lymphedema",
        color: "Maroon",
        status: 2,
      },
      customerResource: {
        id: 5,
        createdAt: "2022-02-13T03:28:33Z",
        updatedAt: "2022-05-10T20:36:22Z",
        code: "13537-455",
        name: "AVD",
        description: "Other testicular hypofunction",
        color: "Orange",
        status: 1,
      },
    },
  ],
  page: 1,
  size: 5,
  totalElements: 4,
  totalPages: 1,
  last: true,
};

function CustomerManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.user.fullname}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.user.phone}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Avatar src={entity.user.avatar} alt={entity.user.fullname} radius="xl" size="sm" />
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ColorSwatch color={entity.customerGroup.color} />
          <Highlight highlightColor="blue" size="sm">
            {entity.customerGroup.name}
          </Highlight>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ColorSwatch color={entity.customerStatus.color} />
          <Highlight highlightColor="blue" size="sm">
            {entity.customerStatus.name}
          </Highlight>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ColorSwatch color={entity.customerResource.color} />
          <Highlight highlightColor="blue" size="sm">
            {entity.customerResource.name}
          </Highlight>
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
        <Table.Td>{CustomerConfigs.properties["user.address.line"].label}</Table.Td>
        <Table.Td>{entity.user.address.line}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.address.province.name"].label}</Table.Td>
        <Table.Td>{entity.user.address.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.address.province.code"].label}</Table.Td>
        <Table.Td>{entity.user.address.province?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.address.district.name"].label}</Table.Td>
        <Table.Td>{entity.user.address.district?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.address.district.code"].label}</Table.Td>
        <Table.Td>{entity.user.address.district?.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["user.avatar"].label}</Table.Td>
        <Table.Td>
          <Avatar src={entity.user.avatar} alt={entity.user.fullname} radius="xl" size="sm" />
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
        <Table.Td>{CustomerConfigs.properties["customerGroup.name"].label}</Table.Td>
        <Table.Td>
          <Group spacing="xs">
            <ColorSwatch color={entity.customerGroup.color} />
            {entity.customerGroup.name}
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["customerStatus.name"].label}</Table.Td>
        <Table.Td>
          <Group spacing="xs">
            <ColorSwatch color={entity.customerStatus.color} />
            {entity.customerStatus.name}
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{CustomerConfigs.properties["customerResource.name"].label}</Table.Td>
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

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={CustomerConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default CustomerManage;
