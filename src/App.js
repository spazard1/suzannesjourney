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
      Poems: [
        {title: "There's a Shark in My Bathtub!", path: "TheresASharkInMyBathtub"},
        {title: "The Me I was Before You Robbed Me", path: "TheMeIWasBeforeYouRobbedMe"},
        {title: "55", path: "55"},
        {title: "The Elevator of Life", path: "TheElevatorOfLife"},
        {title: "To Be Well", path: "ToBeWell"},
        {title: "Cancer is a Chameleon", path: "CancerIsAChameleon"}, 
        {title: "Can't Die Yet", path: "CantDieYet"},
        {title: "Rub a Dub Dub", path: "RubADubDub"},
        {title: "Anniversary", path: "Anniversary"},
        {title: "Death... It's All Around...", path: "DeathItsAllAround"},
        {title: "Every Instinct Told Me", path: "EveryInstinctToldMe"},
        {title: "My Jabberwock", path: "MyJabberwock"},
        {title: "The Woman in the Mirror", path: "TheWomanInTheMirror"},
        {title: "Of Guppies And Girls", path: "OfGuppiesAndGirls"},
      ],
      Stories: [
        {title: "Little Toe", path: "LittleToe"},
      ],
      Videos: [
        {title: "St John's Gala", path: "StJohnsGala"},
        {title: "Tribute", path: "Tribute"},
        {title: "Memoriam Presentation", path: "MemoriamPresentation"},
      ]
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
      for (const writtenObject of item) {
        newLazyElements[writtenObject.path] = lazy(() => import("./" + itemKey.toLowerCase() + "/" + writtenObject.path + ".jsx"));
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
                  {itemsList[item].map(writtenObject => 
                    <NavDropdown.Item key={writtenObject.title} onClick={() => onClickActiveTitle(writtenObject.path)}>{writtenObject.title}</NavDropdown.Item>
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
