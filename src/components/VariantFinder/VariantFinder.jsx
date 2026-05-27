import {
  Box,
  Popover,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useDebouncedValue, useElementSize } from "@mantine/hooks";
import { useState } from "react";
import { Loader, Search } from "tabler-icons-react";
import VariantResult from "~/components/VariantResult";
import ResourceUrl from "~/constants/ResourceURL";
import useGetAllApi from "~/hooks/admin/use-get-all-api";

function VariantFinder({ selectedVariants, onClickItem, errorSearchInput }) {
  const { ref: refBox, width: widthBox } = useElementSize();

  const [popoverOpened, setPopoverOpened] = useState(false);
  const [keyword, setKeyword] = useState("");

  const [debouncedKeyword] = useDebouncedValue(keyword, 400);

  const { data: variants, isFetching } = useGetAllApi(
    ResourceUrl.VARIANT,
    "variants",
    { all: 1, search: debouncedKeyword },
  );

  if (!variants) return null;

  const selectedVariantIds = selectedVariants.map((variant) => variant.id);
  return (
    <Box ref={refBox}>
      <Popover
        opened={popoverOpened}
        position="bottom-start"
        transitionProps={{ transition: "pop-top-left" }}
        trapFocus={false}
        styles={{ dropdown: { width: widthBox } }}
        onClose={() => setPopoverOpened(false)}
        closeOnClickOutside
      >
        <Popover.Target>
          <TextInput
            required
            label="Thêm mặt hàng"
            placeholder="Nhập tên, mã sản phẩm hay SKU để tìm..."
            value={keyword}
            onChange={(event) => setKeyword(event.currentTarget.value)}
            leftSection={<Search size={14} />}
            rightSection={isFetching ? <Loader size={16} /> : null}
            onFocus={() => setPopoverOpened(true)}
            error={errorSearchInput}
          />
        </Popover.Target>
        <Popover.Dropdown>
          <Stack gap={0}>
            {!variants || variants.totalElements === 0 ? (
              <Text size="sm" p="sm" c="dimmed" fs="italic">
                Không có kết quả
              </Text>
            ) : (
              variants.content.map((variant) => (
                <UnstyledButton
                  key={variant.sku}
                  onClick={() => {
                    onClickItem(variant);
                    setPopoverOpened(false);
                  }}
                  disabled={selectedVariantIds.includes(variant.id)}
                >
                  <VariantResult
                    variant={variant}
                    keyword={debouncedKeyword}
                    disabled={selectedVariantIds.includes(variant.id)}
                  />
                </UnstyledButton>
              ))
            )}
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
}

export default VariantFinder;
