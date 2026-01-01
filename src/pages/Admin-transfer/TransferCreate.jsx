import { Button, Divider, Grid, Group, Paper, Select, Stack, Textarea, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import TransferConfigs from "~/pages/Admin-transfer/TransferConfigs";

function TransferCreate() {
  return (
    <Stack pb={50}>
      <CreateUpdateTitle managerPath={TransferConfigs.managerPath} title={TransferConfigs.createTitle} />
      <DefaultPropertyPanel />
      <Grid>
        <Grid.Col span={8}>
          <Paper shadow="xs">
            <Stack gap="xs" p="sm">
              {/* <VariantFinder
                selectedVariants={variants}
                onClickItem={handleClickVariantResultItem}
                errorSearchInput={form.errors.docketVariants}
              />
              {variants.length > 0 && (
                <VariantTable
                  type={EntityType.TRANSFER}
                  variants={variants}
                  variantRequests={form.values.docketVariants}
                  handleQuantityInput={handleQuantityInput}
                  handleDeleteVariantButton={handleDeleteVariantButton}
                />
              )} */}
            </Stack>
          </Paper>
        </Grid.Col>

        <Grid.Col span={4}>
          <form>
            <Paper shadow="xs">
              <Stack gap={0}>
                <Grid p="sm">
                  <Grid.Col>
                    <TextInput required label={TransferConfigs.properties.code.label} />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Kho xuất" placeholder="--" />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Kho nhập" placeholder="--" />
                  </Grid.Col>
                  <Grid.Col>
                    <Textarea label={TransferConfigs.properties.note.label} />
                  </Grid.Col>
                </Grid>

                <Divider mt="xs" />

                <Group justify="space-between" p="sm">
                  <Button variant="default">Mặc định</Button>
                  <Button type="submit">Thêm</Button>
                </Group>
              </Stack>
            </Paper>
          </form>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default TransferCreate;
