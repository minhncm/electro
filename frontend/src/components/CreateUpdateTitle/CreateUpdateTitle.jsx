import React from "react";
import { ActionIcon, Group, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { ChevronLeft } from "tabler-icons-react";

function CreateUpdateTitle({ managerPath, title }) {
  return (
    <Group gap="xs">
      <ActionIcon component={Link} to={managerPath} color="blue" variant="filled">
        <ChevronLeft />
      </ActionIcon>
      <Title order={3}>{title}</Title>
    </Group>
  );
}

export default React.memo(CreateUpdateTitle);
