import { Box } from '@mui/material';
import theme from '@/style/theme';

import useWindowSize from '@/hooks/useWindowSize';

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
  const { isDesktop } = useWindowSize();

  return (
    <Box
      sx={[
        {
          padding: '0 20px',
          marginBottom: '60px',
          '&:last-of-type': {
            marginBottom: 0,
          }
        },
        isDesktop === true && {
          padding: 0,
          display: 'flex',
          marginBottom: '80px',
        }
      ]}
    >
      <ProjectThumbnail
        isDesktop={isDesktop}
        images={props.images}
      />

      <Box
        sx={[
          {
            marginTop: '16px',
          },
          isDesktop === true && {
            flex: 1,
            margin: '0 0 0 40px',
          }
        ]}
      >
        <Title
          isDesktop={isDesktop}
          title={props.title}
        />

        <Description
          isDesktop={isDesktop}
          description={props.description}
        />

        <Skills
          isDesktop={isDesktop}
          skills={props.skills}
        />

        { props.children }
      </Box>
    </Box>
  );
}

function Title(
  props: {
    isDesktop: boolean;
    title: string;
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      sx={[
        {
          fontSize: '18px',
          fontWeight: 700,
        },
        isDesktop === true && {
          fontSize: '22px'
        }
      ]}
    >
      { props.title }
    </Box>
  );
}

function Description(
  props: {
    isDesktop: boolean;
    description: string[];
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      sx={[
        {
          marginTop: '8px'
        },
        isDesktop === true && {
          marginTop: '4px'
        }
      ]}
    >
      { props.description.map((desc, index) =>
        <Box
          key={index}
          sx={[
            {
              wordBreak: 'keep-all',
              fontSize: '13px',
              color: theme.color.text.secondary,
              marginBottom: '4px',
              '&:last-of-type': {
                marginBottom: 0,
              }
            },
            isDesktop === true && {
              fontSize: '15px',
              marginBottom: '2px',
            }
          ]}
        >
          { desc }
        </Box>
      )}
    </Box>
  );
}

function Skills(
  props: {
    isDesktop: boolean;
    skills: string;
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      sx={[
        {
          fontSize: '12px',
          fontWeight: 500,
          color: theme.color.primary,
          margin: '8px 0 16px 0',
        },
        isDesktop === true && {
          fontSize: '13px',
        }
      ]}
    >
      { props.skills }
    </Box>
  );
}