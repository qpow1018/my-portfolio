import { Box } from '@mui/material';
import theme from '@/style/theme';

import useWindowSize from '@/hooks/useWindowSize';

import DiscoveryMall from './ProjectData/DiscoveryMall';
import FlaboCommunity from './ProjectData/FlaboCommunity';
import MediaFestival from './ProjectData/MediaFestival';
import FlaboAdPlatform from './ProjectData/FlaboAdPlatform';

export default function Project() {
  const { isDesktop } = useWindowSize();

  return (
    <Box
      sx={[
        {
          padding: '40px 0 60px 0',
        },
        isDesktop === true && {
          padding: '60px 0 100px 0',
        }
      ]}
    >
      <Box
        sx={[
          isDesktop === true && {
            margin: '0 auto',
            width: theme.size.containerWidth,
          }
        ]}
      >
        <SectionTitle
          isDesktop={isDesktop}
          title={'My Project'}
        />

        <DiscoveryMall />
        <FlaboCommunity />
        <MediaFestival />
        <FlaboAdPlatform />
      </Box>
    </Box>
  );
}

function SectionTitle(
  props: {
    isDesktop: boolean;
    title: string;
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px',
      }}
    >
      <Box
        sx={[
          {
            position: 'relative',
            fontSize: '22px',
            fontWeight: 700,
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 'calc(50% + 2px)',
              width: '40px',
              height: '2px',
              backgroundColor: theme.color.text.primary,
            },
            '&::before': {
              left: '-48px',
            },
            '&::after': {
              right: '-48px',
            },
          },
          isDesktop === true && {
            fontSize: '32px',
            '&::before, &::after': {
              width: '80px',
            },
            '&::before': {
              left: '-92px',
            },
            '&::after': {
              right: '-92px',
            },
          }
        ]}
      >
        { props.title }
      </Box>
    </Box>
  );
}