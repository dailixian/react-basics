import { useState } from "react";

const Names = () => {
  const [names, setNames] = useState(["vinod", "lixian", "david"]);
  console.log(names);

    const deleteName = (index: number) => {
        let newNames = [...names];
        newNames.splice(index, 1);
        setNames(newNames);
    }
  const namesList = names.map((name, index) => {
    return (
      <div key={index}>
        <li>
          {name}
          <button onClick={()=>deleteName(index)}>x</button>
        </li>
      </div>
    );
  });
  return (
    <>
      <p>Names are ... {namesList}</p>
    </>
  );
};

export default Names;
