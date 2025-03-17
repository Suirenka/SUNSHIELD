import { Text } from '@fluentui/react-components';
import { Stack } from '@fluentui/react';

const Contact = () => {
  return (
    <Stack tokens={{ padding: '20px', childrenGap: '20px' }} style={{ maxWidth: '800px', margin: 'auto' }}>
      <Text as="h3" weight="semibold" size={500}>
        Contact Us
      </Text>
      <Text as="p" size={400}>
        If you have any questions or concerns regarding these terms, please contact us at:
        <br />
        📧 Email: support@sunshield.com
        <br />
        📍 Address: 123 SunShield Avenue, Melbourne, Australia
      </Text>
    </Stack>
  );
};

export default Contact;
