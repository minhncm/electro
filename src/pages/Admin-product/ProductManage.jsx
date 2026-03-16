import {
  Avatar,
  Badge,
  Grid,
  Group,
  Highlight,
  Stack,
  Table,
  useMantineTheme,
} from "@mantine/core";
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
import useGetAllApi from "~/hooks/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";
import DateUtils from "~/utils/DateUtils";
import ManageHeaderTitle from "~/components/ManageHeaderTitle/ManageHeaderTitle";
import ManageHeaderButtons from "~/components/ManageHeaderButton/ManageHeaderButtons";

function ProductManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(ProductConfigs.resourceUrl, ProductConfigs.resourceKey);
  const theme = useMantineTheme();
  const ShowedPropertiesFragment = ({ entity }) => (
    <>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.name}</Highlight>
      </Table.Td>
      <Table.Td>
        <Highlight size="sm">{entity.code}</Highlight>
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
        <Highlight size="sm">{entity.category?.name || ""}</Highlight>
      </Table.Td>
      <Table.Td>
        <Stack spacing="xs" align="flex-start">
          {entity.tags
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 2)
            .map((tag, index) => (
              <Badge
                key={index}
                variant="dot"
                size="sm"
                sx={{ textTransform: "none" }}
              >
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
        <VariantTablePopover
          variants={entity.variants}
          productProperties={entity.properties}
        />
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
                      ? "0 0 0 2px " +
                        theme.colors.teal[theme.colorScheme === "dark" ? 4 : 6]
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
        <Table.Td>
          {ProductConfigs.properties["supplier.displayName"].label}
        </Table.Td>
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
                <Badge
                  key={index}
                  variant="dot"
                  size="sm"
                  sx={{ textTransform: "none" }}
                >
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
        <Table.Td>
          {entity.variants.length === 0 ? (
            <em>không có</em>
          ) : (
            entity.variants.length + " phiên bản"
          )}
        </Table.Td>
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
      <ManageHeader>
        <ManageHeaderTitle title={ProductConfigs.manageTitle} />
        <ManageHeaderButtons
          listResponse={listResponse}
          resourceUrl={ProductConfigs.resourceUrl}
          resourceKey={ProductConfigs.resourceKey}
        />
      </ManageHeader>

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          resourceUrl={ProductConfigs.resourceUrl}
          resourceKey={ProductConfigs.resourceKey}
          properties={ProductConfigs.properties}
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

export default ProductManage;
