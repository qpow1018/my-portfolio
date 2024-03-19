import { Box } from '@mui/material';
import theme from '@/style/theme';

export default function Project() {
  return (
    <Box
      sx={{
        padding: '60px 0 100px 0',
      }}
    >
      <Box
        sx={{
          margin: '0 auto',
          width: theme.size.containerWidth,
        }}
      >
        <SectionTitle
          title={'My Project'}
        />

        프로젝트 리스트
        - 이미지 모달
        - 제목
        - 소개
        - 개발 내용
        - 스킬
        - 링크
      </Box>

    </Box>
  );
}

function SectionTitle(
  props: {
    title: string;
  }
) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          fontSize: '32px',
          fontWeight: 700,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 'calc(50% + 2px)',
            width: '80px',
            height: '2px',
            backgroundColor: theme.color.text.primary,
          },
          '&::before': {
            left: '-92px',
          },
          '&::after': {
            right: '-92px',
          },
        }}
      >
        { props.title }
      </Box>
    </Box>
  );
}