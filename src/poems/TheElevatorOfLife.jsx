
import React from "react";
import TextContent from "../TextContent";

import content from "./TheElevatorOfLife.txt";

const Content = () => {
  return <TextContent title="The Elevator of Life" date="September 18th, 2018" messageLocation={content} />;
}

export default Content;
