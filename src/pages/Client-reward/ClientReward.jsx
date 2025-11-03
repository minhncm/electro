import { Badge, Card, Grid, Group, Stack, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import { Award, Marquee } from "tabler-icons-react";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import { RewardLogInfoMap } from "~/pages/iconMapConfig";

const reward = {
  rewardTotalScore: 50,
  rewardLogs: [
    {
      rewardLogId: 3,
      rewardLogCreatedAt: "2025-10-29T14:33:09Z",
      rewardLogScore: 50,
      rewardLogType: "ADD_REVIEW",
      rewardLogNote: "Bạn đã nhận được 50 điểm thưởng cho đánh giá ở sản phẩm Loa Harman Kardon Onyx Studio 7.",
    },
  ],
};

function ClientReward() {
  const theme = useMantineTheme();

  let rewardContentFragment;

  if (reward.rewardLogs.length === 0) {
    rewardContentFragment = (
      <Stack my="xl" align="center" c={theme.colors.blue[6]}>
        <Marquee size={125} strokeWidth={1} />
        <Text size="xl" fw={500}>
          Chưa có điểm thưởng nào
        </Text>
      </Stack>
    );
  }

  if (reward) {
    rewardContentFragment = (
      <>
        <Group justify="space-between">
          <Award size={85} strokeWidth={1} color={theme.colors.grape[5]} />
          <Stack align="center">
            <Text c="grape" fw={500}>
              Tổng điểm thưởng tích lũy của bạn là
            </Text>
            <Badge radius="md" color="grape" size="xl" variant="filled">
              {reward.rewardTotalScore}
            </Badge>
          </Stack>
          <Award size={85} strokeWidth={1} color={theme.colors.grape[5]} />
        </Group>

        <Card
          radius="md"
          p="lg"
          style={{ backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[0] }}
        >
          <Stack gap="lg">
            <Text size="sm" c="dimmed" fw={500}>
              Lịch sử nhận điểm thưởng
            </Text>

            <Stack gap="xs">
              {reward.rewardLogs.map((rewardLog) => {
                const rewardLogInfo = RewardLogInfoMap[rewardLog.rewardLogType];

                return (
                  <Group key={rewardLog.rewardLogId} gap="sm" wrap="nowrap">
                    <ThemeIcon color={rewardLogInfo.color} size="sm" variant="filled" radius="xl">
                      <rewardLogInfo.icon size={12} />
                    </ThemeIcon>
                    <Text size="xs" c="dimmed">
                      {rewardLog.rewardLogCreatedAt}
                    </Text>
                    <Text size="xs" c="blue" fw={500}>
                      +{rewardLog.rewardLogScore}
                    </Text>
                    <Text size="xs">+{rewardLog.rewardLogNote}</Text>
                  </Group>
                );
              })}
            </Stack>
          </Stack>
        </Card>
      </>
    );
  }

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
                <Title order={2}>Điểm thưởng</Title>
                {rewardContentFragment}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientReward;
