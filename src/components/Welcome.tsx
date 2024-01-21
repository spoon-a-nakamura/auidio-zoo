import styled from '@emotion/styled';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { chunk } from 'lodash';
import { useCallback, useState } from 'react';
import { VFC } from 'react';
import { animals } from '../hooks/animal';
import Button from './Button';

const Root = styled(motion.div)`
  background: rgba(146, 195, 198, 0.7);
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 2.6rem;
  letter-spacing: 0.06em;
  font-weight: bold;
  padding: 2rem;
`;

const Content = styled(motion.div)`
  background: #fff;
  border-radius: 2rem;
  margin: auto;
  padding: 3rem 2rem 2rem;
  position: relative;
  @media (orientation: landscape) {
    padding: 4rem 2.9rem 2.9rem;
  }
`;

const ContentBody = styled.div`
  margin: 1.2rem 0;
  @media (orientation: landscape) {
    margin: 2rem 0;
  }
`;

const Message = styled.p`
  text-align: center;
  font-weight: bold;
  line-height: ${36 / 26};
  letter-spacing: 0.06em;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  @media (orientation: landscape) {
    font-size: 2.6rem;
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  @media (orientation: landscape) {
    gap: 0.9rem;
  }
`;
const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 12.4rem;
  aspect-ratio: 1;
`;

const Strap = styled.div`
  position: absolute;
  z-index: 1;
  top: 1rem;
  @media (orientation: landscape) {
    top: 1.7rem;
  }
  &::before {
    content: '';
    display: block;
    width: 0.8rem;
    height: 50vh;
    background: #dbdbdb;
    position: absolute;
    bottom: 1.2rem;
    left: calc(50% - 0.4rem);
  }
  &::after {
    content: '';
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    border: 0.4rem solid #dbdbdb;
    border-radius: 50%;
    background: #f5f5f5;
    position: relative;
    z-index: 1;
  }
`;

const LeftStrap = styled(Strap)`
  left: 1.5rem;
  @media (orientation: landscape) {
    left: 3rem;
  }
`;
const RightStrap = styled(Strap)`
  right: 1.5rem;
  @media (orientation: landscape) {
    right: 3rem;
  }
`;

const [topImages, bottomImages] = chunk(
  animals.map(({ thumbnail }) => thumbnail),
  3,
);

const wrapperVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      delay: 0.25,
    },
  },
};

const contentVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: '-20rem',
    opacity: 0.5,
    transition: {
      duration: 0.5,
      ease: 'backIn',
    },
  },
};

const Welcome: VFC = () => {
  const [accepted, setAccepted] = useState(false);
  const accept = useCallback(() => {
    setAccepted(true);
  }, []);

  return (
    <AnimatePresence>
      {!accepted && (
        <Root
          variants={wrapperVariants}
          initial="visible"
          animate="visible"
          exit="hidden"
        >
          <Content
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <LeftStrap />
            <RightStrap />
            <Images>
              {topImages?.map((src, i) => (
                <Image key={i} src={src} alt="" />
              ))}
            </Images>
            <ContentBody>
              <Message>
                動物の名前を
                <br />
                声に出して呼んでね!
              </Message>
              <Button onClick={accept}>わかった!</Button>
            </ContentBody>
            <Images>
              {bottomImages?.map((src, i) => (
                <Image key={i} src={src} alt="" />
              ))}
            </Images>
          </Content>
        </Root>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
