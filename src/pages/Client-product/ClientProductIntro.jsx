import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Grid,
  Group,
  Image,
  NumberInput,
  rgba,
  SimpleGrid,
  Stack,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BellPlus, Heart, PhotoOff, ShoppingCart } from "tabler-icons-react";
import ClientCarousel from "~/components/ClientCarousel/ClientCarousel";
import ReviewStar from "~/components/ReviewStar";
import MiscUtils from "~/utils/MiscUtils";

function ClientProductIntro({ product }) {
  const theme = useMantineTheme();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleSelectedVariantButton = (index) => {
    setSelectedVariantIndex(index);
    setQuantity(1);
  };
  return (
    <Card radius="md" shadow="sm" p="lg">
      <Stack>
        <Breadcrumbs>
          <Anchor component={Link} to={"/"}>
            Trang chủ
          </Anchor>
          {product.productCategory &&
            MiscUtils.makeCaterogyBreadcrumbs(product.productCategory).map((category) => (
              <Anchor component={Link} to={`/category/${category.categorySlug}`}>
                {category.categoryName}
              </Anchor>
            ))}
          <Text c="dimmed">{product.productName}</Text>
        </Breadcrumbs>

        <Grid gutter="lg">
          <Grid.Col span={6}>
            {product.productImages.length > 0 ? (
              <ClientCarousel>
                {product.productImages.map((image) => (
                  <Image
                    key={image.id}
                    radius="md"
                    src={image.path}
                    style={{ aspectRatio: "1/1" }}
                    fallbackSrc="../images/image_default.png"
                  />
                ))}
              </ClientCarousel>
            ) : (
              <Box
                style={{
                  borderRadius: theme.radius.md,
                  width: "100%",
                  height: "100%",
                  aspectRatio: "1/1",
                  border: `2px dotted ${theme.colors.gray[5]}`,
                }}
              >
                <Stack align="center" justify="center" h="100%">
                  <PhotoOff size={100} strokeWidth={1} />
                  <Text>Không có hình cho sản phẩm này</Text>
                </Stack>
              </Box>
            )}
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack gap="lg">
              <Stack gap={2} align="flex-start">
                {!product.productSaleable && (
                  <Badge color="red" variant="filled" mb={5}>
                    Hết hàng
                  </Badge>
                )}
                {product.productBrand && (
                  <Group gap={5}>
                    <Text size="sm">Thương hiệu: </Text>
                    <Anchor size="sm" component={Link} to={`/brand/${product.productBrand.brandId}`}>
                      {product.productBrand.brandName}
                    </Anchor>
                  </Group>
                )}
                <Text style={{ fontSize: 26 }} fw={500}>
                  {product.productName}
                </Text>

                <Group mt={7.5} gap="lg">
                  <Group gap="xs">
                    <ReviewStar score={product.productAverageRatingScore} />
                    <Text size="sm">{product.productCountReviews} đánh giá</Text>
                  </Group>

                  {/* TODO: Doanh số sản phẩm */}
                  {/*<Group spacing={5}>*/}
                  {/*  <ShoppingCart size={18} strokeWidth={1.5} color={theme.colors.teal[7]}/>*/}
                  {/*  <Text size="sm" color="teal">120 đã mua</Text>*/}
                  {/*</Group>*/}
                </Group>
              </Stack>

              {product.productShortDescription && <Text c="dimmed">{product.productShortDescription}</Text>}

              <Box
                style={{
                  backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
                  borderRadius: theme.radius.md,
                  padding: "16px 20px",
                }}
              >
                <Group>
                  {/* TODO: cập nhật price theo từng variant */}
                  <Text style={{ fontSize: 24 }} fw={700} c="pink">
                    5.500.000 ₫
                  </Text>
                  {product.productPromotion && (
                    <>
                      <Text style={{ textDecoration: "line-through" }}>5.500.000 ₫</Text>
                      <Badge color="pink" size="lg" variant="filled">
                        -{product.productPromotion.promotionPercent}%
                      </Badge>
                    </>
                  )}
                </Group>
              </Box>

              <Stack gap="xs">
                <Text fw={500}>Phiên bản</Text>
                {product.productVariants.length > 0 ? (
                  product.productVariants.some((variant) => variant.variantProperties) ? (
                    <Group>
                      {product.productVariants.map((variant, index) => (
                        <UnstyledButton
                          key={variant.variantId}
                          style={{
                            borderRadius: theme.radius.md,
                            padding: "7.5px 15px",
                            border: `2px solid ${
                              theme.colorScheme === "dark"
                                ? index === selectedVariantIndex
                                  ? theme.colors.blue[9]
                                  : theme.colors.dark[3]
                                : index === selectedVariantIndex
                                ? theme.colors.blue[4]
                                : theme.colors.gray[2]
                            }`,
                            backgroundColor:
                              index === selectedVariantIndex
                                ? theme.colorScheme === "dark"
                                  ? rgba(theme.colors.blue[9], 0.25)
                                  : theme.colors.blue[0]
                                : "unset",
                            opacity: variant.variantInventory === 0 ? 0.5 : "unset",
                          }}
                          onClick={() => handleSelectedVariantButton(index)}
                          disabled={selectedVariantIndex === index || variant.variantInventory === 0}
                        >
                          <Stack gap={2.5}>
                            <SimpleGrid cols={2} spacing={2.5}>
                              {variant.variantProperties?.content.map((property) => (
                                <React.Fragment key={property.id}>
                                  <Text size="sm">{property.name}</Text>
                                  <Text size="sm" ta="right" fw={500}>
                                    {property.value}
                                  </Text>
                                </React.Fragment>
                              ))}
                            </SimpleGrid>
                            <Text size="xs" c="dimmed">
                              Tồn kho: {variant.variantInventory}
                            </Text>
                            <Text size="xs" c="dimmed">
                              Gía: 5.500.500 ₫
                            </Text>
                          </Stack>
                        </UnstyledButton>
                      ))}
                    </Group>
                  ) : (
                    <Text c="dimmed" size="sm">
                      Sản phẩm chỉ có duy nhất một phiên bản mặc định
                    </Text>
                  )
                ) : (
                  <Text c="dimmed" size="sm">
                    Không có phiên bản nào
                  </Text>
                )}
              </Stack>

              {product.productSaleable && (
                <Stack gap="xs">
                  <Text fw={500}> Số lượng</Text>
                  <Group gap={5}>
                    <ActionIcon size={36} variant="default">
                      -
                    </ActionIcon>
                    <NumberInput
                      hideControls
                      value={quantity}
                      onChange={(value) => setQuantity(value || 1)}
                      max={product.productVariants[selectedVariantIndex].variantInventory}
                      min={1}
                      w={54}
                      styles={{ input: { textAlign: "center" } }}
                    />
                    <ActionIcon size={36} variant="default">
                      +
                    </ActionIcon>
                  </Group>
                </Stack>
              )}

              <Group mt={theme.spacing.md}>
                {!product.productSaleable ? (
                  <Button radius="md" size="lg" color="teal" leftSection={<BellPlus />}>
                    Đặt trước
                  </Button>
                ) : (
                  <Button radius="md" size="lg" color="pink" leftSection={<ShoppingCart />}>
                    Chọn mua
                  </Button>
                )}
                <Button radius="md" size="lg" color="pink" variant="outline" leftSection={<Heart />}>
                  Yêu thích
                </Button>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Card>
  );
}

export default ClientProductIntro;
