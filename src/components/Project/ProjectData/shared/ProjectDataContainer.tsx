import { Box } from '@mui/material';
import theme from '@/style/theme';

export default function ProjectDataContainer(
  props: {
    title: string;
    description: string[];
    skills: string;
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
      <Thumbnail
      
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

function Thumbnail() {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: '240px',
        height: '160px',
        borderRadius: theme.common.borderRadius,
        backgroundColor: theme.color.dark.grayF,
      }}
    >
      이미지<br />
      모달 추가<br />
      스와이퍼
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