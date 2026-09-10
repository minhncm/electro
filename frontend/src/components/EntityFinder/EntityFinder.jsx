import {
  ActionIcon,
  Box,
  Group,
  Popover,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { useState } from "react";
import { Check, Loader, Search, Trash } from "tabler-icons-react";

const isFetching = false;
const entityResponses = [];

function EntityFinder({ selections, onClickItem, onDeleteItem, errorSearchInput, options }) {
  const theme = useMantineTheme();

  const { ref: refBox, width: widthBox } = useElementSize();

  const [popoverOpened, setPopoverOpened] = useState(false);
  const [keyword, setKeyword] = useState("");

  const selectionIds = selections.map((selection) => selection.id);
  return (
    <Stack>
      <Box ref={refBox}>
        <Popover
          opened={popoverOpened}
          position="bottom-start"
          transitionProps={{ transition: "pop-top-left" }}
          styles={{ root: { width: "100%" }, dropdown: { width: widthBox } }}
          trapFocus={false}
          onFocusCapture={() => setPopoverOpened(true)}
          onClose={() => setPopoverOpened(false)}
        >
          <Popover.Target>
            <TextInput
              required
              label={options.inputLabel}
              placeholder={options.inputPlaceholder || "--"}
              value={keyword}
              onChange={(event) => setKeyword(event.currentTarget.value)}
              icon={<Search size={14} />}
              rightSection={isFetching ? <Loader size={16} /> : null}
              error={errorSearchInput}
            />
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap={0}>
              {!entityResponses || entityResponses.totalElements === 0 ? (
                <Text size="sm" p="sm" color="dimmed" sx={{ fontStyle: "italic" }}>
                  Không có kết quả
                </Text>
              ) : (
                entityResponses.content.map((entityResponse) => {
                  const disabled = selectionIds.includes(entityResponse.id);

                  return (
                    <UnstyledButton
                      key={entityResponse.id}
                      onClick={() => {
                        onClickItem(entityResponse);
                        setPopoverOpened(false);
                      }}
                      disabled={disabled}
                    >
                      <Group
                        justify="space-between"
                        px={10}
                        py={12}
                        bdrs={theme.radius.sm}
                        opacity={disabled ? 0.5 : "unset"}
                      >
                        {options.resultFragment(entityResponse)}
                        {disabled && (
                          <Group gap={5}>
                            <ThemeIcon radius="lg" color="green" size="xs">
                              <Check size={12} />
                            </ThemeIcon>
                            <Text fw={500} c="green" size="xs">
                              Đã thêm
                            </Text>
                          </Group>
                        )}
                      </Group>
                    </UnstyledButton>
                  );
                })
              )}
            </Stack>
          </Popover.Dropdown>
        </Popover>
      </Box>

      {selections.length > 0 && (
        <Stack gap="xs">
          {selections.map((selectedEntityResponse) => (
            <Group
              key={selectedEntityResponse.id}
              justify="space-between"
              p={theme.spacing.sm}
              bdrs={theme.radius.sm}
              style={{
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
              }}
            >
              {options.selectedFragment(selectedEntityResponse)}
              <ActionIcon
                color="red"
                variant="outline"
                size={24}
                title={options.deleteButtonTitle}
                onClick={() => onDeleteItem(selectedEntityResponse)}
              >
                <Trash size={16} />
              </ActionIcon>
            </Group>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default EntityFinder;
