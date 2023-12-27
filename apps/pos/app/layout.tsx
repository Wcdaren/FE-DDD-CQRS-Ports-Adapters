/* Components */

/* Instruments */
import styles from './styles/layout.module.css';
import './styles/globals.css';
import { Providers } from '../lib/providers';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          {/* <Nav /> */}

          {/* <header className={styles.header}>
              <img src="/logo.svg" className={styles.logo} alt="logo" />
            </header> */}
          <Providers>
            <CssVarsProvider disableTransitionOnChange>
              <CssBaseline />
              <main className={styles.main}>{props.children}</main>
            </CssVarsProvider>
          </Providers>
          {/* <footer className={styles.footer}>
              <span>Learn </span>
              <a className={styles.link} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                React
              </a>
              <span>, </span>
              <a className={styles.link} href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                Redux
              </a>
              <span>, </span>
              <a className={styles.link} href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a className={styles.link} href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
                React Redux
              </a>
            </footer> */}
        </div>
      </body>
    </html>
  );
}
