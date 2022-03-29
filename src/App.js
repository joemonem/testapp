import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Map from "./components/Map";
import Launch from "./components/Launch";
import { Helmet } from "react-helmet";
// import Done from "./components/Done";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>AquaDAO</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Main />
      <Map />
      <Launch />
    </div>
  );
}

export default App;
