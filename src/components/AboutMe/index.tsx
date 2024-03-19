import { Box } from '@mui/material';
import theme from '@/style/theme';

import BackdropImage from './BackdropImage';

import {
  MailOutline as MailOutlineIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';

export default function AboutMe() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 800,
        background: theme.color.dark.grayF,
      }}
    >
      <BackdropImage />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          margin: '0 auto',
          width: theme.size.containerWidth,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: '60px',
        }}
      >
        <Title>
          안녕하세요.<br />
          최원진의 포트폴리오 입니다.
        </Title>

        <Introduction>
          사용자에겐 깔끔한 인터페이스와 편리한 사용성을,<br />
          개발자에겐 이해하기 쉽고 정돈된 코드 작성을 위해 노력합니다.
        </Introduction>

        <Contact
          contactData={[
            {
              icon: <MailOutlineIcon />,
              text: 'qpow1018@gmail.com',
              isLink: false,
            },
            {
              icon: <GitHubIcon />,
              text: 'https://github.com/qpow1018',
              isLink: true,
            },
          ]}
        />

        <Skills
          skills={[
            'React',
            'JavaScript',
            'TypeScript',
            'HTML',
            'CSS',
          ]}
        />
      </Box>
    </Box>
  );
}

function Title(
  props: {
    children?: React.ReactNode;
  }
) {
  return (
    <Box
      sx={{
        color: '#000',
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 700,
        marginBottom: '28px'
      }}
    >
      { props.children }
    </Box>
  );
}

function Introduction(
  props: {
    children?: React.ReactNode;
  }
) {
  return (
    <Box
      sx={{
        fontSize: '16px',
        // color: theme.color.text.secondary,
      }}
    >
      { props.children }
    </Box>
  );
}

function Contact(
  props: {
    contactData: {
      icon: React.ReactNode;
      text: string;
      isLink: boolean;
    }[];
  }
) {
  return (
    <Box
      sx={{
        marginTop: '40px'
      }}
    >
      { props.contactData.map((data, index) =>
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '12px',
              '& .MuiSvgIcon-root': {
                fontSize: '20px',
                color: theme.color.text.secondary,
              }
            }}
          >
            { data.icon }
          </Box>

          <Box
            sx={{
              paddingBottom: '1px',
              fontSize: '14px',
            }}
          >
            { data.isLink === true ? (
              <Box
                component={'a'}
                href={data.text}
                target='blank'
                sx={{
                  color: theme.color.primary
                }}
              >
                { data.text }
              </Box>
            ) : (
              <>{ data.text }</>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

function Skills(
  props: {
    skills: string[];
  }
) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: 420,
        borderTop: `2px solid ${theme.color.primary}`,
        marginTop: '80px',
        paddingTop: '8px'
      }}
    >
      { props.skills.map((skill, index) =>
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '4px 10px 5px 10px',
            minWidth: 54,
            backgroundColor: theme.color.primary,
            color: '#fff',
            borderRadius: '30px',
            fontSize: '12px',
            margin: '0 8px 8px 0',
          }}
        >
          { skill }
        </Box>
      )}
    </Box>
  );
}