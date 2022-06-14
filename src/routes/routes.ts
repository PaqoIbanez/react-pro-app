import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
   to: string;
   path: string;
   Component: LazyExoticComponent<JSXComponent> | JSXComponent;
   name: string;
}
//El componente debe tener un export default
const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2')) //El componente debe tener un export default
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3')) //El componente debe tener un export default

export const routes: Route[] = [
   {
      to: '/lazy-1',
      path: 'lazy-1',
      Component: Lazy1,
      name: "Lazy-1"
   },
   {
      to: '/lazy-2',
      path: 'lazy-2',
      Component: Lazy2,
      name: "Lazy-2"
   },
   {
      to: '/lazy-3',
      path: 'lazy-3',
      Component: Lazy3,
      name: "Lazy-3"
   },
]