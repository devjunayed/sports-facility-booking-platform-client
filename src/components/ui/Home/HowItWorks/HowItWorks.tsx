import { Steps, Button } from "antd";
import { CalendarOutlined, CreditCardOutlined, SmileOutlined } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const { Step } = Steps;

const HowItWorks = () => {
  return (
    <div
      style={{
        padding: "60px",
        backgroundColor: "#ffffff",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Title level={2} style={{ color: "#1B1F3B", marginBottom: "40px" }}>
        How It Works
      </Title>

      <Steps
        direction="vertical"
        current={0}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
        size="default"
      >
        <Step
          title={
            <Title level={4} style={{ color: "#1B1F3B" }}>
              Step 1
            </Title>
          }
          description={
            <Paragraph style={{ fontSize: "16px", color: "#595959" }}>
              Select your preferred facility and time slot.
            </Paragraph>
          }
          icon={<CalendarOutlined style={{ color: "#1B1F3B" }} />}
        />
        <Step
          title={
            <Title level={4} style={{ color: "#1B1F3B" }}>
              Step 2
            </Title>
          }
          description={
            <Paragraph style={{ fontSize: "16px", color: "#595959" }}>
              Confirm your booking by completing the payment.
            </Paragraph>
          }
          icon={<CreditCardOutlined style={{ color: "#1B1F3B" }} />}
        />
        <Step
          title={
            <Title level={4} style={{ color: "#1B1F3B" }}>
              Step 3
            </Title>
          }
          description={
            <Paragraph style={{ fontSize: "16px", color: "#595959" }}>
              Enjoy your game at the chosen venue.
            </Paragraph>
          }
          icon={<SmileOutlined style={{ color: "#1B1F3B" }} />}
        />
      </Steps>

      <Button
        type="primary"
        style={{
          marginTop: "40px",
          backgroundColor: "#1B1F3B",
          borderColor: "#1B1F3B",
          padding: "10px 40px",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        Book Now
      </Button>
    </div>
  );
};

export default HowItWorks;
