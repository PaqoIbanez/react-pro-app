import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
   to: string;
   path: string;
   Component: LazyExoticComponent<JSXComponent> | JSXComponent;
   name: string;
}

//Todo componente importado debe tener un export default
const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
   {
      path: '/lazy-load/*',
      to: '/lazy-load',
      Component: LazyLayout,
      name: "Lazy Layout"
   },
   {
      to: '/no-lazy',
      path: 'no-lazy',
      Component: NoLazy,
      name: "No Lazy"
   },
   // {
   //    to: '/lazy-3',
   //    path: 'lazy-3',
   //    Component: Lazy3,
   //    name: "Lazy-3"
   // },
]