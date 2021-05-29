import styled from '@emotion/styled';
import React, { useEffect, useState, VFC } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { device } from '../../../utils/MediaQuery';
import Confetti from 'react-confetti';

const Dictaphone: VFC = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const commands = [
    {
      command: ['ぞう', '象', 'ぞうさん', 'エレファント'],
      callback: () => {
        !isCorrect && setIsCorrect(true);
        console.log('正解です！');
        SpeechRecognition.abortListening;
        setTimeout(() => {
          resetTranscript;
          setIsCorrect(false);
          SpeechRecognition.startListening({ continuous: true });
        }, 6000);
      },
      matchInterim: true,
    },
  ];
  const { transcript, resetTranscript, finalTranscript } = useSpeechRecognition(
    { commands },
  );
  useEffect(() => {
    SpeechRecognition.startListening;
    finalTranscript && SpeechRecognition.abortListening;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SpeechRecognition.startListening()]);

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
      <Button onClick={SpeechRecognition.stopListening}>停止</Button>
      <Button onClick={SpeechRecognition.abortListening}>やり直し</Button>
      <Box>
        <Transcript>
          {isCorrect ? '正解！' : transcript ? transcript : 'ぼくだーれだ？'}
        </Transcript>
      </Box>
      {isCorrect && (
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
    margin-bottom: 10vh;
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
const Button = styled.button`
  padding: 2vw 6vw;
  font-size: 4vw;
  border-radius: 100px;
  background: #000;
  color: #fff;
  border: none;
  font-weight: bold;
  @media ${device.underTablet} {
    margin: auto auto 2vh;
  }
`;
const Transcript = styled.p`
  font-size: 40px;
  transition: all ease-in-out 0.3s;
  @media ${device.underTablet} {
    font-size: 5vw;
  }
`;
