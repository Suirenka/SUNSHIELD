import { Text } from "@fluentui/react-components";

const TermsAndCondition = () => {
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
      <Text as="h1" weight="semibold" size={600}>
        Terms and Conditions
      </Text>
      <Text as="p" size={400}>
        Last Updated: March 2025
      </Text>

      <Text as="h2" weight="semibold" size={500}>
        1. Introduction
      </Text>
      <Text as="p" size={400}>
        Welcome to SunShield. By accessing or using our services, you agree to
        be bound by the following Terms and Conditions.
      </Text>

      <Text as="h2" weight="semibold" size={500}>
        2. Use of Services
      </Text>
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        <li>
          <Text as="p" size={400}>
            You may use SunShield for personal, non-commercial purposes.
          </Text>
        </li>
        <li>
          <Text as="p" size={400}>
            Misuse, modification, or disruption of the service is strictly
            prohibited.
          </Text>
        </li>
        <li>
          <Text as="p" size={400}>
            SunShield provides general sun protection advice, but it should not
            be considered as medical advice.
          </Text>
        </li>
      </ul>

      <Text as="h2" weight="semibold" size={500}>
        3. Limitation of Liability
      </Text>
      <Text as="p" size={400}>
        While we strive to provide accurate UV index data and recommendations,
        SunShield is not responsible for:
      </Text>
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        <li>
          <Text as="p" size={400}>
            Any health-related outcomes resulting from sun exposure.
          </Text>
        </li>
        <li>
          <Text as="p" size={400}>
            Inaccuracies in UV data provided by third-party sources.
          </Text>
        </li>
        <li>
          <Text as="p" size={400}>
            Service interruptions or technical errors.
          </Text>
        </li>
      </ul>

      <Text as="h2" weight="semibold" size={500}>
        4. Privacy and Data Collection
      </Text>
      <Text as="p" size={400}>
        Your privacy is important to us. By using our services, you agree to the
        collection and usage of data as outlined in our Privacy Policy.
      </Text>

      <Text as="h2" weight="semibold" size={500}>
        5. Changes to Terms
      </Text>
      <Text as="p" size={400}>
        We reserve the right to update these Terms and Conditions at any time.
        Continued use of our services after updates constitutes acceptance of
        the changes.
      </Text>
    </div>
  );
};

export default TermsAndCondition;
