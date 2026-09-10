import { Anchor, Breadcrumbs, Card, Grid, Group, Stack, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import Container from "~/components/Container/Container";
import { categorySlugIconMap } from "~/pages/PageConfig";

const categories = {
  content: [
    {
      categoryName: "Laptop",
      categorySlug: "laptop",
      categoryChildren: [],
    },
    {
      categoryName: "Loa",
      categorySlug: "loa",
      categoryChildren: [],
    },
    {
      categoryName: "Bàn phím",
      categorySlug: "ban-phim",
      categoryChildren: [],
    },
    {
      categoryName: "Máy chơi game",
      categorySlug: "may-choi-game",
      categoryChildren: [],
    },
    {
      categoryName: "Chuột",
      categorySlug: "chuot",
      categoryChildren: [],
    },
    {
      categoryName: "CPU",
      categorySlug: "cpu",
      categoryChildren: [],
    },
    {
      categoryName: "PC",
      categorySlug: "pc",
      categoryChildren: [],
    },
    {
      categoryName: "Balo",
      categorySlug: "balo",
      categoryChildren: [],
    },
  ],
  totalElements: 8,
};

function ClientAllCategories() {
  const theme = useMantineTheme();

  let resultFragment;

  if (categories) {
    resultFragment = categories.content.map((firstCategory, index) => {
      const CategoryIcon = categorySlugIconMap[firstCategory.categorySlug];
      return (
        <Stack key={index}>
          <Group>
            <ThemeIcon variant="light" size={42}>
              <CategoryIcon />
            </ThemeIcon>
            <Anchor
              component={Link}
              to={`/category/${firstCategory.categorySlug}`}
              size={`calc(${theme.fontSizes.sm} * 2)`}
              fw={500}
            >
              {firstCategory.categoryName}
            </Anchor>
          </Group>
          <Grid>
            {firstCategory.categoryChildren.map((secondCategory, index) => (
              <Grid.Col span={2.4} mb="sm" key={index}>
                <Stack gap="xs">
                  <Anchor component={Link} to={`/category/${secondCategory.categorySlug}`} fw={500} c="pink">
                    {secondCategory.categoryName}
                  </Anchor>
                  {secondCategory.categoryChildren.map((thirdCategory, index) => (
                    <Anchor key={index} component={Link} to={`/category/${thirdCategory.categorySlug}`}>
                      {thirdCategory.categoryName}
                    </Anchor>
                  ))}
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      );
    });
  }
  return (
    <main>
      <Container>
        <Stack gap={`calc(${theme.spacing.sm} * 2)`}>
          <Card radius="md" shadow="sm" p="lg">
            <Stack>
              <Breadcrumbs>
                <Anchor component={Link} to="/">
                  Trang chủ
                </Anchor>
                <Text c="dimmed">Tất cả danh mục sản phẩm</Text>
              </Breadcrumbs>
              <Title order={2}>Tất cả danh mục sản phẩm</Title>
            </Stack>
          </Card>

          {resultFragment}
        </Stack>
      </Container>
    </main>
  );
}

export default ClientAllCategories;
