import React, { useState } from 'react';
import { Box, Modal, ButtonBase } from '@mui/material';
import theme from '@/style/theme';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectThumbnail(
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
        <ModalContainer
          isDesktop={isDesktop}
          isOpen={isProjectImagesModalOpen}
          onClose={() => setIsProjectImagesModalOpen(false)}
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
              onClick={() => setIsProjectImagesModalOpen(false)}
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
        </ModalContainer>
      }
    </>
  );
}

function ModalContainer(
  props: {
    isDesktop: boolean;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
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
          { props.children }
        </Box>
      </div>
    </Modal>
  );
}