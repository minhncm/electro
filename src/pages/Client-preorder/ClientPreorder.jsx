import { Card, Grid, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { Marquee } from "tabler-icons-react";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";

function ClientPreorder() {
  const theme = useMantineTheme();
  return (
    <main>
      <Container>
        <Grid gutter="lg">
          <Grid.Col span={3}>
            <ClientUserNavbar />
          </Grid.Col>

          <Grid.Col span={9}>
            <Card radius="md" shadow="sm" p="lg">
              <Stack>
                <Title order={2}>Đặt trước sản phẩm</Title>

                {/* chưa phát triển được chức năng này */}
                <Stack my="xl" align="center" c={theme.colors.blue[6]}>
                  <Marquee size={125} strokeWidth={1} />
                  <Text size="xl" fw={500}>
                    Chưa đặt trước sản phẩm nào
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientPreorder;
