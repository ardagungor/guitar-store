import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage"
import Showcase from "./components/Showcase/Showcase";
import Cart from "./components/Cart/Cart";
import Guitars from "./components/Guitars/Guitars";
import Bass from "./components/Bass/Bass";
import Footer from "./components/Footer/Footer";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/featured" component={Showcase} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/guitars" component={Guitars} />
          <Route exact path="/bass" component={Bass} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
