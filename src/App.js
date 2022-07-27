import React, { Suspense, lazy, useEffect, useMemo, useState, useCallback } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

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
        "Rub a Dub Dub": "RubADubDub",
        "There's a Shark in My Bathtub!": "TheresASharkInMyBathtub",
      },
      Stories: {
        "Little Toe": "LittleToe",
      },
      Videos: {
        "St John's Gala": "StJohnsGala",
      }
    }
  }, []);

  const Home = useMemo(() => lazy(() => import("./Home.jsx")), []);

  const [lazyElements, setLazyElements] = useState({});
  const [activeTitle, setActiveTitle] = useState(window.location.pathname.substring(1));

  const onClickActiveTitle = useCallback((title) => {
    window.history.replaceState(null, "Suzanne's Journey", "/" + title);
    setActiveTitle(title);
  }, []);

  useEffect(() => {
    const newLazyElements = {};
    for (const [itemKey, item] of Object.entries(itemsList)) {
      for (const [, titleFileName] of Object.entries(item)) {
        newLazyElements[titleFileName] = lazy(() => import("./" + itemKey.toLowerCase() + "/" + titleFileName + ".jsx"));
      }
    }

    setLazyElements(newLazyElements);
  }, [itemsList])

  const TextContentHelper = activeTitle === "" ? Home : lazyElements[activeTitle];

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
         <Container>
          <Nav>
              <Nav.Link onClick={() => onClickActiveTitle("")}>Home</Nav.Link>
              {Object.keys(itemsList).map(item => 
                <NavDropdown key={item} title={item} menuVariant="dark">
                  {Object.keys(itemsList[item]).map(titleKey => 
                    <NavDropdown.Item key={titleKey} onClick={() => onClickActiveTitle(itemsList[item][titleKey])}>{titleKey}</NavDropdown.Item>
                    )}
                </NavDropdown>
              )}
          </Nav>
        </Container>
      </Navbar>

      {lazyElements &&
        <div className="mainTextContainer">
            <Suspense>
              {TextContentHelper &&
                <TextContentHelper />
              }
            </Suspense>
        </div>
      }
    </div>
  );
}

export default App;
