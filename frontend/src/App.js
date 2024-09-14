import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import { Header } from "./components/Header";
import {AceptarCotizacion} from "./components/cotizacion/AceptarCotizacion"

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <main>
            <Routes>
              <Route path="/cotizacion" element={<AceptarCotizacion />} />

              <Route path='/*' element={<AceptarCotizacion />}/>
            </Routes>
          </main>

        </div>
      </BrowserRouter>
  );
}

export default App;