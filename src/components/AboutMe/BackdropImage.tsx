import { Box } from '@mui/material';
import theme from '@/style/theme';

import MainBannerImage from '@/images/main_banner_1.jpg';

export default function BackdropImage(
  props: {
    isDesktop: boolean;
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      sx={[
        {
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '260px',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }
        },
        isDesktop === true && {
          width: '50%',
          height: '100%',
          '&::after': {
            display: 'none'
          }
        }
      ]}
    >
      <Box
        sx={[
          {
            display: 'none',
          },
          isDesktop === true && {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '160px',
            height: '100%',
          }
        ]}
      >
        <Box
          sx={{
            width: 0,
            height: 0,
            borderTop: `800px solid ${theme.color.dark.grayF}`,
            borderRight: '160px solid transparent'
          }}
        />
      </Box>

      <Box
        component={'img'}
        src={MainBannerImage}
        draggable={false}
        sx={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}