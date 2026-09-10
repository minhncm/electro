import { Group, useMantineTheme } from "@mantine/core";
import { Star } from "tabler-icons-react";

function ReviewStar({ score }) {
  const theme = useMantineTheme();
  return (
    <Group gap={5}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Star
            key={index}
            color={index < score ? theme.colors.yellow[5] : theme.colors.gray[5]}
            fill={index < score ? theme.colors.yellow[5] : theme.colors.gray[5]}
            size={14}
          />
        ))}
    </Group>
  );
}

export default ReviewStar;
