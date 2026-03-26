import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import Players from "./components/homepage/players/Players";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/homepage/footer/Footer";
import Subscription from "./components/homepage/subscription/Subscription";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);
  return (
    <>
      <Navbar coin={coin}></Navbar>

      <Banner></Banner>

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players
          playerPromise={playerPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>

      </Suspense>

      <Subscription></Subscription>

      <Footer></Footer>

      {/* React  toastify*/}
      <ToastContainer />
    </>
  );
}

export default App;
