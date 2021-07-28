import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";

function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Step1} />
      <Route path='/step2' component={Step2} />
      <Route path='/step3' component={Step3} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
