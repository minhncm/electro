import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import SuppilerConfigs from "~/pages/Admin-supplier/SupplierConfigs";
import DateUtils from "~/utils/DateUtils";

const listResponse = {
  content: [
    {
      id: 5,
      createdAt: "2021-09-18T05:13:01Z",
      updatedAt: "2022-01-02T02:04:03Z",
      displayName: "Kimia",
      code: "49349-675",
      contactFullname: "El De Carlo",
      contactEmail: "ede4@wisc.edu",
      contactPhone: "0919944500",
      companyName: "Kanoodle",
      taxCode: "57520-0467",
      email: "ede4@exblog.jp",
      phone: "509-999-7966",
      fax: "Zaam-Dox",
      website: null,
      address: {
        id: 11,
        createdAt: "2022-01-09T13:34:48Z",
        updatedAt: "2021-12-13T10:34:12Z",
        line: "7 Mosinee Street",
        province: {
          id: 4,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Hải Dương",
          code: "30",
        },
        district: {
          id: 22,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Huyện Đông Anh",
          code: "017",
        },
        ward: null,
      },
      description: "Pancreat transplant NOS",
      note: "Acc poison-analgesic NOS",
      status: 2,
    },
    {
      id: 4,
      createdAt: "2021-11-15T20:47:13Z",
      updatedAt: "2022-04-22T11:41:01Z",
      displayName: "Jazzy",
      code: "68572-6005",
      contactFullname: "Margery Seely",
      contactEmail: "mseely3@xing.com",
      contactPhone: "0919944500",
      companyName: "Kwinu",
      taxCode: "54473-141",
      email: "mseely3@pagesperso-orange.fr",
      phone: "557-431-0161",
      fax: "Cookley",
      website: null,
      address: {
        id: 13,
        createdAt: "2021-05-27T05:22:55Z",
        updatedAt: "2022-03-08T02:57:39Z",
        line: "07 Miller Place",
        province: {
          id: 3,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Bắc Ninh",
          code: "27",
        },
        district: {
          id: 9,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận 8",
          code: "776",
        },
        ward: null,
      },
      description: "CAS w fluoroscopy",
      note: "Lactation fail-postpart",
      status: 1,
    },
    {
      id: 3,
      createdAt: "2022-05-07T14:04:34Z",
      updatedAt: "2021-08-11T06:11:43Z",
      displayName: "Topicblab",
      code: "43419-861",
      contactFullname: "Alla Gunnell",
      contactEmail: "agunnell2@g.co",
      contactPhone: "0919944500",
      companyName: "Voolith",
      taxCode: "68001-237",
      email: "agunnell2@amazonaws.com",
      phone: "303-523-6126",
      fax: "Sub-Ex",
      website: null,
      address: {
        id: 15,
        createdAt: "2021-08-06T20:47:45Z",
        updatedAt: "2021-12-18T23:49:55Z",
        line: "65 Londonderry Pass",
        province: {
          id: 5,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Hải Phòng",
          code: "31",
        },
        district: {
          id: 21,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Huyện Sóc Sơn",
          code: "016",
        },
        ward: null,
      },
      description: "Man replac invert uterus",
      note: "Burn NOS ear",
      status: 2,
    },
    {
      id: 2,
      createdAt: "2021-07-15T12:55:46Z",
      updatedAt: "2021-09-20T08:40:51Z",
      displayName: "Roomm",
      code: "49035-519",
      contactFullname: "Jeth Knipe",
      contactEmail: "jknipe1@nymag.com",
      contactPhone: "0919944500",
      companyName: "Babblestorm",
      taxCode: "43598-012",
      email: "jknipe1@woothemes.com",
      phone: "134-360-5820",
      fax: "Zathin",
      website: null,
      address: {
        id: 14,
        createdAt: "2021-10-29T21:00:41Z",
        updatedAt: "2021-07-04T07:46:37Z",
        line: "5 Loeprich Crossing",
        province: {
          id: 3,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Bắc Ninh",
          code: "27",
        },
        district: {
          id: 6,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận 4",
          code: "773",
        },
        ward: null,
      },
      description: "Insert antimicrobial env",
      note: "Power aircraft acc-psngr",
      status: 1,
    },
    {
      id: 1,
      createdAt: "2022-05-15T19:47:51Z",
      updatedAt: "2021-12-06T08:10:37Z",
      displayName: "Yodo",
      code: "0944-3032",
      contactFullname: "Aubrie Cowley",
      contactEmail: "acowley0@mysql.com",
      contactPhone: "0919944500",
      companyName: "Rhynyx",
      taxCode: "49349-988",
      email: "acowley0@japanpost.jp",
      phone: "714-908-9882",
      fax: "Holdlamis",
      website: null,
      address: {
        id: 10,
        createdAt: "2021-10-03T02:46:55Z",
        updatedAt: "2021-11-24T17:13:34Z",
        line: "0 Coleman Park",
        province: {
          id: 9,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Cà Mau",
          code: "96",
        },
        district: {
          id: 6,
          createdAt: "2023-02-14T17:00:00Z",
          updatedAt: "2023-02-14T17:00:00Z",
          name: "Quận 4",
          code: "773",
        },
        ward: null,
      },
      description: "Oth uni salpingo-oophor",
      note: "Meningococc endocarditis",
      status: 3,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  last: true,
};

function SupplierManage() {
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
        <Table.Td>{SuppilerConfigs.properties["address.province.name"].label}</Table.Td>
        <Table.Td>{entity.address?.province?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{SuppilerConfigs.properties["address.district.name"].label}</Table.Td>
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

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={SuppilerConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default SupplierManage;
