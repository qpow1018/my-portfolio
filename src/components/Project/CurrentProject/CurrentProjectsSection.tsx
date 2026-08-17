import { Box } from '@mui/material';

import WeddingbookService from './WeddingbookService';

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
      {/* 다음 포트폴리오 버전에서 다시 노출 */}
      {/* <LoamService /> */}
      <WeddingbookService />
    </Box>
  );
}
