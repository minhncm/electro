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
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowsDownUp,
  ChartCandle,
  ChevronRight,
  Search,
  X,
} from "tabler-icons-react";
import Container from "~/components/Container/Container";
import useClientCategoryStore from "~/stores/use-client-category-store";
import {
  useGetCategoryBySlug,
  useGetFiltersByCategorySlug,
} from "~/hooks/client/use-category-api";
import MiscUtils from "~/utils/MiscUtils";
import ClientCategoryProduct from "./ClientCategoryProduct";

function ClientCategory() {
  const theme = useMantineTheme();
  const { slug } = useParams();

  const {
    totalProducts,
    activePage,
    activePriceFilter,
    activeBrandFilter,
    activeSort,
    activeSearch,
    activeSaleable,
    updateActivePage,
    updateActiveSort,
    updateActiveSearch,
    updateActiveSaleable,
    updateActiveBrandFilter,
    updateActivePriceFilter,
    resetClientCategoryState,
  } = useClientCategoryStore();

  const [searchQuery, setSearchQuery] = useState(null);
  const [priceOptions, setPriceOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [debouncedSearchQuery] = useDebouncedValue(searchQuery, 400);

  const { data: category } = useGetCategoryBySlug(slug);
  const { data: filters } = useGetFiltersByCategorySlug(slug);

  useEffect(() => {
    if (debouncedSearchQuery !== activeSearch) {
      updateActivePage(1);
      updateActiveSearch(debouncedSearchQuery);
    }
  }, [
    activeSearch,
    debouncedSearchQuery,
    updateActivePage,
    updateActiveSearch,
  ]);

  useEffect(() => {
    setSearchQuery(null);
    setPriceOptions([]);
    setBrandOptions([]);
    resetClientCategoryState();
  }, [resetClientCategoryState, slug]);

  const handlePriceOptionChips = (priceOptions) => {
    const expressions = [];

    for (const priceOption of priceOptions) {
      const priceOptionArray = priceOption.split("-");
      if (priceOptionArray[1] === "max") {
        expressions.push(
          `variants.price=bt=(${priceOptionArray[0]},1000000000)`,
        );
      } else {
        expressions.push(
          `variants.price=bt=(${priceOptionArray[0]},${priceOptionArray[1]})`,
        );
      }
    }

    setPriceOptions(priceOptions);
    updateActivePriceFilter(
      expressions.length > 0 ? `(${expressions.join(",")})` : null,
    );
  };

  const handleBrandChips = (brandIds) => {
    setBrandOptions(brandIds);
    updateActiveBrandFilter(
      brandIds.length > 0 ? `brand.id=in=(${brandIds.join(",")})` : null,
    );
  };

  const disabledResetButton =
    activePage === 1 &&
    activeBrandFilter === null &&
    activePriceFilter === null &&
    searchQuery === null &&
    !activeSaleable;

  const handleResetButton = () => {
    resetClientCategoryState();
    setSearchQuery(null);
    setPriceOptions([]);
    setBrandOptions([]);
  };

  if (!category) return null;
  if (!filters) return null;

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
                    <Anchor
                      key={c.slug}
                      component={Link}
                      to={`/category/${c.slug}`}
                    >
                      {c.name}
                    </Anchor>
                  ))}
                <Text c="dimmed">{category.name}</Text>
              </Breadcrumbs>

              <Group gap="xs" align="baseline">
                <Title order={2}>{category.name}</Title>
                {category.children?.length > 0 && (
                  <>
                    <Text c="dimmed">
                      <ChevronRight size={14} />
                    </Text>
                    <Breadcrumbs separator="-">
                      {category.children.map((c) => (
                        <Anchor
                          key={c.slug}
                          component={Link}
                          to={`/category/${c.slug}`}
                        >
                          {c.name}
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
                    onClick={handleResetButton}
                    disabled={disabledResetButton}
                  >
                    Đặt mặc định
                  </Button>
                </Group>

                <Stack>
                  <Text fw={500}>Tìm kiếm</Text>
                  <TextInput
                    radius="md"
                    placeholder={`Tìm kiếm trong ${category.name}`}
                    leftSection={<Search size={16} />}
                    value={searchQuery || ""}
                    onChange={(event) =>
                      setSearchQuery(event.currentTarget.value || null)
                    }
                  />
                </Stack>

                <Stack>
                  <Text fw={500}>Khoảng giá</Text>
                  <Chip.Group
                    multiple
                    value={priceOptions}
                    onChange={handlePriceOptionChips}
                  >
                    <Group>
                      {MiscUtils.generatePriceOptions(filters.priceRange).map(
                        (priceOption, index) => (
                          <Chip key={index} value={priceOption.join("-")}>
                            {MiscUtils.readablePriceOption(priceOption)}
                          </Chip>
                        ),
                      )}
                    </Group>
                  </Chip.Group>
                </Stack>

                <Stack>
                  <Text fw={500}>Thương hiệu</Text>
                  {filters.brands.length > 0 ? (
                    <Chip.Group
                      multiple
                      value={brandOptions}
                      onChange={handleBrandChips}
                    >
                      <Group>
                        {filters.brands.map((brand) => (
                          <Chip key={brand.id} value={String(brand.id)}>
                            {brand.name}
                          </Chip>
                        ))}
                      </Group>
                    </Chip.Group>
                  ) : (
                    <Text c="dimmed" fs="italic">
                      Không có tùy chọn
                    </Text>
                  )}
                </Stack>

                <Stack>
                  <Text fw={500}>Khác</Text>
                  <Checkbox
                    label="Chỉ tính còn hàng"
                    onClick={(event) =>
                      updateActiveSaleable(event.currentTarget.checked)
                    }
                  />
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
                    <RadioGroup
                      value={activeSort || ""}
                      onChange={(value) => updateActiveSort(value)}
                    >
                      <Group>
                        <Radio value="" label="Mới nhất" />
                        <Radio value="lowest-price" label="Giá thấp → cao" />
                        <Radio value="highest-price" label="Giá cao → thấp" />
                      </Group>
                    </RadioGroup>
                  </Group>
                  <Text>{totalProducts} Sản phẩm</Text>
                </Group>
              </Stack>

              <ClientCategoryProduct categorySlug={category.slug} />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </main>
  );
}

export default ClientCategory;
