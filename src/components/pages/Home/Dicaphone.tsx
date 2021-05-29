import styled from '@emotion/styled';
import React, { VFC } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Dictaphone: VFC = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <p>
        このブラウザは音声認識に対応していません。お使いのOSを最新にアップデートしていただくことで、音声認識機能をご利用いただけます。
      </p>
    );
  }

  return (
    <Root>
      <Heading>STARTボタンを押して、好きな動物の名前を言ってください。</Heading>
      <ButtonGroup>
        <Button onClick={() => SpeechRecognition.startListening}>START</Button>
        <Button onClick={() => SpeechRecognition.stopListening}>STOP</Button>
        <Button onClick={() => resetTranscript}>RESET</Button>
      </ButtonGroup>
      <Box>
        <Transcript>{transcript}</Transcript>
      </Box>
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
`;
const Heading = styled.h1`
  font-size: 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;
const Button = styled.button`
  padding: 10px 40px;
  margin: 20px 10px;
  font-size: 20px;
  border-radius: 100px;
  background: #333;
  border: none;
  color: #fff;
  cursor: pointer;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #111;
  padding: 100px;
`;
const Transcript = styled.p`
  padding: 50px;
  font-size: 30px;
`;
