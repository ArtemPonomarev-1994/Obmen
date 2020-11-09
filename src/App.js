import React from 'react';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Rate from "./Rate/Rate"
import About from "./About/About";

class App extends React.Component {
   render(){
  return (
    <div className="site">
    <Header />

<div className="container">
    <main>
      <Router>
      <Switch>
        <Route exact path="/" component={Rate} />
        <Route exact path="/about" component={About} />
     <Rate />
     </Switch>
     </Router>
        </main>
</div>

<div className="container" id="cookie_info">
    <div className="site-content">
        <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В
            частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.Шучу. Конечно, мы ничего не обрабатываем. Это же пет-проект.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
    </div>
</div>

<Footer/>

</div>
  );
}
}
export default App;
