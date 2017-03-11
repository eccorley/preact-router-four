import { h } from "preact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bundle from "./Bundle";

const Loading = () => <div>Loading...</div>;

const routes = [
  {
    path: "/nice",
    load: require("bundle-loader?lazy!./CompTwo")
  },
  {
    path: "/alright",
    load: require("bundle-loader?lazy!./CompTwo")
  }
];

export default props => (
  <Router>
    <div>
      <div>
        <nav>
          <ul>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/righteous">RIGHTEOUS</Link></li>
            <li><Link to="/cool">COOL</Link></li>
            <li><Link to="/nice">NICE</Link></li>
            <li><Link to="/alright">ALRIGHT</Link></li>
          </ul>
        </nav>
      </div>
      <Route exact path="/" render={({ match }) => <div>Home</div>} />
      <Route
        path="/about"
        render={({ match }) => (
          <div>
            <div>
              About
            </div>
          </div>
        )}
      />
      <Route
        path="/cool"
        render={({ match }) => (
          <Bundle load={require("bundle-loader?lazy!./CompTwo")}>
            {Comp => Comp ? <Comp /> : <Loading />}
          </Bundle>
        )}
      />
      <Route
        path="/righteous"
        render={({ match }) => (
          <div>
            Righteous
          </div>
        )}
      />
      {routes.map(r => (
        <Route
          path={r.path}
          render={({ match }) => (
            <Bundle load={r.load}>
              {Comp => Comp ? <Comp /> : <Loading />}
            </Bundle>
          )}
        />
      ))}
    </div>
  </Router>
);
