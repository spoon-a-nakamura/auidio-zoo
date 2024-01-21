import styled from '@emotion/styled';
import { useCallback, VFC } from 'react';
import useWindowSize from 'react-use/esm/useWindowSize';
import ReactConfetti from 'react-confetti';
import { Keyframes, keyframes } from '@emotion/react';
import { useAnimal } from '../hooks/animal';
import { useAnimalSpeechRecognition } from './App.hooks';
import AppLogo from './AppLogo';
import SimpleAnimalNav from './SimpleAnimalNav';
import AnimalNav from './AnimalNav';
import AppFooter from './AppFooter';
import { AnimatePresence, motion } from 'framer-motion';
import AppAlertNotSupported from './AppAlertNotSupported';
import AppAlertMuted from './AppAlertMuted';
import Welcome from './Welcome';

const Root = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow: hidden;
  background: #fff;
  @media (min-aspect-ratio: 2/1) {
    aspect-ratio: 2/1;
    margin: auto;
  }
`;

const Background = styled(motion.img)`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  height: calc(100% - 4rem);
  object-fit: cover;
  pointer-events: none;
  @media (orientation: landscape) {
    top: 2rem;
    left: 2rem;
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
    border-radius: 3rem;
  }
`;

const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0.5rem);
  }
`;

const Message = styled.p`
  position: absolute;
  bottom: 1rem;
  background: #fff;
  border-radius: 100rem;
  font-size: 1.8rem;
  inset: 0;
  margin: auto auto 0;
  top: auto;
  bottom: 4rem;
  width: fit-content;
  padding: 1.5rem 3rem;
  animation: ${floating} 1s ease-in-out infinite alternate;
  @media (orientation: landscape) {
    padding: 3rem 6rem;
    font-size: 4rem;
  }
`;

type NameProps = {
  imageSrc: string;
  size: number;
  keyframes: Keyframes;
  isVisible: boolean;
};
const VerticalName = styled.div<NameProps>`
  width: 15rem;
  height: 100%;
  position: absolute;
  left: 12rem;
  top: 0;
  background: ${({ imageSrc, size }) =>
    `url(${imageSrc}) 50% 0 / auto ${size}rem repeat-y`};
  animation: ${({ keyframes }) => keyframes} linear infinite;
  animation-duration: ${({ size }) => `${size / 10}s`};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  @media (orientation: portrait) {
    display: none;
  }
`;

const HorizontalName = styled.div<NameProps>`
  height: 8.6rem;
  width: 100%;
  position: absolute;
  left: 0;
  top: 13.5rem;
  background: ${({ imageSrc, size }) =>
    `url(${imageSrc}) 0 50% / ${size}rem auto repeat-x`};
  animation: ${({ keyframes }) => keyframes} linear infinite;
  animation-duration: ${({ size }) => `${size / 10}s`};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  @media (orientation: landscape) {
    display: none;
  }
`;

const App: VFC = () => {
  const { width, height } = useWindowSize();
  const { animal, changeAnimal, animals, prevAnimal, nextAnimal } = useAnimal();
  const {
    interimTranscript,
    isConfettiPlaying,
    pauseConfetti,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
  } = useAnimalSpeechRecognition(animal);

  const goToPrevAnimal = useCallback(() => {
    changeAnimal(prevAnimal);
  }, [changeAnimal, prevAnimal]);

  const goToNextAnimal = useCallback(() => {
    changeAnimal(nextAnimal);
  }, [changeAnimal, nextAnimal]);

  const handleConfettiComplete = useCallback(() => {
    goToNextAnimal();
    resetTranscript();
    pauseConfetti();
  }, [goToNextAnimal, pauseConfetti, resetTranscript]);

  return (
    <Root>
      {!browserSupportsSpeechRecognition && <AppAlertNotSupported />}
      {browserSupportsSpeechRecognition && !isMicrophoneAvailable && (
        <AppAlertMuted />
      )}
      {browserSupportsSpeechRecognition && isMicrophoneAvailable && <Welcome />}
      <AnimatePresence initial={false}>
        <Background
          key={animal.image}
          src={animal.image}
          alt=""
          initial={{
            clipPath: 'circle(0%)',
          }}
          animate={{
            clipPath: 'circle(100%)',
          }}
          exit={{
            clipPath: 'circle(100%)',
          }}
          transition={{
            duration: 1,
          }}
        />
      </AnimatePresence>
      <VerticalName
        isVisible={isConfettiPlaying}
        imageSrc={animal.nameAnimationVertical.imageSrc}
        keyframes={animal.nameAnimationVertical.keyframes}
        size={animal.nameAnimationVertical.size}
      />
      <HorizontalName
        isVisible={isConfettiPlaying}
        imageSrc={animal.nameAnimationHorizontal.imageSrc}
        keyframes={animal.nameAnimationHorizontal.keyframes}
        size={animal.nameAnimationHorizontal.size}
      />
      <AppLogo />
      <SimpleAnimalNav
        prev={prevAnimal}
        next={nextAnimal}
        onPrevClick={goToPrevAnimal}
        onNextClick={goToNextAnimal}
      />
      <AnimalNav
        activeAnimal={animal}
        animals={animals}
        onSelect={(animal) => changeAnimal(animal)}
      />
      <Message>
        {isConfettiPlaying ? '正解！' : interimTranscript || 'ぼくだーれだ？'}
      </Message>
      {isConfettiPlaying && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={200}
          recycle={false}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
      <AppFooter />
    </Root>
  );
};

export default App;
