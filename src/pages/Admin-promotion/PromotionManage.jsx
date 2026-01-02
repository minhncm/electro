import { Highlight, Stack, Table } from "@mantine/core";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import DateUtils from "~/utils/DateUtils";
import PromotionConfigs from "~/pages/Admin-promotion/PromotionConfigs";

const listResponse = {
  content: [
    {
      id: 1,
      createdAt: "2023-03-08T04:14:35Z",
      updatedAt: "2023-03-08T04:14:35Z",
      name: "Khuyến mãi tháng 3",
      startDate: "2023-03-07T17:00:00Z",
      endDate: "2023-03-18T17:00:00Z",
      percent: 10,
      status: 1,
      products: [
        {
          id: 1,
          createdAt: "2022-06-10T04:43:15Z",
          updatedAt: "2021-06-29T03:23:48Z",
          name: "Dell XPS 13 9315",
          code: "0003-1967",
          slug: "ealdus0",
          shortDescription: "Pellentesque ultrices mattis odio. Donec vitae nisi.",
          description:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          images: [
            {
              id: 1,
              name: "233x100.png",
              path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%201.png?w=700&h=700",
              contentType: "image/png",
              size: 300,
              group: "P",
              isThumbnail: true,
              isEliminated: false,
            },
            {
              id: 2,
              name: "185x100.png",
              path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%203.png?w=700&h=700",
              contentType: "image/png",
              size: 200,
              group: "P",
              isThumbnail: false,
              isEliminated: false,
            },
            {
              id: 3,
              name: "144x100.png",
              path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%202.png?w=700&h=700",
              contentType: "image/png",
              size: 100,
              group: "P",
              isThumbnail: false,
              isEliminated: false,
            },
          ],
          status: 1,
          category: {
            id: 1,
            createdAt: "2022-05-01T06:27:06Z",
            updatedAt: "2022-02-02T09:18:00Z",
            name: "Laptop",
            slug: "laptop",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            thumbnail: null,
            status: 1,
          },
          brand: {
            id: 3,
            createdAt: "2021-12-05T22:08:25Z",
            updatedAt: "2021-12-22T04:02:07Z",
            name: "Lehner-O'Hara",
            code: "8884",
            description: "Muscle thermography",
            status: 1,
          },
          supplier: {
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
          unit: {
            id: 2,
            createdAt: "2022-05-01T06:27:06Z",
            updatedAt: "2022-02-02T09:18:00Z",
            name: "Hộp",
            status: 2,
          },
          tags: [
            {
              id: 2,
              createdAt: "2022-05-01T06:27:06Z",
              updatedAt: "2022-02-02T09:18:00Z",
              name: "Sản phẩm nổi bật",
              slug: "san-pham-noi-bat",
              status: 2,
            },
            {
              id: 1,
              createdAt: "2022-05-01T06:27:06Z",
              updatedAt: "2022-02-02T09:18:00Z",
              name: "Sản phẩm mới",
              slug: "san-pham-moi",
              status: 1,
            },
          ],
          specifications: {
            content: [
              {
                id: 1,
                code: "screen-size",
                name: "Cỡ màn hình",
                value: "15 inch",
              },
              {
                id: 2,
                code: "cpu",
                name: "CPU",
                value: "Intel Core i7",
              },
            ],
            totalElements: 2,
          },
          properties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: ["S", "M", "L"],
              },
              {
                id: 2,
                code: "color",
                name: "Màu sắc",
                value: ["Đỏ", "Xanh dương"],
              },
            ],
            totalElements: 2,
          },
          variants: [
            {
              id: 1,
              createdAt: "2021-10-22T13:25:57Z",
              updatedAt: "2021-12-13T23:28:15Z",
              sku: "43063-210",
              cost: 9000000.0,
              price: 5500000.0,
              properties: {
                content: [
                  {
                    id: 1,
                    code: "size",
                    name: "Kích cỡ",
                    value: "S",
                  },
                  {
                    id: 2,
                    code: "color",
                    name: "Màu sắc",
                    value: "Đỏ",
                  },
                ],
                totalElements: 2,
              },
              status: 2,
            },
            {
              id: 2,
              createdAt: "2022-05-06T13:40:45Z",
              updatedAt: "2022-04-02T13:30:28Z",
              sku: "52125-433",
              cost: 1.2e7,
              price: 1.25e7,
              properties: {
                content: [
                  {
                    id: 1,
                    code: "size",
                    name: "Kích cỡ",
                    value: "M",
                  },
                  {
                    id: 2,
                    code: "color",
                    name: "Màu sắc",
                    value: "Đỏ",
                  },
                ],
                totalElements: 2,
              },
              status: 1,
            },
            {
              id: 3,
              createdAt: "2021-07-16T19:36:19Z",
              updatedAt: "2021-12-14T03:10:42Z",
              sku: "48951-8009",
              cost: 1.0e7,
              price: 1.0e7,
              properties: {
                content: [
                  {
                    id: 1,
                    code: "size",
                    name: "Kích cỡ",
                    value: "L",
                  },
                  {
                    id: 2,
                    code: "color",
                    name: "Màu sắc",
                    value: "Đỏ",
                  },
                ],
                totalElements: 2,
              },
              status: 1,
            },
          ],
          weight: 602.0,
          guarantee: {
            id: 2,
            createdAt: "2022-05-01T06:27:06Z",
            updatedAt: "2022-02-02T09:18:00Z",
            name: "Bảo hành 1 năm",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            status: 2,
          },
        },
      ],
    },
  ],
  page: 1,
  size: 5,
  totalElements: 1,
  totalPages: 1,
  last: true,
};

function PromotionManage() {
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.name}</Highlight>
      </Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.startDate)}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.endDate)}</Table.Td>
      <Table.Td>{entity.percent}%</Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
      <Table.Td>{entity.products.length} sản phẩm</Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.startDate.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.startDate)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.endDate.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.endDate)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.percent.label}</Table.Td>
        <Table.Td>{entity.percent}%</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{PromotionConfigs.properties.numberOfProducts.label}</Table.Td>
        <Table.Td>{entity.products.length} sản phẩm</Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={PromotionConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={PromotionConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default PromotionManage;
