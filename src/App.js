import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const itemsList = useMemo(() => {
    /*
      Adding a new poem/story/video:
      Ordering here matters for how it will show up in the links.
      
      1. Add a new line under the correct type, such as Poems or Stories.
      2. Separate the title and the file name with a colon, both surrounded by quotes.
      3. Make sure the line ends with a comma.
    */
   
    return {
      Poems: {
        "To Be Well" : "ToBeWell",
        "Cancer is a Chameleon": "CancerChameleon", 
        "Can't Die Yet": "CantDieYet",
        "Rub A Dub Dub": "RubADubDub",
        "There's a Shark In My Bathtub": "TheresASharkInMyBathtub",
      },
      Stories: {
        "Little Toe": "LittleToe",
      },
      Videos: {
        "St John's Gala": "StJohnsGala",
      }
    }
  }, []);

  const [lazyElements, setLazyElements] = useState({});

  useEffect(() => {
    const newLazyElements = {};
    for (const [itemKey, item] of Object.entries(itemsList)) {
      for (const [titleKey, titleFileName] of Object.entries(item)) {
        newLazyElements[titleKey] = lazy(() => import("./" + itemKey.toLowerCase() + "/" + titleFileName + ".jsx"));
      }
    }

    setLazyElements(newLazyElements);
  }, [itemsList])

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
         <Container>
          <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              {Object.keys(itemsList).map(item => 
                <NavDropdown key={item} title={item} menuVariant="dark">
                  {Object.keys(itemsList[item]).map(titleKey => 
                    <NavDropdown.Item key={titleKey} href={"/" + itemsList[item][titleKey]}>{titleKey}</NavDropdown.Item>
                    )}
                </NavDropdown>
              )}
          </Nav>
        </Container>
      </Navbar>

      {lazyElements &&
        <div className="mainTextContainer">
          <BrowserRouter>
            <Suspense>
              <Routes>
                <Route path="/" element={<Home />} />
                {Object.keys(itemsList).map(item => 
                  (Object.keys(itemsList[item]).map(titleKey => {
                      if (!(titleKey in lazyElements)) {
                        return null;
                      }
                      const RouteHelper = lazyElements[titleKey];
                      return <Route key={titleKey} path={"/" + itemsList[item][titleKey]} element={<RouteHelper />} />
                    }
                  ))
                )}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      }
    </div>
  );
}

export default App;
