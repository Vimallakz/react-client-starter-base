import React, { Suspense } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = React.lazy(() => import('./router'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes />
      </Suspense>
    </div>
  );
}

export default App;
