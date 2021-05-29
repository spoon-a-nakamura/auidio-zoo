import styled from '@emotion/styled';
import * as PIXI from 'pixi.js';
import { Stage, Sprite } from '@inlet/react-pixi';

const videoSource = PIXI.Texture.from('/images/animals/elephant_pc.mp4');
const VideoBg = () => {
  return (
    <Root>
      <Stage width={2000} height={1500}>
        <Sprite texture={videoSource} />
      </Stage>
    </Root>
  );
};
export default VideoBg;
const Root = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  canvas {
    object-fit: cover;
    width: 100% !important;
    height: 100% !important;
  }
`;
