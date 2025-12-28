import { Avatar, Badge, Grid, Group, Highlight, Stack, Table, useMantineTheme } from "@mantine/core";
import React from "react";
import { QuestionMark } from "tabler-icons-react";
import EnableStatusBadge from "~/components/EnableStatusBadge";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import SearchPanel from "~/components/SearchPanel";
import VariantTablePopover from "~/components/VariantTablePopover";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";
import DateUtils from "~/utils/DateUtils";

const listResponse = {
  content: [
    {
      id: 101,
      createdAt: "2021-09-09T22:01:45Z",
      updatedAt: "2022-01-12T14:36:14Z",
      name: "Lenovo ThinkPad X13 Gen 2 (AMD)",
      code: "prod-87",
      slug: "prod-87",
      shortDescription:
        "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      images: [
        {
          id: 103,
          name: "img-87",
          path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/9/5/LG%20Gram%2016%202%20in%201%202021%209%20Lo%CC%9B%CC%81n.jpeg?w=500&h=500",
          contentType: "image/png",
          size: 1,
          group: "P",
          isThumbnail: true,
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
      unit: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Cái",
        status: 1,
      },
      tags: [],
      specifications: null,
      properties: null,
      variants: [
        {
          id: 103,
          createdAt: "2021-09-09T22:01:45Z",
          updatedAt: "2022-01-12T14:36:14Z",
          sku: "var-87",
          cost: 3.199e7,
          price: 3.199e7,
          properties: null,
          status: 1,
        },
      ],
      weight: 1.0,
      guarantee: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Bảo hành 6 tháng",
        description: null,
        status: 1,
      },
    },
    {
      id: 100,
      createdAt: "2021-09-09T22:01:45Z",
      updatedAt: "2022-01-12T14:36:14Z",
      name: "Dell Precision 5540",
      code: "prod-86",
      slug: "prod-86",
      shortDescription:
        "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      images: [
        {
          id: 102,
          name: "img-86",
          path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/Lenovo-Thinkpad-T14-thinkpro-01.jpg?w=500&h=500",
          contentType: "image/png",
          size: 1,
          group: "P",
          isThumbnail: true,
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
        id: 2,
        createdAt: "2021-06-18T03:09:09Z",
        updatedAt: "2022-03-30T06:45:08Z",
        name: "Schowalter, Hartmann and Kihn",
        code: "4994",
        description: "Reduction anal prolapse",
        status: 3,
      },
      supplier: {
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
      unit: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Cái",
        status: 1,
      },
      tags: [],
      specifications: null,
      properties: null,
      variants: [
        {
          id: 102,
          createdAt: "2021-09-09T22:01:45Z",
          updatedAt: "2022-01-12T14:36:14Z",
          sku: "var-86",
          cost: 9990000.0,
          price: 9990000.0,
          properties: null,
          status: 1,
        },
      ],
      weight: 1.0,
      guarantee: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Bảo hành 6 tháng",
        description: null,
        status: 1,
      },
    },
    {
      id: 99,
      createdAt: "2021-09-09T22:01:45Z",
      updatedAt: "2022-01-12T14:36:14Z",
      name: "Dell Alienware x15 R1 GAMING",
      code: "prod-85",
      slug: "prod-85",
      shortDescription:
        "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      images: [
        {
          id: 101,
          name: "img-85",
          path: "https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2020/11/11/macbook-air-2020grey01.jpg?w=500&h=500",
          contentType: "image/png",
          size: 1,
          group: "P",
          isThumbnail: true,
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
        id: 1,
        createdAt: "2022-06-05T05:40:37Z",
        updatedAt: "2022-04-03T18:57:04Z",
        name: "Cruickshank-VonRueden",
        code: "5025",
        description: "Lap abltn liver les/tiss",
        status: 3,
      },
      supplier: {
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
      unit: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Cái",
        status: 1,
      },
      tags: [],
      specifications: null,
      properties: null,
      variants: [
        {
          id: 101,
          createdAt: "2021-09-09T22:01:45Z",
          updatedAt: "2022-01-12T14:36:14Z",
          sku: "var-85",
          cost: 1.299e7,
          price: 1.299e7,
          properties: null,
          status: 1,
        },
      ],
      weight: 1.0,
      guarantee: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Bảo hành 6 tháng",
        description: null,
        status: 1,
      },
    },
    {
      id: 98,
      createdAt: "2021-09-09T22:01:45Z",
      updatedAt: "2022-01-12T14:36:14Z",
      name: "Dell Alienware m15 R6",
      code: "prod-84",
      slug: "prod-84",
      shortDescription:
        "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      images: [
        {
          id: 100,
          name: "img-84",
          path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/7/27/ThinkBook-16p-NX-ARH-ThinkPro-01.jpg?w=500&h=500",
          contentType: "image/png",
          size: 1,
          group: "P",
          isThumbnail: true,
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
        id: 2,
        createdAt: "2021-06-18T03:09:09Z",
        updatedAt: "2022-03-30T06:45:08Z",
        name: "Schowalter, Hartmann and Kihn",
        code: "4994",
        description: "Reduction anal prolapse",
        status: 3,
      },
      supplier: {
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
      unit: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Cái",
        status: 1,
      },
      tags: [],
      specifications: null,
      properties: null,
      variants: [
        {
          id: 100,
          createdAt: "2021-09-09T22:01:45Z",
          updatedAt: "2022-01-12T14:36:14Z",
          sku: "var-84",
          cost: 2.499e7,
          price: 2.499e7,
          properties: null,
          status: 1,
        },
      ],
      weight: 1.0,
      guarantee: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Bảo hành 6 tháng",
        description: null,
        status: 1,
      },
    },
    {
      id: 97,
      createdAt: "2021-09-09T22:01:45Z",
      updatedAt: "2022-01-12T14:36:14Z",
      name: "HP 14s Notebook",
      code: "prod-83",
      slug: "prod-83",
      shortDescription:
        "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      images: [
        {
          id: 99,
          name: "img-83",
          path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/7/25/rwcEpnn3v4Ry9tKAJvX452grx-5591.w520.jpg?w=500&h=500",
          contentType: "image/png",
          size: 1,
          group: "P",
          isThumbnail: true,
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
        id: 2,
        createdAt: "2021-06-18T03:09:09Z",
        updatedAt: "2022-03-30T06:45:08Z",
        name: "Schowalter, Hartmann and Kihn",
        code: "4994",
        description: "Reduction anal prolapse",
        status: 3,
      },
      supplier: {
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
      unit: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Cái",
        status: 1,
      },
      tags: [],
      specifications: null,
      properties: null,
      variants: [
        {
          id: 99,
          createdAt: "2021-09-09T22:01:45Z",
          updatedAt: "2022-01-12T14:36:14Z",
          sku: "var-83",
          cost: 1.999e7,
          price: 1.999e7,
          properties: null,
          status: 1,
        },
      ],
      weight: 1.0,
      guarantee: {
        id: 1,
        createdAt: "2022-05-01T06:27:06Z",
        updatedAt: "2022-02-02T09:18:00Z",
        name: "Bảo hành 6 tháng",
        description: null,
        status: 1,
      },
    },
  ],
  page: 1,
  size: 5,
  totalElements: 101,
  totalPages: 21,
  last: false,
};

function ProductManage() {
  const theme = useMantineTheme();
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
          {entity.code}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Avatar
          src={(entity.images.find((image) => image.isThumbnail) || {}).path}
          alt={entity.name}
          radius="lg"
          size="lg"
          color="grape"
        >
          <QuestionMark size={30} />
        </Avatar>
      </Table.Td>
      <Table.Td>
        <EnableStatusBadge status={entity.status} />
      </Table.Td>
      <Table.Td>
        <Highlight highlightColor="blue" size="sm">
          {entity.category?.name || ""}
        </Highlight>
      </Table.Td>
      <Table.Td>
        <Stack spacing="xs" align="flex-start">
          {entity.tags
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 2)
            .map((tag, index) => (
              <Badge key={index} variant="dot" size="sm" sx={{ textTransform: "none" }}>
                {tag.name}
              </Badge>
            ))}
          {entity.tags.length > 2 && (
            <Badge variant="dot" size="sm" sx={{ textTransform: "none" }}>
              ... và {entity.tags.length - 2} tag nữa
            </Badge>
          )}
        </Stack>
      </Table.Td>
      <Table.Td>
        <VariantTablePopover variants={entity.variants} productProperties={entity.properties} />
      </Table.Td>
    </>
  );

  const EntityDetailTableRowsFragment = ({ entity }) => (
    <>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.id.label}</Table.Td>
        <Table.Td>{entity.id}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.createdAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.updatedAt.label}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.name.label}</Table.Td>
        <Table.Td>{entity.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.code.label}</Table.Td>
        <Table.Td>{entity.code}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.slug.label}</Table.Td>
        <Table.Td>{entity.slug}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.shortDescription.label}</Table.Td>
        <Table.Td maw={300}>{entity.shortDescription}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.description.label}</Table.Td>
        <Table.Td maw={300}>{entity.description}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.thumbnail.label}</Table.Td>
        <Table.Td>
          <Avatar
            src={(entity.images.find((image) => image.isThumbnail) || {}).path}
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
        <Table.Td>{ProductConfigs.properties.images.label}</Table.Td>
        <Table.Td maw={300}>
          <Group gap="xs">
            {entity.images
              .filter((image) => !image.isEliminated)
              .map((image) => (
                <Avatar
                  key={image.name}
                  src={image.path}
                  alt={image.name}
                  radius="lg"
                  size="lg"
                  color="grape"
                  sx={{
                    boxShadow: image.isThumbnail
                      ? "0 0 0 2px " + theme.colors.teal[theme.colorScheme === "dark" ? 4 : 6]
                      : "none",
                  }}
                >
                  <QuestionMark size={30} />
                </Avatar>
              ))}
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.status.label}</Table.Td>
        <Table.Td>
          <EnableStatusBadge status={entity.status} />
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties["category.name"].label}</Table.Td>
        <Table.Td>{entity.category?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties["brand.name"].label}</Table.Td>
        <Table.Td>{entity.brand?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties["supplier.displayName"].label}</Table.Td>
        <Table.Td>{entity.supplier?.displayName}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties["unit.name"].label}</Table.Td>
        <Table.Td>{entity.unit?.name}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.tags.label}</Table.Td>
        <Table.Td maw={300}>
          <Group gap="xs">
            {entity.tags
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((tag, index) => (
                <Badge key={index} variant="dot" size="sm" sx={{ textTransform: "none" }}>
                  {tag.name}
                </Badge>
              ))}
          </Group>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.specifications.label}</Table.Td>
        <Table.Td maw={300}>
          {entity.specifications && (
            <Grid gutter="xs">
              <Grid.Col span={6}>
                <strong>Thông số</strong>
              </Grid.Col>
              <Grid.Col span={6}>
                <strong>Giá trị</strong>
              </Grid.Col>
              {entity.specifications.content.map((specification, index) => (
                <React.Fragment key={index}>
                  <Grid.Col span={6}>{specification.name}</Grid.Col>
                  <Grid.Col span={6}>{specification.value}</Grid.Col>
                </React.Fragment>
              ))}
            </Grid>
          )}
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.properties.label}</Table.Td>
        <Table.Td maw={300}>
          {entity.properties && (
            <Grid gutter="xs">
              <Grid.Col span={6}>
                <strong>Thuộc tính</strong>
              </Grid.Col>
              <Grid.Col span={6}>
                <strong>Giá trị</strong>
              </Grid.Col>
              {entity.properties.content.map((property, index) => (
                <React.Fragment key={index}>
                  <Grid.Col span={6}>{property.name}</Grid.Col>
                  <Grid.Col span={6}>
                    <Group gap="xs">
                      {property.value.map((value, index) => (
                        <Badge
                          key={index}
                          size="sm"
                          radius="sm"
                          variant="outline"
                          color="teal"
                          sx={{ textTransform: "none" }}
                        >
                          {value}
                        </Badge>
                      ))}
                    </Group>
                  </Grid.Col>
                </React.Fragment>
              ))}
            </Grid>
          )}
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.variants.label}</Table.Td>
        <Table.Td>{entity.variants.length === 0 ? <em>không có</em> : entity.variants.length + " phiên bản"}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties.weight.label}</Table.Td>
        <Table.Td>{entity.weight ? entity.weight + " g" : ""}</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>{ProductConfigs.properties["guarantee.name"].label}</Table.Td>
        <Table.Td>{entity.guarantee?.name}</Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Stack>
      <ManageHeader title={ProductConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={false}>
        <ManageTable
          listResponse={listResponse}
          properties={ProductConfigs.properties}
          showedPropertiesFragment={(entity) => <ShowedPropertiesFragment entity={entity} />}
          entityDetailTableRowsFragment={(entity) => <EntityDetailTableRowsFragment entity={entity} />}
        ></ManageTable>
      </ManageMain>

      <ManagePagination />
    </Stack>
  );
}

export default ProductManage;
