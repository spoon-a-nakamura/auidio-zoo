import styled from '@emotion/styled';
import React, { useEffect, useState, VFC } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { device } from '../../../utils/MediaQuery';
import Confetti from 'react-confetti';

const Dictaphone: VFC = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [animal, setAnimal] = useState('elephant');
  // 'elephant'
  // 'pig',
  // 'chick',
  // 'panda',
  // 'hippopotamus',
  // 'mouse',
  const commands = [
    {
      command: [
        'ぞう',
        '蔵',
        '象',
        'ぶた',
        '豚',
        '歌',
        'ひよこ',
        'ぱんだ',
        'パンダ',
        'カバ',
        'かば',
        'ネズミ',
        'ねずみ',
        'マウス',
        'まうす',
      ],
      callback: () => {
        setIsCorrect(true);
        SpeechRecognition.stopListening;
        SpeechRecognition.abortListening;
        resetTranscript;
        setTimeout(() => {
          animal === 'elephant' && setAnimal('pig');
          animal === 'pig' && setAnimal('chick');
          animal === 'chick' && setAnimal('panda');
          animal === 'panda' && setAnimal('hippopotamus');
          animal === 'hippopotamus' && setAnimal('mouse');
          animal === 'mouse' && setAnimal('elephant');
          setIsCorrect(false);
        }, 5000);
      },
      matchInterim: true,
    },
  ];
  const { transcript, interimTranscript, resetTranscript } =
    useSpeechRecognition({ commands });
  useEffect(() => {
    SpeechRecognition.startListening;
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
    <Root animal={animal}>
      <Form>
        <Button
          isCorrect={isCorrect}
          show={interimTranscript}
          onClick={SpeechRecognition.abortListening}
        >
          やり直す
        </Button>
        <Box>
          <Transcript>
            {isCorrect ? '正解！' : transcript ? transcript : 'ぼくだーれだ？'}
          </Transcript>
        </Box>
      </Form>
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

type RootProps = {
  animal: string;
};
const Root = styled.div<RootProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: ${({ animal }) =>
    `url(/images/animals/${animal}_pc@2x.png) center / contain no-repeat`};
  @media ${device.underTablet} {
    background-image: ${({ animal }) =>
      `url(/images/animals/${animal}_sp@2x.png)`};
    height: 100%;
  }
`;
const Form = styled.div`
  margin: auto auto 2vh;
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
type ButtonProps = {
  show: string;
  isCorrect: boolean;
};
const Button = styled.button<ButtonProps>`
  padding: 2vw 6vw;
  font-size: 4vw;
  border-radius: 100px;
  background: #000;
  color: #fff;
  border: none;
  font-weight: bold;
  display: none;
  transition: all ease-in-out 0.3s;
  @media ${device.underTablet} {
    display: block;
    opacity: ${({ show, isCorrect }) => (!isCorrect && show ? 1 : 0)};
    transform: ${({ show, isCorrect }) =>
      !isCorrect && show ? 'translateY(-6px)' : 'translateY(0)'};
    margin: 0 auto 3vh;
  }
`;
const Transcript = styled.p`
  font-size: 40px;
  transition: all ease-in-out 0.3s;
  @media ${device.underTablet} {
    font-size: 5vw;
  }
`;
