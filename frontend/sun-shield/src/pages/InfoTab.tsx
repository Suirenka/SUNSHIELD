import { Text, Table, TableBody, TableRow, TableCell } from '@fluentui/react-components';
import { Stack } from '@fluentui/react';

const InfoTab = () => {
  return (
    <Stack tokens={{ padding: '20px', childrenGap: '20px' }} style={{ maxWidth: '800px', margin: 'auto' }}>
      <Table
        style={{
          width: '100%',
          background: '#EBE89E69',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <TableBody>
          <TableRow>
            <TableCell>
              <img
                src="/UV1.png"
                alt="UV Chart 1"
                style={{ width: '100%', maxWidth: '100%' }}
              />
            </TableCell>
            <TableCell>
              <img
                src="/UV2.png"
                alt="UV Chart 2"
                style={{ width: '100%', maxWidth: '100%' }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Text as="p" size={400}>
                UV levels peak in summer (Dec–Feb) and drop in winter (Jun–Aug) – a clear seasonal pattern.
                UV Index has slightly increased in recent years (2020–2023), shown by the higher red lines.
                Melbourne has higher summer UV levels than Sydney, possibly due to atmospheric conditions.
                Winter UV levels stay stable, but some small variations exist across years.
                Recent years (2020–2023) show more consistent trends, while older years had more variation.
              </Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img
                src="/Incidence1.png"
                alt="Incidence Chart 1"
                style={{ width: '100%', maxWidth: '100%' }}
              />
            </TableCell>
            <TableCell>
              <img
                src="/Incidence2.png"
                alt="Incidence Chart 2"
                style={{ width: '100%', maxWidth: '100%' }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Text as="p" size={400}>
                The data from the above chart uses a provided incidence and mortality territories dataset and only selects
                skin-related cancers (Melanoma and Non-melanoma). Findings from incidence cases:
                From 1982 to 2020, the number of skin-cancer cases increases gradually each year – from only 7.5k to around
                30k cases. Three dominant territories—NSW, Queensland, and VIC—account for 80–85% of all cases.
              </Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img
                src="/Mortality1.png"
                alt="Mortality Chart 1"
                style={{ width: '100%', maxWidth: '100%' }}
              />
            </TableCell>
            <TableCell>
              <img
                src="/Mortality2.png"
                alt="Mortality Chart 2"
                style={{ width: '100%', maxWidth: '100%' }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Text as="p" size={400}>
                Findings from mortality cases:
                The dataset is only valid from 2007 to 2020, during which the number of skin cancer mortality cases increases
                gradually from 3000 in 2007 to 3500 in 2013, before falling to 3100 in 2020—contradicting the rising incidence
                of skin cancer cases. Such a decrease results from a 15–20% drop in the three main territories (NSW, Queensland,
                and VIC).
              </Text>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
  );
};

export default InfoTab;
