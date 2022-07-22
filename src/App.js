import React, { Suspense } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';

import LittleToe from "./stories/LittleToe";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
         <Container>
          <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Poems">
                <NavDropdown.Item href="/poem1">Poem 1</NavDropdown.Item>
                <NavDropdown.Item href="/poem2">Poem 2</NavDropdown.Item>
                <NavDropdown.Item href="/poem3">Poem 3</NavDropdown.Item>
                <NavDropdown.Item href="/poem4">Poem 4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Stories">
                <NavDropdown.Item href="/littleToe">Little Toe</NavDropdown.Item>
                <NavDropdown.Item href="/shark">There is a Shark in my Bathtub</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Videos">
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

              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
