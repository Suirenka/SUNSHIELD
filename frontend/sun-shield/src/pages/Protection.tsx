import { Title3, Text, Body1, Button } from '@fluentui/react-components';
import { Stack } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';

function Protection() {
  const navigate = useNavigate();
  return (
    <>
      <Button appearance="primary" onClick={() => navigate("/")}>
        ← Back to Home
      </Button>
      <Stack tokens={{ childrenGap: 20, padding: 20 }}>
        <Title3>Sun Protection: Your Guide to Safe and Healthy Sun Exposure</Title3>
        <Body1>
          Spending time outdoors is a great way to enjoy nature and boost your mood, but it’s important to protect your skin from the sun’s harmful ultraviolet (UV) rays. Overexposure can lead to premature aging, sunburn, and even skin cancer.
        </Body1>

        <Text as="h3" weight="semibold" size={400}>
          Why Sun Protection Matters
        </Text>
        <Body1>
          UV rays can damage your skin, causing wrinkles, sunspots, and increasing the risk of skin cancer. Understanding these risks is the first step in protecting your health.
        </Body1>

        <Text as="h3" weight="semibold" size={400}>
          Effective Sun Protection Strategies
        </Text>
        <Stack tokens={{ childrenGap: 15, padding: 10 }}>
          <Text as="h4" weight="semibold" size={300}>
            1. Use Sunscreen Correctly
          </Text>
          <Body1>
            Choose a broad-spectrum sunscreen with an SPF of 30 or higher. Apply it generously 15–30 minutes before going outdoors, and reapply every two hours or immediately after swimming or sweating.
          </Body1>

          <Text as="h4" weight="semibold" size={300}>
            2. Wear Protective Clothing
          </Text>
          <Body1>
            Long-sleeved shirts, pants, wide-brimmed hats, and UV-blocking sunglasses offer an extra layer of protection for your skin and eyes.
          </Body1>

          <Text as="h4" weight="semibold" size={300}>
            3. Seek Shade and Avoid Peak Hours
          </Text>
          <Body1>
            The sun rays are strongest between 10 a.m. and 4 p.m. When possible, limit your exposure during these hours and find shade under trees, umbrellas, or other structures.
          </Body1>

          <Text as="h4" weight="semibold" size={300}>
            4. Be Sun Smart All Year Round
          </Text>
          <Body1>
            Up to 80% of UV rays can penetrate clouds, so practice sun protection every day—even on cloudy days. Reflective surfaces like water, sand, and snow can also increase UV exposure.
          </Body1>
        </Stack>
      </Stack>
    </>
  );
}

export default Protection;
