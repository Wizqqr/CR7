import React from "react";
import './Cart.css'
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';
import {Linker} from '../../components/Linker/Linker'

export const Cart=()=>{
    return(
      <div className="cart">
<h1 className="This">This is Cart</h1>
<button className="navbar2">
</button>
<button className="navbar2">
</button>
<button className="navbar2">
</button>
<Router>
<Routes>
{/* <Route path='/linker'element={<Linker/>}/> */}
</Routes>
</Router>
      </div>
    )
}


