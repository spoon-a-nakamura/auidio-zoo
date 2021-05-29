import styled from '@emotion/styled';
import React, { useEffect, useState, VFC } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { device } from '../../../utils/MediaQuery';
import Confetti from 'react-confetti';

console.clear;

const Dictaphone: VFC = () => {
  useEffect(() => {
    SpeechRecognition.startListening;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SpeechRecognition.startListening()]);

  const [isCorrect, setIsCorrect] = useState(false);
  const commands = [
    {
      command: ['ぞう', '象', 'ぞうさん', 'エレファント'],
      callback: () => {
        isCorrect
          ? setTimeout(() => {
              setIsCorrect(false);
            }, 1500)
          : setIsCorrect(true);
      },
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });

  console.log(isCorrect);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <p>
        このブラウザは音声認識に対応していません。
        <wbr />
        お使いのOSを最新にアップデートしていただくことで、
        <wbr />
        音声認識機能をご利用いただけます。
      </p>
    );
  }

  return (
    <Root>
      <Box>
        <Transcript>{transcript ? transcript : 'ぼくだーれだ？'}</Transcript>
      </Box>
      {isCorrect && (
        <>
          <CorrectWrap>
            <CorrectMessage>正解！</CorrectMessage>
          </CorrectWrap>
          <Confetti
            recycle={true}
            numberOfPieces={40}
            style={{
              width: '100%',
              height: 'auto',
              position: 'fixed',
              top: 0,
              left: 0,
            }}
          />
        </>
      )}
    </Root>
  );
};
export default Dictaphone;

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: url(/images/animals/elephant_pc@2x.png) center / contain no-repeat;
  @media ${device.underTablet} {
    background-image: url(/images/animals/elephant_sp@2x.png);
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border-radius: 1000px;
  padding: 5vh 100px;
  margin: 1vh auto auto;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.3s;
  animation: box 2s ease-in-out infinite;
  @media ${device.underTablet} {
    padding: 3vh 10vw;
    margin: auto auto 10vh;
  }
  @keyframes box {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
const Transcript = styled.p`
  font-size: 40px;
  transition: all ease-in-out 0.3s;
  @media ${device.underTablet} {
    font-size: 5vw;
  }
`;
const CorrectWrap = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50vh;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1000px;
  width: 300px;
  height: 300px;
  backdrop-filter: blur(20px);
`;
const CorrectMessage = styled.p`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: 0.2em;
  font-size: 40px;
  padding: 10px;
`;
