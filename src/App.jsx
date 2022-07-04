import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pets from "./views/Pets/Pets";
import Individual from "./views/Pets/Individual";
import Edit from "./views/Edit/Edit";
import Admin from "./views/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/pets/:id" component={Individual} />
        <Route exact path="pets/:id/edit" component={Edit} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/">
          <Pets />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
