import { Box, SxProps } from '@mui/material';
import theme from '@/style/theme';

import useWindowSize from '@/hooks/useWindowSize';

export default function ProjectText(
  props: {
    type?: 'default' | 'dot' | 'indent';
    children?: React.ReactNode;
    sx?: SxProps;
  }
) {
  const { isDesktop } = useWindowSize();

  return (
    <Box
      sx={[
        {
          wordBreak: 'keep-all',
          display: 'flex',
          alignItems: 'flex-start',
          fontSize: '13px',
          lineHeight: '20px',
          color: theme.color.text.secondary,
          marginBottom: '4px',
        },
        isDesktop === true && {
          fontSize: '15px',
          lineHeight: '24px',
          marginBottom: '0',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    >
      { (props.type === 'dot' || props.type === 'indent') &&
        <Box
          sx={[
            {
              display: 'flex',
              alignItems: 'center',
              width: '16px',
              height: '20px',
            },
            isDesktop === true && {
              width: '22px',
              height: '24px',
            }
          ]}
        >
          { props.type === 'dot' &&
            <Box
              sx={[
                {
                  borderRadius: '50%',
                  width: '4px',
                  height: '4px',
                  background: theme.color.text.primary,
                },
                isDesktop === true && {
                  width: '6px',
                  height: '6px',
                }
              ]}
            />
          }
        </Box>
      }

      { props.children }
    </Box>
  );
}