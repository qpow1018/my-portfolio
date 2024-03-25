import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '@/style/theme';

export default function useWindowSize() {
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoint.md}px)`);
  return {
    isDesktop: !isMobile,
    isMobile,
  };
}