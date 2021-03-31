import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne <br/>
      <a href="/pagetwo">Page 2 - Bad link</a> <br/>
      <Link to="/pagetwo">Page 2 - Good link</Link>
    </div>
  );
}
const PageTwo = () => {
  return (
    <div>
      PageTwo
      <a href="/">Page 1 - Bad link</a>
      <button>Click Me!</button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne}/>
          <Route path="/pagetwo" component={PageTwo}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
