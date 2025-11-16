import {
  Anchor,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  Grid,
  Group,
  Radio,
  RadioGroup,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { ArrowsDownUp, ChartCandle, ChevronRight, Search, X } from "tabler-icons-react";
import Container from "~/components/Container/Container";
import MiscUtils from "~/utils/MiscUtils";
import ClientCategoryProduct from "./ClientCategoryProduct";
import { useState } from "react";

const category = {
  categoryName: "Loa",
  categorySlug: "loa",
  categoryChildren: [{ categoryName: "loa 1" }, { categoryName: "loa 2" }],
};

const filter = {
  filterPriceQuartiles: [10000000, 50000000],
  filterBrands: [
    {
      brandId: 1,
      brandName: "Cruickshank-VonRueden",
    },
    {
      brandId: 4,
      brandName: "Kohler-Ratke",
    },
    {
      brandId: 3,
      brandName: "Lehner-O'Hara",
    },
    {
      brandId: 2,
      brandName: "Schowalter, Hartmann and Kihn",
    },
    {
      brandId: 5,
      brandName: "Ullrich and Sons",
    },
  ],
};

function ClientCategory() {
  const theme = useMantineTheme();
  const [priceOptions, setPriceOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  return (
    <main>
      <Container>
        <Stack gap={`calc(${theme.spacing.xl} * 2)`}>
          <Card radius="md" shadow="md" p="lg">
            <Stack>
              <Breadcrumbs>
                <Anchor component={Link} to="/">
                  Trang chủ
                </Anchor>
                {MiscUtils.makeCaterogyBreadcrumbs(category)
                  .slice(0, -1)
                  .map((c) => (
                    <Anchor key={c.categorySlug} component={Link} to={`/category/${c.categorySlug}`}>
                      {c.categoryName}
                    </Anchor>
                  ))}
                <Text c="dimmed">{category.categoryName}</Text>
              </Breadcrumbs>

              <Group gap="xs" align="baseline">
                <Title order={2}>{category.categoryName}</Title>
                {category.categoryChildren.length > 0 && (
                  <>
                    <Text c="dimmed">
                      <ChevronRight size={14} />
                    </Text>
                    <Breadcrumbs separator="-">
                      {category.categoryChildren.map((c) => (
                        <Anchor key={c.categorySlug} component={Link} to={`/category/${c.categorySlug}`}>
                          {c.categoryName}
                        </Anchor>
                      ))}
                    </Breadcrumbs>
                  </>
                )}
              </Group>
            </Stack>
          </Card>

          <Grid gutter="xl">
            <Grid.Col span={3} mb={theme.spacing.xl}>
              <Stack gap="lg">
                <Group justify="space-between">
                  <Group gap="xs">
                    <ChartCandle />
                    <Text fw={500}>Bộ lọc</Text>
                  </Group>
                  <Button
                    variant="light"
                    color="pink"
                    radius="md"
                    size="compact-xs"
                    leftSection={<X size={10} />}
                    disabled
                  >
                    Đặt mặc định
                  </Button>
                </Group>

                <Stack>
                  <Text fw={500}>Tìm kiếm</Text>
                  <TextInput
                    radius="md"
                    placeholder={`Tìm kiếm trong ${category.categoryName}`}
                    leftSection={<Search size={16} />}
                  />
                </Stack>

                <Stack>
                  <Text fw={500}>Khoảng giá</Text>
                  <Chip.Group multiple value={priceOptions} onChange={setPriceOptions}>
                    <Group>
                      {MiscUtils.generatePriceOptions(filter.filterPriceQuartiles).map((priceOption, index) => (
                        <Chip key={index} value={priceOption.join("-")}>
                          {MiscUtils.readablePriceOption(priceOption)}
                        </Chip>
                      ))}
                    </Group>
                  </Chip.Group>
                </Stack>

                <Stack>
                  <Text fw={500}>Thương hiệu</Text>
                  {filter.filterBrands.length > 0 ? (
                    <Chip.Group multiple value={brandOptions} onChange={setBrandOptions}>
                      <Group>
                        {filter.filterBrands.map((brand) => (
                          <Chip key={brand.brandId} value={brand.brandName}>
                            {brand.brandName}
                          </Chip>
                        ))}
                      </Group>
                    </Chip.Group>
                  ) : (
                    <Text c="dimmed" style={{ fontStyle: "italic" }}>
                      Không có tùy chọn
                    </Text>
                  )}
                </Stack>

                <Stack>
                  <Text fw={500}>Khác</Text>
                  <Checkbox label="Chỉ tính còn hàng" />
                </Stack>
              </Stack>
            </Grid.Col>

            <Grid.Col span={9}>
              <Stack>
                <Group justify="space-between">
                  <Group gap="xs">
                    <ArrowsDownUp size={20} />
                    <Text fw={500} mr={theme.spacing.xs}>
                      Sắp xếp theo
                    </Text>
                    <RadioGroup>
                      <Group>
                        <Radio value="" label="Mới nhất" />
                        <Radio value="lowest-price" label="Giá thấp → cao" />
                        <Radio value="highest-price" label="Giá cao → thấp" />
                      </Group>
                    </RadioGroup>
                  </Group>
                  {/* TODO: fetch api */}
                  <Text>{93} Sản phẩm</Text>
                </Group>
              </Stack>

              {/* TODO: prop slug to call api */}
              <ClientCategoryProduct />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </main>
  );
}

export default ClientCategory;
