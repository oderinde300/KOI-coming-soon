import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./Home";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>KOI</title>
        <link rel="canonical" href="https://www.skyventures.xyz/" />
      </Helmet>
      <main className="body-size mx-auto w-full">
        <Home />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnHover
          theme="dark"
        />
      </main>
    </>
  );
}

export default App;
