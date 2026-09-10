import { Grid, Group, Paper, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { Box, BrandApple, BuildingWarehouse, FileBarcode, Percentage, Star, Truck, Users } from "tabler-icons-react";
import OverviewCard from "~/pages/Admin-dashboard/OverviewCard";

function AdminDashboard() {
  const theme = useMantineTheme();

  return (
    <Stack mb={30}>
      <Title order={3}>Thống kê hệ thống</Title>

      <Paper shadow="xs" p="sm">
        <Stack>
          <Text size="lg" fw={500} c="dimmed">
            Tổng quan
          </Text>
          <Grid>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số khách hàng" color="blue" icon={Users} />
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số sản phẩm" color="orange" icon={Box} />
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số đơn hàng" color="teal" icon={FileBarcode} />
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số vận đơn" color="grape" icon={Truck} />
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số đánh giá" color="yellow" icon={Star} />
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số khuyến mãi hiện tại" color="pink" icon={Percentage} />
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số nhà cung cấp" color="violet" icon={BuildingWarehouse} />
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số thương hiệu" color="indigo" icon={BrandApple} />
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>

      <Grid>
        <Grid.Col span={6}>
          <Stack>
            <Paper shadow="xs" p="sm">
              <Stack>
                <Group justify="space-between">
                  <Text size="lg" fw={500} c="dimmed">
                    Lượt đăng ký tài khoản
                  </Text>
                  <Text size="sm" c="dimmed">
                    7 ngày gần nhất
                  </Text>
                </Group>

                <LineChart width={650} height={275} margin={{ top: 10, right: 5, bottom: 0, left: -10 }}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line name="Số lượt đăng ký" type="monotone" dataKey="total" stroke={theme.colors.blue[5]} />
                </LineChart>
              </Stack>
            </Paper>

            <Paper shadow="xs" p="sm">
              <Stack>
                <Group justify="space-between">
                  <Text size="lg" fw={500} c="dimmed">
                    Lượt đánh giá sản phẩm
                  </Text>
                  <Text size="sm" c="dimmed">
                    7 ngày gần nhất
                  </Text>
                </Group>

                <LineChart width={650} height={275} margin={{ top: 10, right: 5, bottom: 0, left: -10 }}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line name="Số lượt đánh giá" type="monotone" dataKey="total" stroke={theme.colors.yellow[7]} />
                </LineChart>
              </Stack>
            </Paper>
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Stack>
            <Paper shadow="xs" p="sm">
              <Stack>
                <Group justify="space-between">
                  <Text size="lg" fw={500} c="dimmed">
                    Lượt đặt hàng
                  </Text>
                  <Text size="sm" c="dimmed">
                    7 ngày gần nhất
                  </Text>
                </Group>

                <BarChart width={650} height={275} margin={{ top: 10, right: 5, bottom: 0, left: -10 }}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar name="Số lượt đặt hàng" dataKey="total" fill={theme.colors.teal[5]} />
                </BarChart>
              </Stack>
            </Paper>

            <Paper shadow="xs" p="sm">
              <Stack>
                <Group justify="space-between">
                  <Text size="lg" fw={500} c="dimmed">
                    Lượt tạo vận đơn
                  </Text>
                  <Text size="sm" c="dimmed">
                    7 ngày gần nhất
                  </Text>
                </Group>

                <BarChart width={650} height={275} margin={{ top: 10, right: 5, bottom: 0, left: -10 }}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar name="Số lượt tạo vận đơn" dataKey="total" fill={theme.colors.grape[5]} />
                </BarChart>
              </Stack>
            </Paper>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default AdminDashboard;
