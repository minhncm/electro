import { Paper, TextInput } from "@mantine/core";
import { Search } from "tabler-icons-react";

function ReviewSearchPanel() {
  return (
    <Paper shadow="xs" p="sm">
      <TextInput placeholder="Từ khóa" icon={<Search size={14} />} />
    </Paper>
  );
}

export default ReviewSearchPanel;
