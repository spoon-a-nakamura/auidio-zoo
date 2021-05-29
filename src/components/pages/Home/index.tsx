import { VFC } from 'react';
import Dictaphone from './Dicaphone';
// import dynamic from 'next/dynamic';

// const NoSSRVideoBg = dynamic(() => import('./VideoBg'), {
//   ssr: false,
// });

const Home: VFC = () => (
  <>
    {/* <NoSSRVideoBg /> */}
    <Dictaphone />
  </>
);

export default Home;
