import { Keyframes } from '@emotion/react';
import { SpeechRecognitionOptions } from 'react-speech-recognition';

type Command = SpeechRecognitionOptions['commands'] extends
  | ReadonlyArray<infer T>
  | undefined
  ? T
  : never;

export type AnimalNameAnimation = {
  imageSrc: string;
  keyframes: Keyframes;
  size: number;
};

export type Animal = {
  image: string;
  thumbnail: string;
  command: Command['command'];
  sound: string;
  nameAnimationVertical: AnimalNameAnimation;
  nameAnimationHorizontal: AnimalNameAnimation;
};
