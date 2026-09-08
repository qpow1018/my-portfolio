import { useState } from 'react';
import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectImagesModal from '../ProjectImagesModal';

export default function EarlierProjectThumbnail(
  props: {
    isDesktop: boolean;
    images: string[];
  }
) {
  const { isDesktop } = props;
  const [isProjectImagesModalOpen, setIsProjectImagesModalOpen] = useState<boolean>(false);

  return (
    <>
      <Box
        onClick={() => setIsProjectImagesModalOpen(true)}
        sx={[
          {
            flexShrink: 0,
            width: '100%',
            height: '200px',
            borderRadius: theme.common.borderRadius,
            backgroundColor: theme.color.dark.grayF,
            cursor: 'pointer',
            overflow: 'hidden',
            border: `1px solid ${theme.color.border.default}`
          },
          isDesktop === true && {
            width: '260px',
            height: '160px',
          }
        ]}
      >
        { props.images.length > 0 &&
          <Box
            component={'img'}
            src={props.images[0]}
            sx={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        }
      </Box>

      { isProjectImagesModalOpen === true &&
        <ProjectImagesModal
          isOpen={isProjectImagesModalOpen}
          images={props.images.map((src, index) => ({
            src,
            alt: `프로젝트 서비스 화면 ${index + 1}`,
          }))}
          onClose={() => setIsProjectImagesModalOpen(false)}
        />
      }
    </>
  );
}
