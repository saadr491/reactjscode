import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './router/header'
import Footer from './router/footer'
import AppRouter from './router/router';
import Based_on_your_last_search from './router/Based_on_your_last_search'
import Fresh_recommendation from './router/Fresh_recommendation'
import Link_to_other_items from './router/link_to_other_items';
import Home from './router/Home';
  
function App() {
  return (
    <div className="App">
      <Header />
<Link_to_other_items/>       
 <ad/>
      <AppRouter />
 <Home/>

<Footer/>
       
    </div>
  );
}

export default App;
