import { Text } from "@fluentui/react-components";

const Contact = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Text as="h3" weight="semibold" size={500}>
        Contact Us
      </Text>
      <Text as="p" size={400}>
        If you have any questions or concerns regarding these terms, please
        contact us at:
        <br />
        📧 Email: support@sunshield.com
        <br />
        📍 Address: 123 SunShield Avenue, Melbourne, Australia
      </Text>
    </div>
  );
};

export default Contact;
