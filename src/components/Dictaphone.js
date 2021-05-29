import styled from '@emotion/styled'
import React from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <p>
        このブラウザは音声認識に対応していません。お使いのOSを最新にアップデートしていただくことで、音声認識機能をご利用いただけます。
      </p>
    )
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone
