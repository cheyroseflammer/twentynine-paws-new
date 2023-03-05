import '../styles/globals.css';
import '../styles/Navbar.css';
import '../styles/Dropdown.css';
import '../styles/Hero.css';
import '../styles/Button.css';
import '../styles/Grooming.css';
import '../styles/Footer.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
