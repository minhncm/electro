import { ActionIcon, Checkbox, Group, Table, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import { Edit, Eye, Trash } from "tabler-icons-react";
import useManageTableViewModel from "~/hooks/useMangeTableViewModel";

function ManageTable({
  listResponse,
  properties,
  resourceUrl,
  resourceKey,
  showedPropertiesFragment,
  entityDetailTableRowsFragment,
}) {
  const theme = useMantineTheme();

  const {
    selection,
    tableHeads,
    handleToggleAllRowsCheckBox,
    handleToggleRowsCheckBox,
    handleViewEntityButton,
    handleDeleteEntityButton,
  } = useManageTableViewModel({
    listResponse,
    properties,
    resourceUrl,
    resourceKey,
    entityDetailTableRowsFragment,
  });

  const entitiesTableHeadsFragment = (
    <Table.Tr>
      <Table.Th style={{ width: 40 }}>
        <Checkbox
          onChange={handleToggleAllRowsCheckBox}
          checked={selection.length === listResponse.content.length}
          indeterminate={selection.length > 0 && selection.length !== listResponse.content.length}
        />
      </Table.Th>
      {tableHeads.map((item) => (
        <Table.Th key={item}>{item}</Table.Th>
      ))}
      <Table.Th style={{ width: 120 }}>Thao tác</Table.Th>
    </Table.Tr>
  );

  const entitiesTableRowsFragment = listResponse.content.map((entity) => (
    <Table.Tr key={entity.id}>
      <Table.Td>
        <Checkbox checked={selection.includes(entity.id)} onChange={() => handleToggleRowsCheckBox(entity.id)} />
      </Table.Td>
      {showedPropertiesFragment(entity)}
      <Table.Td>
        <Group gap="xs">
          <ActionIcon
            color="blue"
            variant="outline"
            size={24}
            title="Xem"
            onClick={() => handleViewEntityButton(entity.id)}
          >
            <Eye size={16} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            to={`update/${entity.id}`}
            color="teal"
            variant="outline"
            size={24}
            title="Cập nhật"
          >
            <Edit size={16} />
          </ActionIcon>
          <ActionIcon
            color="red"
            variant="outline"
            size={24}
            title="Xóa"
            onClick={() => handleDeleteEntityButton(entity.id)}
          >
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table
      horizontalSpacing="sm"
      verticalSpacing="sm"
      highlightOnHover
      striped
      bdrs={theme.radius.sm}
      style={{ overflow: "hidden" }}
    >
      <Table.Thead>{entitiesTableHeadsFragment}</Table.Thead>
      <Table.Tbody>{entitiesTableRowsFragment}</Table.Tbody>
    </Table>
  );
}

export default ManageTable;
