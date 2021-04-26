import { ArrowRightOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import Container from 'common/components/Container';
import { useKeenSlider } from 'keen-slider/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  Caption,
  CarouselStyle,
  Fader,
  FaderSlide,
  Heading,
  Image,
  LeftButton,
  NavigationWrapper,
  ProgressContainer,
  ProgressBar,
  RightButton,
  SlideContent,
  Slides,
  StyledButton,
  Tag,
  StyledProgress,
} from './styled';
import { CarouselProps, ChildrenProps } from './types';
import COLORS from 'common/constants/colors';

const Carousel: React.FC<CarouselProps> = (props) => {
  const isDefault = props.variant === 'Default' ? true : false;
  const timer = useRef<number>();
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setProgress(0);
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    duration: 2000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });
  const [opacities, setOpacities] = useState<number[]>([]);
  const [faderRef, fader] = useKeenSlider<HTMLDivElement>({
    slides: props.item.length,
    loop: true,
    duration: 2000,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    if (slideRef.current != null) {
      slideRef.current.addEventListener('mouseover', () => {
        setPause(true);
      });
      slideRef.current.addEventListener('mouseout', () => {
        setPause(false);
      });
    }
  }, [slideRef]);

  useEffect(() => {
    if (faderRef.current != null) {
      faderRef.current.addEventListener('mouseover', () => {
        setPause(true);
      });
      faderRef.current.addEventListener('mouseout', () => {
        setPause(false);
      });
    }
  }, [faderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
        fader.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  const [pagination, setPagination] = useState(0);
  useEffect(() => {
    if (pagination === 1) {
      slider.next();
      fader.next();
    }
    if (pagination === -1) {
      slider.prev();
      fader.prev();
    }
  });

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => setProgress(progress + 2.5);
    if (progress < 100) {
      setTimeout(updateProgress, 100);
    }
  }, [progress]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <NavigationWrapper>
      <CarouselStyle />
      <Container>
        <Slides defaultStyle={isDefault} customStyle={props.variant}>
          <Fader
            style={isDefault ? { background: '#f4f5f6' } : { background: 'white' }}
            ref={faderRef}>
            {slider && (
              <ProgressContainer defaultStyle={isDefault}>
                {[...Array(slider.details().size).keys()].map((i) => {
                  return (
                    <>
                      {isDefault ? (
                        <ProgressBar
                          className={currentSlide === i ? 'active' : ''}
                          key={i}
                          onClick={() => {
                            slider.moveToSlideRelative(i);
                            fader.moveToSlideRelative(i);
                          }}
                        />
                      ) : (
                        <StyledProgress
                          key={i}
                          percent={currentSlide != i ? 100 : progress}
                          showInfo={false}
                          strokeColor={COLORS.PRIMARY_COLOR}
                          strokeWidth={2}
                          strokeLinecap={'square'}
                          className={currentSlide >= i ? 'active' : ''}
                        />
                      )}
                    </>
                  );
                })}
              </ProgressContainer>
            )}
            {props.item
              ? props.item.map(({ id, heading, caption, tag, link }: ChildrenProps) => {
                  return (
                    <>
                      <FaderSlide key={id} style={{ opacity: opacities[id] }}>
                        <SlideContent defaultStyle={isDefault}>
                          {tag ? <Tag>#{tag}</Tag> : null}
                          {heading ? (
                            <Heading defaultStyle={isDefault}>{heading}</Heading>
                          ) : null}
                          {caption ? (
                            props.fullText ? (
                              <Caption defaultStyle={isDefault}>{caption}</Caption>
                            ) : caption.length > 100 ? (
                              <Caption defaultStyle={isDefault}>
                                {caption.slice(0, 100)}...
                              </Caption>
                            ) : (
                              <Caption defaultStyle={isDefault}>
                                {caption.slice(0, 100)}
                              </Caption>
                            )
                          ) : null}
                          {link && !props.fullText ? (
                            isDefault ? (
                              <StyledButton as="a" href={link}>
                                อ่านต่อเพิ่มเติม
                                <ArrowRightOutlined style={{ marginLeft: '15px' }} />
                              </StyledButton>
                            ) : (
                              <StyledButton onClick={showModal}>
                                อ่านต่อเพิ่มเติม
                                <ArrowRightOutlined style={{ marginLeft: '15px' }} />
                              </StyledButton>
                            )
                          ) : null}
                        </SlideContent>
                      </FaderSlide>
                    </>
                  );
                })
              : null}
          </Fader>
          <div className="keen-slider" ref={slideRef}>
            {props.item
              ? props.item.map(({ id, picture }: ChildrenProps) => {
                  return (
                    <div className="keen-slider__slide" key={id}>
                      <Image src={picture} alt="" />
                    </div>
                  );
                })
              : null}
          </div>
          {props.arrows
            ? slider && (
                <>
                  <LeftButton onClick={() => setPagination(-1)}>
                    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.48521 2.51472L9.54587 3.57538L2.86902 10.2522L20.4654 10.2522L20.4654 11.7478L2.86902 11.7478L9.54587 18.4246L8.48521 19.4853L-6.83069e-05 11L8.48521 2.51472Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </LeftButton>
                  <RightButton onClick={() => setPagination(1)}>
                    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5148 19.4853L12.4541 18.4246L19.131 11.7478L1.53463 11.7478L1.53463 10.2522L19.131 10.2522L12.4541 3.57538L13.5148 2.51472L22.0001 11L13.5148 19.4853Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </RightButton>
                </>
              )
            : null}
        </Slides>
      </Container>
      <Modal
        centered
        keyboard
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={1250}
        bodyStyle={{ padding: '0' }}>
        <Carousel item={props.item} variant="PopUp" fullText={true} arrows={true} />
      </Modal>
    </NavigationWrapper>
  );
};

export default Carousel;
