import { Box } from '@mui/material';

import WeddingbookService from './WeddingbookService';
import LoamService from './LoamService';

export default function CurrentProjectsSection(
  props: {
    isDesktop: boolean;
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      component={'section'}
      sx={[
        {
          paddingBottom: '60px',
        },
        isDesktop === true && {
          paddingBottom: '80px',
        }
      ]}
    >
      <WeddingbookService />
      <LoamService />
    </Box>
  );
}
