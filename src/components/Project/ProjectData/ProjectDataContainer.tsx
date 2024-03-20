import { Box } from '@mui/material';
import theme from '@/style/theme';

export default function ProjectDataContainer(
  props: {
    title: string;


    children: React.ReactNode;
  }
) {
  return (
    <Box
      sx={{
        boxShadow: '0 0 1px red',
        display: 'flex',
      }}
    >
      <Thumbnail
      
      />

      <Box
        sx={{
          flex: 1,
          marginLeft: '30px'
        }}
      >
        <Box>
          { props.title }
        </Box>
        <Box>
          프로젝트 소개, 설명
        </Box>
        <Box>
          사용된 스킬
        </Box>
        <Box>
          참여 개발 내용
        </Box>
        <Box>
          링크 있으면 링크
        </Box>
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