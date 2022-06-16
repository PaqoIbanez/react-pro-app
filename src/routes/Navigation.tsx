import { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../../src/logo.png';
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes } from "./routes";



export const Navigation = () => {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <BrowserRouter>
            <div className="main-layout">
               <nav>
                  <img src={logo} alt="React logo" width={100} />
                  <ul>
                     {
                        routes.map(({ to, name }) => (
                           <li key={to}>
                              <NavLink
                                 to={to}
                                 className={({ isActive }) => isActive ? 'nav-active' : ''}
                              >
                                 {name}
                              </NavLink>
                           </li>
                        ))
                     }
                  </ul>
               </nav>
               <Routes>
                  {
                     routes.map(({ path, Component }) => (
                        <Route
                           path={path}
                           element={< Component />}
                           key={path}
                        />
                     ))
                  }
                  <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
               </Routes>
            </div>
         </BrowserRouter>
      </Suspense>
   )
}