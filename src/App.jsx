import React, { useState } from "react";
import data from "./data";
import "./App.scss";
import RoomComponent from "./components/RoomComponent";

function App() {
  const [index, setIndex] = useState(0);
  const next = () =>
    index >= data.length - 1 ? setIndex(0) : setIndex(index + 1);
  const prev = () =>
    index <= 0 ? setIndex(data.length - 1) : setIndex(index - 1);

  return (
    <>
      <RoomComponent
        image={data[index].image}
        title={data[index].title}
        title_text={data[index].title_text}
        key={data[index].id}
        next={next}
        prev={prev}
      />
    </>
  );
}

export default App;
