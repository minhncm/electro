import {
  Button,
  Group,
  Image,
  Rating,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";
import { zodResolver } from "mantine-form-zod-resolver";
import z from "zod";
import { useCreateReviewApi } from "~/hooks/client/use-review-api";
import useAuthStore from "~/stores/use-auth-store";

function ReviewProductModal({ orderItem = {} }) {
  const modals = useModals();
  const { user } = useAuthStore();
  const form = useForm({
    initialValues: {
      rating: 5,
      review: "",
    },
    validate: zodResolver(
      z.object({
        rating: z.number().min(1).max(5),
        review: z.string().min(3, "Vui lòng nhập ít nhất 3 ký tự"),
      }),
    ),
  });

  const createReviewApi = useCreateReviewApi();

  const handleFormSubmit = form.onSubmit((values) => {
    if (user) {
      const request = {
        userId: user.id,
        productId: orderItem.variant.product.id,
        ratingScore: values.rating,
        content: values.review,
        status: 1,
      };

      createReviewApi.mutate(request);
      modals.closeAll();
    }
  });

  const ratingNameMap = {
    1: "Rất không hài lòng",
    2: "Không hài lòng",
    3: "Bình thường",
    4: "Hài lòng",
    5: "Cực kỳ hài lòng",
  };

  return (
    <Stack>
      <Group gap="xs">
        <Image
          radius="md"
          w={40}
          h={40}
          src={orderItem.variant.product.thumbnail || undefined}
          alt={orderItem.variant.product.name}
        />
        <Text size="sm">{orderItem.variant.product.name}</Text>
      </Group>

      <Stack gap="xs" align="center" mb="md">
        <Text size="lg" fw={700}>
          Vui lòng đánh giá
        </Text>
        <Rating maw={180} {...form.getInputProps("rating")} isRequired />
        <Text size="sm" c="dimmed">
          {ratingNameMap[form.values.rating]}
        </Text>
      </Stack>

      <Textarea
        required
        placeholder="Hãy chia sẻ cảm nhận, đánh giá của bạn về sản phẩm này nhé."
        autosize
        minRows={4}
        radius="md"
        {...form.getInputProps("review")}
      />

      <Group justify="right">
        <Button variant="default" radius="md" onClick={modals.closeAll}>
          Đóng
        </Button>
        <Button type="submit" radius="md" onClick={handleFormSubmit}>
          Gửi đánh giá
        </Button>
      </Group>
    </Stack>
  );
}

export default ReviewProductModal;
