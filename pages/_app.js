import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.css";
import CustomHeader from "../components/header"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <CustomHeader/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
