import { links } from "./utils/const.js";
import { Route, Switch } from "react-router-dom";
import { About, Contact, Home, Photos, Error } from "./pages";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links
        .filter((link) => link.text !== 'home' )
        .map((link) => {
          const { id, url, page } = link;
          return (
            <Route key={id} path={url}>
              {page}
            </Route>
          );
        })}
        {/* <Route exact path='/*'>
        <Error/>
      </Route> */}
      </Switch>
    </>
  );
}

export default App;
