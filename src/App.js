import React, { Suspense, lazy } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const ToBeWell = lazy(() => import("./poems/ToBeWell.jsx"));
  const CancerChameleon = lazy(() => import("./poems/CancerChameleon.jsx"));
  const CantDieYet = lazy(() => import("./poems/CantDieYet.jsx"));
  const RubADubDub = lazy(() => import("./poems/RubADubDub.jsx"));
  const TheresASharkInMyBathtub = lazy(() => import("./poems/TheresASharkInMyBathtub.jsx"));


  const LittleToe = lazy(() => import("./stories/LittleToe.jsx"));

  const StJohnsGala = lazy(() => import("./videos/StJohnsGala.jsx"));

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
         <Container>
          <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Poems" menuVariant="dark">
                <NavDropdown.Item href="/theresASharkInMyBathtub">There's A Shark In My Bathtub!</NavDropdown.Item>
                <NavDropdown.Item href="/toBeWell">To Be Well</NavDropdown.Item>
                <NavDropdown.Item href="/cancerChameleon">Cancer is a Chameleon</NavDropdown.Item>
                <NavDropdown.Item href="/cantDieYet">Can't Die Yet</NavDropdown.Item>
                <NavDropdown.Item href="/rubADubDub">Rub A Dub Dub</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Stories" menuVariant="dark">
                <NavDropdown.Item href="/littleToe">Little Toe</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Videos" menuVariant="dark">
                <NavDropdown.Item href="/stJohnsGala">St. John's Gala</NavDropdown.Item>
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
              <Route path="/cantDieYet" element={<CantDieYet />} />
              <Route path="/rubADubDub" element={<RubADubDub />} />
              <Route path="/theresASharkInMyBathtub" element={<TheresASharkInMyBathtub />} />

              <Route path="/stJohnsGala" element={<StJohnsGala />} />

              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
