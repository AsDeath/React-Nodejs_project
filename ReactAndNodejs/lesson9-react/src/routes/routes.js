import { lazy } from 'react'

import MainContent from '../components/Main/MainContent'
import Products from '../components/Main/Products/Products'
import ProductsId from '../components/Main/Products/ProductsId'
import Login from '../components/Main/Login/Login'
import Registration from '../components/Main/Login/Registration'

/* const MainContent = lazy(() =>
  import('../components/Main/MainContent').then(({ MainContent }) => ({
    default: MainContent,
  }))
)
*/

const Routes = [
  /* {
    path: '/:locale',
    component: MainContent,
    exact: true,
  }, */
  {
    path: '/:locale/*',
    component: MainContent,
    exact: true,
  },
  /* {
    path: '/:locale/products',
    component: Products,
    exact: true,
  },
  {
    path: '/:locale/products/*',
    component: Products,
    exact: true,
  }, */
  /* {
    path: '/:locale/products/:id1/*',
    component: MainContent,
    exact: true,
  }, */
 /*  {
    path: '/:locale/products/:id1',
    component: ProductsId,
    exact: true,

  }, */
  {
    path: '/:locale/login',
    component: Login,
    exact: true,

  },
  {
    path: '/:locale/registration',
    component: Registration,
    exact: true,

  },
  /* {
    path: '/:locale/products/:id1/:id2',
    component: MainContent,
    exact: true,

  }, */
  {
    path: '*',
    component: MainContent,
    exact: true,
  },
]

export default Routes;