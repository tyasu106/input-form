import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { example } from "./components/example";

function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Step1} />
      <Route path='/step2' component={Step2} />
      <Route path='/step3' component={Step3} />
      <Route path='/example' component={example} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
