import React, { useState, useEffect, useCallback, useMemo, useContext, useRef } from 'react';
import './App.css';
import './header.css';
import './Main.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from 'react-router-dom';

import RenderRoutes from './components/RenderRoutes/RenderRoutes';
import routes from './routes/routes';

import Menu from './components/Menu/Menu';
import FooterContent from './components/Footer/FooterContent';


function App() {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
          {
            routes.map((router) => {
              return (
                <Route 
                  key={router.path}
                  path={router.path}
                  element={<RenderRoutes {...router} />}
                />
              )
            })
          }
        </Routes>
        <FooterContent />
    </BrowserRouter>
  );
}

export default App;

