import React from "react";
import Header from './header'
import Home from '../router/Home.js'
 import Mobile from './Mobile.js'
 import Cars from './Cars'
 import motorcycles from './motorcycles'
 import Based_on_your_last_search from './Based_on_your_last_search'
import houses from './houses'
import tvled from './tvled'
import tablets from './tablets'
  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class AppRouter extends React.Component{
    render(){
        return(
         <Router>
              <Route exact path='/Header' component={Header}></Route>   {/*'exact' will show the page with '/' else t will never show with like '/home' */}
             <Route path='/Mobile' component={Mobile}></Route>
             <Route path='/Home' component={Home}></Route>
             <Route path='/Cars' component={Cars}></Route>
             <Route path='/motorcycles' component={motorcycles}></Route>
             <Route path='/houses' component={houses}></Route>
             <Route path='/tvled' component={tvled}></Route>
             <Route path='/tablets' component={tablets}></Route>
           
   
             <Route path='/Based_on_your_last_search' component={Based_on_your_last_search}></Route>
         </Router>    
        )
    }
}
export default AppRouter;
 