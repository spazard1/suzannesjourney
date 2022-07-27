import React, { Suspense, lazy } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const ToBeWell = lazy(() => import("./poems/ToBeWell.jsx"));
  const CancerChameleon = lazy(() => import("./poems/CancerChameleon.jsx"));

  const LittleToe = lazy(() => import("./stories/LittleToe.jsx"));

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
         <Container>
          <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Poems" menuVariant="dark">
                <NavDropdown.Item href="/toBeWell">To Be Well</NavDropdown.Item>
                <NavDropdown.Item href="/cancerChameleon">Caner is a Chameleon</NavDropdown.Item>
                <NavDropdown.Item href="/poem3">Poem 3</NavDropdown.Item>
                <NavDropdown.Item href="/poem4">Poem 4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Stories" menuVariant="dark">
                <NavDropdown.Item href="/littleToe">Little Toe</NavDropdown.Item>
                <NavDropdown.Item href="/shark">There is a Shark in my Bathtub</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Videos" menuVariant="dark">
                <NavDropdown.Item href="/video1">Video 1</NavDropdown.Item>
                <NavDropdown.Item href="/video2">Video 2</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      <div className="mainTextContainer">
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/littleToe" element={<LittleToe />} />
              
              <Route path="/toBeWell" element={<ToBeWell />} />
              <Route path="/cancerChameleon" element={<CancerChameleon />} />

              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
