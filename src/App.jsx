import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import HomePage from "./pages/home";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? (
        <div className=" d-flex justify-content-center align-items-center min-vh-100">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <NavBar />
          <HomePage />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
