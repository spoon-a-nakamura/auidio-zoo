import { useCallback, useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { Animal } from '../types/animal';

export const useAnimalSpeechRecognition = (animal: Animal) => {
  const [isConfettiPlaying, setIsConfettiPlaying] = useState(false);
  const {
    listening,
    interimTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition({
    commands: [
      {
        command: animal.command,
        callback: () => {
          setIsConfettiPlaying(true);
        },
        matchInterim: true,
      },
    ],
  });

  /**
   * HACK:
   * cleanup処理でabortListeningを実行すると、直後のstartListeningでただしくマイクを有効化できないことがあるため、
   * listening状態の変化に応じて、再度有効化するようにする
   */
  useEffect(() => {
    if (!listening) {
      SpeechRecognition.startListening({ continuous: true });
    }
  }, [listening]);
  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    return () => {
      SpeechRecognition.abortListening();
    };
  }, []);

  const pauseConfetti = useCallback(() => {
    setIsConfettiPlaying(false);
  }, []);

  return {
    interimTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    isConfettiPlaying,
    pauseConfetti,
  };
};
