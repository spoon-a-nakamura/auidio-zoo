import { VFC } from 'react';
import Alert from './Alert';

const AppAlertNotSupported: VFC = () => (
  <Alert>
    <p>
      このブラウザは
      <br />
      音声認識に対応していません。
    </p>
    <p>
      推奨環境：
      <br />
      パソコンの場合「Google Chrome」
      <br />
      スマートフォン/タブレットの場合「Safari」
    </p>
  </Alert>
);

export default AppAlertNotSupported;
