// Create a shape based on 2d Array
// empty box where value ==1
// when value === 0 the render nothing
// we can select a box and change bgcolor to green
//deselect in the order of selection
// disable any interaction
// DS? Array? Object? Something?

import "./style.css";
import { useEffect, useMemo, useState } from "react";

const Shape = ({ data }) => {
  const [selected, setSelected] = useState(new Set());
  const boxes = useMemo(() => data.flat(Infinity), [data]);

  const countOfVisibleBoxes = useMemo(() => {
    return boxes.reduce((acc, box) => {});
  });

  console.log(boxes);
  console.log(selected);

  const unload = () => {
    const keys = Array.from(selected.keys());

    const removeNextKey = () => {
      if (keys.length) {
        const currentKey = keys.shift();

        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });

        setTimeout(removeNextKey, 500);
      } else {
      }
    };
    setTimeout(removeNextKey, 100);
  };

  useEffect(() => {
    if (selected.size >= countOfVisibleBoxes) {
      // unloading
    }
  }, [selected]);

  const handleClick = (event) => {
    console.log(event.target.className);
    const index = event.target.getAttribute("data-index");
    const status = event.target.getAttribute("data-status");

    if (index === null || status === "hidden") {
      return;
    }

    setSelected((prev) => {
      return new Set(prev.add(index));
    });
  };
  return (
    <>
      <div className="boxes">
        {boxes.map((box, index) => {
          const status = box === 1 ? "visible" : "hidden";

          const isSelected = selected.has(index.toString());

          return (
            <div
              key={`${box}-${index}`}
              className={`box ${status} ${isSelected ? "selected" : ""}`}
              data-index={index}
              data-status={status}
              onClick={(event) => handleClick(event)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shape;
