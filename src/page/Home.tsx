import { Box } from '@mui/material';

import AboutMe from '@/components/AboutMe';
import Project from '@/components/Project';

export default function Home() {
  return (
    <Box>
      <AboutMe />
      <Project />
    </Box>
  );
}