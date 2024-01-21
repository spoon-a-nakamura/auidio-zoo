import { VFC } from 'react';
import Alert from './Alert';

const AppAlertMuted: VFC = () => (
  <Alert>
    <p>
      マイクが有効化されていません。
      <br />
      設定からマイクをオンにする必要があります。
    </p>
  </Alert>
);

export default AppAlertMuted;
