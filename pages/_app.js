import '../styles/globals.scss';
import { PageTransition } from 'next-page-transitions';

function MyApp({ Component, pageProps }) {
  return (
    <PageTransition
      timeout={2000}
      classNames="page-transition"
    >
      <Component {...pageProps} />
    </PageTransition>
  );
}

export default MyApp;
