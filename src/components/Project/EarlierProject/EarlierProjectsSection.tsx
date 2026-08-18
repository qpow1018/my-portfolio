import { Box } from '@mui/material';
import theme from '@/style/theme';

import DiscoveryMall from './DiscoveryMall';
import FlaboCommunity from './FlaboCommunity';
import MediaFestival from './MediaFestival';
import FlaboAdPlatform from './FlaboAdPlatform';

export default function EarlierProjectsSection(
  props: {
    isDesktop: boolean;
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      component={'section'}
      aria-labelledby='earlier-projects-title'
      sx={{
        backgroundColor: theme.color.dark.grayF,
        padding: '40px 0 60px',
      }}
    >
      <Box
        sx={[
          isDesktop === true && {
            margin: '0 auto',
            width: theme.size.containerWidth,
          }
        ]}
      >
        <Box
          component={'h3'}
          id='earlier-projects-title'
          sx={[
            {
              margin: '0 20px 24px',
              paddingBottom: '12px',
              borderBottom: `1px solid ${theme.color.border.default}`,
              fontSize: '18px',
              fontWeight: 700,
            },
            isDesktop === true && {
              margin: '0 0 32px',
              fontSize: '22px',
            }
          ]}
        >
          Earlier Projects
        </Box>

        <DiscoveryMall />
        <FlaboCommunity />
        <MediaFestival />
        <FlaboAdPlatform />
      </Box>
    </Box>
  );
}
