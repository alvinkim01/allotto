// import React, { Component } from 'react';
// import LottoRandomTemplate from './components/LottoRandomTemplate';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <LottoRandomTemplate/>
//       </div>
//     );
//   }  
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/lotto/Home';
import Payment from './components/lotto/Payment';
import PaymentResult from './components/lotto/PaymentResult';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/payment/result" component={PaymentResult} />   
    </BrowserRouter>
  );
}

export default App;
