import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";


const RoutesApp = () => {
  return (
         <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route/>
                    <Route/>
                    <Route/>
                    <Route/>
                </Routes>
            </Fragment>
         </BrowserRouter>
    );
};

export default RoutesApp