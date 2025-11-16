import { Stack, Stepper, Title } from "@mantine/core";
import { MailOpened, ShieldCheck, UserCheck } from "tabler-icons-react";
import Container from "~/components/Container/Container";
import ClientSignupStepOne from "./ClientSignupStepOne";
import ClientSignupStepTwo from "./ClientSignupStepTwo";
import ClientSignupStepThree from "./ClientSignupStepThree";
import { useState } from "react";

function ClientSignup() {
  const userId = false; // TODO: hoàn thành

  const currentStep = userId ? 1 : 0; // Nếu có userId thì nhảy sang bước 2

  const [active, setActive] = useState(currentStep);

  const nextStep = () => setActive((current) => (current < 1 ? current + 1 : current === 1 ? 3 : current));

  return (
    <main>
      <Container>
        <Stack align="center" gap={50}>
          <Title order={2}>Đăng ký tài khoản</Title>

          <Stepper
            active={active}
            breakpoint="xs"
            styles={{ root: { width: "100%", maxWidth: 800 }, content: { paddingTop: 50 } }}
          >
            <Stepper.Step icon={<UserCheck size={18} />} label="Bước 1" description="Tạo tài khoản">
              <ClientSignupStepOne nextStep={nextStep} />
            </Stepper.Step>
            <Stepper.Step
              icon={<MailOpened size={18} />}
              label="Bước 2"
              description="Xác nhận email"
              allowStepSelect={false}
            >
              <ClientSignupStepTwo nextStep={nextStep} userId={Number(userId) || null} />
            </Stepper.Step>
            <Stepper.Step
              icon={<ShieldCheck size={18} />}
              label="Bước 3"
              description="Đăng ký thành công"
              allowStepSelect={false}
            />
            <Stepper.Completed>
              <ClientSignupStepThree />
            </Stepper.Completed>
          </Stepper>
        </Stack>
      </Container>
    </main>
  );
}

export default ClientSignup;
