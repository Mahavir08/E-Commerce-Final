import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Add from "./Components/Add";
import Delete from "./Components/Delete";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/delete" component={Delete} />
          <Route exact path="/update" component={Update} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
