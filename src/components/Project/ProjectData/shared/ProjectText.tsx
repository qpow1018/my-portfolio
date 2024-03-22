import { Box, SxProps } from '@mui/material';
import theme from '@/style/theme';

export default function ProjectText(
  props: {
    type?: 'default' | 'dot' | 'indent';
    children?: React.ReactNode;
    sx?: SxProps;
  }
) {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          alignItems: 'flex-start',
          fontSize: '15px',
          lineHeight: '24px',
          color: theme.color.text.secondary,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    >
      { (props.type === 'dot' || props.type === 'indent') &&
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '22px',
            height: '24px',
          }}
        >
          { props.type === 'dot' &&
            <Box
              sx={{
                borderRadius: '50%',
                width: '6px',
                height: '6px',
                background: theme.color.text.primary,
              }}
            />
          }
        </Box>
      }

      { props.children }
    </Box>
  );
}