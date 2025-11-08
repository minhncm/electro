import { ActionIcon, Badge, Box, Card, Group, Highlight, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { BellPlus, HeartPlus, ShoppingCart } from "tabler-icons-react";
import DefaultImage from "~/images/image_default.png";
import MiscUtils from "~/utils/MiscUtils";

function ClientProductCart({ product }) {
  const theme = useMantineTheme();

  const [opened, handler] = useDisclosure(false);
  return (
    <Card
      radius="md"
      shadow="sm"
      p="lg"
      component={Link}
      to={`/product/${product.productSlug}`}
      h="100%"
      onMouseEnter={handler.open}
      onMouseLeave={handler.close}
    >
      <Stack gap="xs">
        <Box pos="relative">
          <Image
            radius="md"
            src={product.productThumbnail}
            fallbackSrc={DefaultImage}
            alt={product.productName}
            style={{ aspectRatio: "1/1" }}
          />
          <Group
            gap="xs"
            pos="absolute"
            left="50%"
            bottom={0}
            mb={theme.spacing.sm}
            opacity={opened ? 1 : 0}
            style={{
              transform: "translateX(-50%)",
              transition: "opacity .2s ease-in",
            }}
          >
            <ActionIcon color="pink" size="lg" radius="xl" variant="filled" title="Thêm vào danh sách yêu thích">
              <HeartPlus size={18} />
            </ActionIcon>
            {product.productSaleable ? (
              <ActionIcon color="blue" size="lg" radius="xl" variant="filled" title="Thêm vào giỏ hàng">
                <ShoppingCart size={18} />
              </ActionIcon>
            ) : (
              <ActionIcon color="teal" size="lg" radius="xl" variant="filled" title="Thông báo khi có hàng">
                <BellPlus size={18} />
              </ActionIcon>
            )}
          </Group>
        </Box>
        <Stack gap={`calc(${theme.spacing.xs} / 2)`}>
          <Group gap="xs">
            <Text fw={500}>
              {/* update hightlight */}
              <Highlight>{product.productName}</Highlight>
              {!product.productSaleable && (
                <Badge size="xs" color="red" variant="filled">
                  Hết hàng
                </Badge>
              )}
            </Text>
          </Group>
          <Text fw={500} c="pink">
            {product.productPriceRange
              .map((price) => {
                const p = product.productPromotion
                  ? MiscUtils.calculateDiscoutedPrice(price, product.productPromotion.promotionPercent)
                  : price;
                return MiscUtils.toVND(p);
              })
              .join("-")}
          </Text>
          {product.productPromotion && (
            <Group gap="xs">
              <Text size="sm" style={{ textDecoration: "line-through" }}>
                {product.productPriceRange.map((price) => MiscUtils.toVND(price)).join("-")}
              </Text>
              <Badge color="pink" variant="filled">
                -{product.productPromotion.promotionPercent}
              </Badge>
            </Group>
          )}
          <Text size="sm" c="dimmed">
            {product.productVariants.length} phiên bản
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}

export default ClientProductCart;
