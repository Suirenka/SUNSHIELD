import { Text } from '@fluentui/react-components';
import { Stack } from '@fluentui/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Stack
      as="footer"
      tokens={{ padding: '1rem', childrenGap: '0.5rem' }}
      style={{
        background: '#3C361F80',
        marginTop: 'auto',
        bottom: 0,
        width: '100%',
        height: 'auto',
      }}
      horizontalAlign="center"
    >
      <Stack horizontal tokens={{ childrenGap: '1rem' }} horizontalAlign="center">
        <Link to="/contact">Contact Us</Link>
        <Link to="/terms-and-condition">Terms and Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </Stack>

      <Text as="p" size={200}>
        &copy; {new Date().getFullYear()} SUNSHIELD
      </Text>
    </Stack>
  );
};

export default Footer;
