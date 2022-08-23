import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import HornedBeast from "./components/HornedBeast";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        {/* <HornedBeast></HornedBeast> */}
        <Footer />
      </div>
    );
  }
}

export default App;
