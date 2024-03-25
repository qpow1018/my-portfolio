import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectThumbnail from './ProjectThumbnail';

export default function ProjectDataContainer(
  props: {
    title: string;
    description: string[];
    skills: string;
    images: string[],
    children?: React.ReactNode;
  }
) {
  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: '80px',
        '&:last-of-type': {
          marginBottom: 0,
        }
      }}
    >
      <ProjectThumbnail
        images={props.images}
      />

      <Box
        sx={{
          flex: 1,
          marginLeft: '40px'
        }}
      >
        <Title
          title={props.title}
        />

        <Description
          description={props.description}
        />

        <Skills
          skills={props.skills}
        />

        { props.children }
      </Box>
    </Box>
  );
}

function Title(
  props: {
    title: string;
  }
) {
  return (
    <Box
      sx={{
        fontSize: '22px',
        fontWeight: 700,
      }}
    >
      { props.title }
    </Box>
  );
}

function Description(
  props: {
    description: string[];
  }
) {
  return (
    <Box
      sx={{
        marginTop: '4px'
      }}
    >
      { props.description.map((desc, index) =>
        <Box
          key={index}
          sx={{
            fontSize: '15px',
            color: theme.color.text.secondary,
            marginBottom: '2px',
            '&:last-of-type': {
              marginBottom: 0,
            }
          }}
        >
          { desc }
        </Box>
      )}
    </Box>
  );
}

function Skills(
  props: {
    skills: string;
  }
) {
  return (
    <Box
      sx={{
        fontSize: '13px',
        fontWeight: 500,
        color: theme.color.primary,
        margin: '8px 0 16px 0',
      }}
    >
      { props.skills }
    </Box>
  );
}