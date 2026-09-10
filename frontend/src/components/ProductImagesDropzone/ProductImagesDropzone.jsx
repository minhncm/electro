import { ActionIcon, Box, Button, Center, Divider, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useEffect } from "react";
import { Check, CirclePlus, Photo, Upload, X } from "tabler-icons-react";

const getIconColor = (status, theme) => {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
    : theme.colorScheme === "dark"
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
};

const dropzoneChildren = (status, theme) => {
  const ImageUploadIcon = status.accepted ? Upload : status.rejected ? X : Photo;
  return (
    <Group pos="center" gap="xl" mih={125} style={{ pointerEvents: "none" }}>
      <ImageUploadIcon size={80} color={getIconColor(status, theme)} />

      <div>
        <Text size="xl" inline>
          Kéo thả hoặc bấm để chọn hình
        </Text>
        <Text size="sm" c="dimmed" inline mt={7}>
          Dung lượng mỗi tập tin không quá 5 MB
        </Text>
      </div>
    </Group>
  );
};

function ProductImagesDropzone({
  imageFiles,
  setImageFiles,
  thumbnailName,
  setThumbnailName,
  imageResponses,
  setImageResponses,
}) {
  const theme = useMantineTheme();

  const onDrop = (files) => {
    if ((imageResponses || []).every((imageResponse) => imageResponse.isEliminated)) {
      setThumbnailName(files[0].name);
    }
    setImageFiles(files.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })));
  };

  const imageResponsesFragment = (imageResponses || []).map((imageResponse, index) => {
    if (!imageResponse.isEliminated) {
      return (
        <Stack key={imageResponse.name} gap="xs">
          <Image
            radius="md"
            width={115}
            height={115}
            src={imageResponse.path}
            alt={imageResponse.name}
            title={imageResponse.name}
            styles={{
              image: {
                boxShadow:
                  imageResponse.name === thumbnailName
                    ? "0 0 0 3px " + theme.colors.teal[theme.colorScheme === "dark" ? 4 : 6]
                    : "none",
              },
            }}
          />
          <Center>
            <Group gap="xs">
              <ActionIcon
                color="teal"
                variant="light"
                disabled={imageResponse.name === thumbnailName}
                title="Chọn làm hình đại điện"
              >
                <Check />
              </ActionIcon>
              <ActionIcon color="red" variant="light" title="Xóa hình này">
                <X />
              </ActionIcon>
            </Group>
          </Center>
        </Stack>
      );
    }
    return null;
  });

  const imageFilesFragment = imageFiles.map((imageFile, index) => (
    <Stack key={imageFile.name} gap="xs">
      <Image
        radius="md"
        width={115}
        height={115}
        src={imageFile.preview}
        alt={imageFile.name}
        title={imageFile.name}
        onLoad={() => URL.revokeObjectURL(imageFile.preview)}
        styles={{
          image: {
            boxShadow:
              imageFile.name === thumbnailName
                ? "0 0 0 3px " + theme.colors.teal[theme.colorScheme === "dark" ? 4 : 6]
                : "none",
          },
        }}
      />
      <Center>
        <Group gap="xs">
          <ActionIcon
            color="teal"
            variant="light"
            disabled={imageFile.name === thumbnailName}
            title="Chọn làm hình đại điện"
          >
            <Check />
          </ActionIcon>
          <ActionIcon color="red" variant="light" title="Xóa hình này">
            <X />
          </ActionIcon>
        </Group>
      </Center>
    </Stack>
  ));

  useEffect(() => {
    return () => imageFiles.forEach((imageFile) => URL.revokeObjectURL(imageFile.preview));
  }, [imageFiles]);

  return (
    <>
      <Dropzone onDrop={onDrop} maxSize={5 * 1024 ** 2} accept={IMAGE_MIME_TYPE}>
        {(status) => dropzoneChildren(status, theme)}
      </Dropzone>
      {(imageResponses || []).some((imageResponse) => !imageResponse.isEliminated) && (
        <Group spacing="sm">{imageResponsesFragment}</Group>
      )}
      {imageFiles.length > 0 && (
        <>
          <Divider
            my="xs"
            variant="dashed"
            labelPosition="center"
            label={
              <>
                <CirclePlus size={12} />
                <Box ml={5}>Hình mới thêm, chưa được lưu</Box>
              </>
            }
          />
          <Group spacing="sm">{imageFilesFragment}</Group>
          <Button variant="light" color="pink" sx={{ marginTop: theme.spacing.sm }}>
            Xóa tất cả hình
          </Button>
        </>
      )}
    </>
  );
}

export default ProductImagesDropzone;
