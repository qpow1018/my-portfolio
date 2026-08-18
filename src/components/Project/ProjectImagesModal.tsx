import { Box, ButtonBase, Modal } from '@mui/material';
import theme from '@/style/theme';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectImagesModal(
  props: {
    isDesktop: boolean;
    isOpen: boolean;
    images: string[];
    onClose: () => void;
  }
) {
  const { isDesktop } = props;

  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ outline: 'none' }}>
        <Box
          sx={[
            {
              borderRadius: theme.common.borderRadius,
              background: '#fff',
              overflow: 'hidden',
              width: 'calc(100vw - 32px)',
            },
            isDesktop === true && {
              width: '900px',
            }
          ]}
        >
          <Box
            sx={[
              {
                width: '100%'
              },
              isDesktop === true && {
                padding: '16px',
              }
            ]}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              loop={true}
              slidesPerView={1}
              navigation={true}
              pagination={true}
            >
              { props.images.map((image, index) =>
                <SwiperSlide key={index}>
                  <Box
                    sx={[
                      {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: 360,
                      },
                      isDesktop === true && {
                        height: 520,
                      }
                    ]}
                  >
                    <Box
                      component={'img'}
                      src={image}
                      draggable={false}
                      sx={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </SwiperSlide>
              )}
            </Swiper>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              borderTop: `1px solid ${theme.color.border.light}`,
              background: theme.color.dark.grayF,
              padding: '12px',
            }}
          >
            <ButtonBase
              onClick={props.onClose}
              sx={[
                {
                  borderRadius: theme.common.borderRadius,
                  width: 80,
                  height: 36,
                  backgroundColor: theme.color.primary,
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 500,
                },
                isDesktop === true && {
                  fontSize: '15px',
                }
              ]}
            >
              닫기
            </ButtonBase>
          </Box>
        </Box>
      </div>
    </Modal>
  );
}
