import { shuffle } from 'lodash';
import { useCallback, useMemo, useState } from 'react';
import { keyframes } from '@emotion/react';
import elephant from '../images/animals/elephant.jpg';
import elephantThumbnail from '../images/animals/elephant-thumbnail.jpg';
import elephantNameVertical from '../images/animals/elephant-name-v.svg';
import elephantNameHorizontal from '../images/animals/elephant-name-h.svg';
import pig from '../images/animals/pig.jpg';
import pigThumbnail from '../images/animals/pig-thumbnail.jpg';
import pigNameVertical from '../images/animals/pig-name-v.svg';
import pigNameHorizontal from '../images/animals/pig-name-h.svg';
import chick from '../images/animals/chick.jpg';
import chickThumbnail from '../images/animals/chick-thumbnail.jpg';
import chickNameVertical from '../images/animals/chick-name-v.svg';
import chickNameHorizontal from '../images/animals/chick-name-h.svg';
import panda from '../images/animals/panda.jpg';
import pandaThumbnail from '../images/animals/panda-thumbnail.jpg';
import pandaNameVertical from '../images/animals/panda-name-v.svg';
import pandaNameHorizontal from '../images/animals/panda-name-h.svg';
import hippopotamus from '../images/animals/hippopotamus.jpg';
import hippopotamusThumbnail from '../images/animals/hippopotamus-thumbnail.jpg';
import hippopotamusNameVertical from '../images/animals/hippopotamus-name-v.svg';
import hippopotamusNameHorizontal from '../images/animals/hippopotamus-name-h.svg';
import mouse from '../images/animals/mouse.jpg';
import mouseThumbnail from '../images/animals/mouse-thumbnail.jpg';
import mouseNameVertical from '../images/animals/mouse-name-v.svg';
import mouseNameHorizontal from '../images/animals/mouse-name-h.svg';
import { Animal, AnimalNameAnimation } from '../types/animal';

const createHorizontalNameAnimation = (
  imageSrc: string,
  size: number,
): AnimalNameAnimation => ({
  imageSrc,
  keyframes: keyframes`
    0% {
      background-position: 0 50%;
    }
    100% {
      background-position: ${-size}rem 50%;
    }
  `,
  size,
});

const createVerticalNameAnimation = (
  imageSrc: string,
  size: number,
): AnimalNameAnimation => ({
  imageSrc,
  keyframes: keyframes`
    0% {
      background-position: 50% 0;
    }
    100% {
      background-position: 50% ${-size}rem;
    }
  `,
  size,
});

const withHonorific = (...values: string[]) =>
  values.flatMap((value) => [...values, `${value}ちゃん`, `${value}さん`]);

export const animals: readonly [Animal, Animal, ...Animal[]] = [
  {
    image: elephant,
    thumbnail: elephantThumbnail,
    command: withHonorific('ぞう', '蔵', '象'),
    sound: 'パオーン',
    nameAnimationVertical: createVerticalNameAnimation(
      elephantNameVertical,
      64,
    ),
    nameAnimationHorizontal: createHorizontalNameAnimation(
      elephantNameHorizontal,
      40,
    ),
  },
  {
    image: hippopotamus,
    thumbnail: hippopotamusThumbnail,
    command: [...withHonorific('カバ', 'かば'), '加波山'],
    sound: 'ブー',
    nameAnimationVertical: createVerticalNameAnimation(
      hippopotamusNameVertical,
      101,
    ),
    nameAnimationHorizontal: createHorizontalNameAnimation(
      hippopotamusNameHorizontal,
      62,
    ),
  },

  {
    image: chick,
    thumbnail: chickThumbnail,
    command: withHonorific('ひよこ'),
    sound: 'ピヨピヨ',
    nameAnimationVertical: createVerticalNameAnimation(chickNameVertical, 39),
    nameAnimationHorizontal: createHorizontalNameAnimation(
      chickNameHorizontal,
      25,
    ),
  },
  {
    image: pig,
    thumbnail: pigThumbnail,
    command: withHonorific('ぶた', '豚', '歌'),
    sound: 'ブヒブヒ',
    nameAnimationVertical: createVerticalNameAnimation(pigNameVertical, 22),
    nameAnimationHorizontal: createHorizontalNameAnimation(
      pigNameHorizontal,
      15,
    ),
  },
  {
    image: panda,
    thumbnail: pandaThumbnail,
    command: withHonorific('ぱんだ', 'パンダ'),
    sound: 'ヒクッ',
    nameAnimationVertical: createVerticalNameAnimation(pandaNameVertical, 43),
    nameAnimationHorizontal: createHorizontalNameAnimation(
      pandaNameHorizontal,
      27,
    ),
  },
  {
    image: mouse,
    thumbnail: mouseThumbnail,
    command: withHonorific('ネズミ', 'ねずみ', 'マウス', 'まうす'),
    sound: 'チュウ',
    nameAnimationVertical: createVerticalNameAnimation(mouseNameVertical, 47),
    nameAnimationHorizontal: createHorizontalNameAnimation(
      mouseNameHorizontal,
      29,
    ),
  },
];

/**
 * アニマルデータを取り扱うためのHook
 * - シャッフルされたアニマルリスト
 * - 現在アクティブなアニマルと、その前後のアニマル
 * - アニマルを切り替えるメソッド
 * を返す
 */
export const useAnimal = () => {
  const shuffledAnimals = useMemo(() => shuffle(animals), []);
  const [index, setIndex] = useState(0);
  const changeAnimal = useCallback(
    (animal: Animal) => {
      setIndex(shuffledAnimals.indexOf(animal));
    },

    [shuffledAnimals],
  );
  const animal = shuffledAnimals[index];
  const prevAnimal =
    shuffledAnimals[index - 1] ?? shuffledAnimals[shuffledAnimals.length - 1];
  const nextAnimal = shuffledAnimals[index + 1] ?? shuffledAnimals[0];

  if (!animal || !prevAnimal || !nextAnimal) {
    throw new Error('something went wrong');
  }

  return {
    animal,
    prevAnimal,
    nextAnimal,
    changeAnimal,
    animals: shuffledAnimals,
  };
};
