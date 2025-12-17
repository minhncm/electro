import { Code, Group, Paper, Stack, Text } from "@mantine/core";
import React from "react";
import DateUtils from "~/utils/DateUtils";

function DefaultPropertyPanel({
  id = "__",
  createdAt = "__/__/____",
  updatedAt = "__/__/____",
  createdBy = "__/__/____",
  updatedBy = "__/__/____",
}) {
  return (
    <Paper shadow="xs" p="sm">
      <Group gap="xl">
        <Stack gap={5}>
          <Text size="sm">ID</Text>
          <Text>
            <Code color="blue">{id}</Code>
          </Text>
        </Stack>
        <Stack gap={5}>
          <Text size="sm">Ngày tạo</Text>
          <Text>
            <Code color="blue">{DateUtils.formatterDate(createdAt)}</Code>
          </Text>
        </Stack>
        <Stack gap={5}>
          <Text size="sm">Ngày cập nhật</Text>
          <Text>
            <Code color="blue">{DateUtils.formatterDate(updatedAt)}</Code>
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}

export default React.memo(DefaultPropertyPanel);
