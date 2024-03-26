import { Box } from '@mui/material';
import theme from '@/style/theme';

import useWindowSize from '@/hooks/useWindowSize';

import BackdropImage from './BackdropImage';

import {
  MailOutline as MailOutlineIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';

export default function AboutMe() {
  const { isDesktop } = useWindowSize();

  return (
    <Box
      sx={[
        {
          background: theme.color.dark.grayF,
          position: 'relative',
        },
        isDesktop === true && {
          height: 800,
        }
      ]}
    >
      <BackdropImage
        isDesktop={isDesktop}
      />

      <Box
        sx={[
          {
            position: 'relative',
            zIndex: 1,
          },
          isDesktop && {
            width: theme.size.containerWidth,
            height: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBottom: '60px',
          }
        ]}
      >
        <Box
          sx={[
            {
              height: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 20px',
            },
            isDesktop === true && {
              display: 'block',
              height: 'auto',
              padding: 0,
            }
          ]}
        >
          <Title isDesktop={isDesktop}>
            안녕하세요.<br />
            최원진의 포트폴리오 입니다.
          </Title>

          <Introduction isDesktop={isDesktop}>
            사용자에겐 깔끔한 인터페이스와 편리한 사용성을,<br />
            개발자에겐 이해하기 쉽고 정돈된 코드 작성을 위해 노력합니다.
          </Introduction>
        </Box>

        <Contact
          isDesktop={isDesktop}
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
          isDesktop={isDesktop}
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
    isDesktop: boolean;
    children?: React.ReactNode;
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      sx={[
        {
          color: '#fff',
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 700,
          marginBottom: '16px'
        },
        isDesktop === true && {
          color: '#000',
          fontSize: '32px',
          lineHeight: '40px',
          marginBottom: '28px'
        }
      ]}
    >
      { props.children }
    </Box>
  );
}

function Introduction(
  props: {
    isDesktop: boolean;
    children?: React.ReactNode;
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      sx={[
        {
          wordBreak: 'keep-all',
          fontSize: '14px',
          color: '#f1f1f1',
        },
        isDesktop === true && {
          fontSize: '16px',
          color: theme.color.text.primary,
        }
      ]}
    >
      { props.children }
    </Box>
  );
}

function Contact(
  props: {
    isDesktop: boolean;
    contactData: {
      icon: React.ReactNode;
      text: string;
      isLink: boolean;
    }[];
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      sx={[
        {
          marginTop: '24px',
          padding: '0 20px',
        },
        isDesktop === true && {
          marginTop: '40px',
          padding: 0,
        }
      ]}
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
              marginRight: '8px',
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
    isDesktop: boolean;
    skills: string[];
  }
) {
  const { isDesktop } = props;

  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexWrap: 'wrap',
          borderTop: `2px solid ${theme.color.primary}`,
          width: 'calc(100% - 40px)',
          margin: '36px 20px 0 20px',
          padding: '12px 0 20px 0',
        },
        isDesktop === true && {
          width: 420,
          margin: '80px 0 0 0',
          padding: '12px 0 0 0',
        }
      ]}
    >
      { props.skills.map((skill, index) =>
        <Box
          key={index}
          sx={[
            {
              display: 'flex',
              justifyContent: 'center',
              padding: '4px 10px 5px 10px',
              minWidth: 54,
              backgroundColor: theme.color.primary,
              color: '#fff',
              borderRadius: '30px',
              fontSize: '12px',
              margin: '0 4px 4px 0',
            },
            isDesktop === true && {
              margin: '0 8px 8px 0',
            }
          ]}
        >
          { skill }
        </Box>
      )}
    </Box>
  );
}