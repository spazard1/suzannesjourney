import React, { useEffect, useState } from "react";

import "./TextContent.css";

const TextContent = ({title, date, messageLocation}) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch(messageLocation)
      .then(r => r.text())
      .then(text => {
        setMessage(text.replaceAll("\n", "<br />"));
      });
  }, [messageLocation]);

  return (
    <div className="textContainer">
      <div className="title">{title}</div>
      {date &&
        <div className="date">{date}</div> 
      }
      <div className="text" dangerouslySetInnerHTML={{ __html: message}} />
    </div>
  );
}

export default TextContent;