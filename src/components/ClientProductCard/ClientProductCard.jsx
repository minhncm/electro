import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Group,
  Highlight,
  Image,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { BellPlus, HeartPlus, ShoppingCart } from "tabler-icons-react";
import DefaultImage from "~/images/image_default.png";
import MiscUtils from "~/utils/MiscUtils";

function ClientProductCard({ product, search }) {
  const theme = useMantineTheme();

  const [opened, handler] = useDisclosure(false);
  return (
    <Card
      radius="md"
      shadow="sm"
      p="lg"
      component={Link}
      to={`/product/${product.slug}`}
      h="100%"
      onMouseEnter={handler.open}
      onMouseLeave={handler.close}
    >
      <Stack gap="xs">
        <Box pos="relative">
          <Image
            radius="md"
            src={product.thumbnail}
            fallbackSrc={DefaultImage}
            alt={product.name}
            style={{ aspectRatio: "1/1" }}
          />
          {!product.saleable && (
            <Badge
              component="span"
              size="xs"
              color="red"
              variant="filled"
              pos="absolute"
              top={theme.spacing.xs}
              right={theme.spacing.xs}
            >
              Hết hàng
            </Badge>
          )}
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
            <ActionIcon
              color="pink"
              size="lg"
              radius="xl"
              variant="filled"
              title="Thêm vào danh sách yêu thích"
            >
              <HeartPlus size={18} />
            </ActionIcon>
            {product.saleable ? (
              <ActionIcon
                color="blue"
                size="lg"
                radius="xl"
                variant="filled"
                title="Thêm vào giỏ hàng"
              >
                <ShoppingCart size={18} />
              </ActionIcon>
            ) : (
              <ActionIcon
                color="teal"
                size="lg"
                radius="xl"
                variant="filled"
                title="Thông báo khi có hàng"
              >
                <BellPlus size={18} />
              </ActionIcon>
            )}
          </Group>
        </Box>
        <Stack gap={`calc(${theme.spacing.xs} / 2)`}>
          <Group gap="xs">
            <Text fw={500} truncate="end">
              <Highlight component="span" highlight={search || ""}>
                {product.name}
              </Highlight>
            </Text>
          </Group>
          <Text fw={500} c="pink">
            {product.priceRange
              .map((price) => {
                const p = product.promotion
                  ? MiscUtils.calculateDiscountedPrice(
                      price,
                      product.promotion.promotionPercent,
                    )
                  : price;
                return MiscUtils.toVND(p);
              })
              .join("-")}
          </Text>
          {product.promotion && (
            <Group gap="xs">
              <Text size="sm" style={{ textDecoration: "line-through" }}>
                {product.priceRange
                  .map((price) => MiscUtils.toVND(price))
                  .join("-")}
              </Text>
              <Badge color="pink" variant="filled">
                -{product.promotion.promotionPercent}
              </Badge>
            </Group>
          )}
          <Text size="sm" c="dimmed">
            {product.variants.length} phiên bản
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}

export default ClientProductCard;
