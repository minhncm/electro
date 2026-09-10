import { Button, Divider, Grid, Group, Paper, Select, Stack, Textarea, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import CountConfigs from "~/pages/Admin-count/CountConfigs";

function CountCreate() {
  return (
    <Stack pb={50}>
      <CreateUpdateTitle managerPath={CountConfigs.managerPath} title={CountConfigs.createTitle} />
      <DefaultPropertyPanel />
      <Grid>
        <Grid.Col span={8}>
          <Paper shadow="xs">
            <Stack gap="xs" p="sm">
              {/* <VariantFinder
                selectedVariants={variants}
                onClickItem={handleClickVariantResultItem}
                errorSearchInput={form.errors.countVariants}
              />
              {variants.length > 0 && (
                <VariantTable
                  type={EntityType.COUNT}
                  variants={variants}
                  variantRequests={form.values.countVariants}
                  handleActualInventoryInput={handleActualInventoryInput}
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
                    <TextInput required label={CountConfigs.properties.code.label} />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Nhà kho" placeholder="--" />
                  </Grid.Col>
                  <Grid.Col>
                    <Textarea label="Ghi chú phiếu kiểm kho" />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label={CountConfigs.properties.status.label} placeholder="--" />
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

export default CountCreate;
