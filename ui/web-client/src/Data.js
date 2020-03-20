import React, { useState } from 'react';
import axios from "axios";

export const Data = () => {
    const [text, setText] = useState(
      setInterval(
        () => {
          axios
            .get("http://localhost:3000/api/v1/data")
            .then( ({data}) => { setText(data); });
        },
        3000
      ));

    return (
      <div>{text}</div>
    );
}
