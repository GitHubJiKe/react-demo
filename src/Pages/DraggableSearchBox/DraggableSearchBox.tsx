import React, { useState, useEffect } from "react";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import { Select, Button } from "antd";
import "./style.scss";

const Option = Select.Option;

export interface DraggableSearchBoxProps {}

function makeOptions(count: number = 10) {
  let res = [];
  for (let index = 0; index < count; index++) {
    const element = (
      <Option value={index} key={index}>
        {index}
      </Option>
    );
    res.push(element);
  }
  return res;
}

function DraggableSearchBox({}: DraggableSearchBoxProps) {
  const [draggable, setDraggable] = useState(false);
  const [selects1, setSelects1] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const options = makeOptions();

  const handleDrop = (selects: number[], dragRes: DropResult) => {
    const { removedIndex, addedIndex, payload } = dragRes;
    console.log("removedIndex:::", removedIndex);
    console.log("addedIndex:::", addedIndex);
    console.log("payload:::", payload);
    const newItems = [...selects];
    // remove item
    if (removedIndex !== null) {
      newItems.splice(removedIndex, 1);
    }
    // add item
    if (addedIndex !== null) {
      newItems.splice(addedIndex, 0, payload);
    }

    return setSelects1(newItems);
  };

  useEffect(() => {
    console.log(draggable);
  }, [draggable]);
  return draggable ? (
    <div className="draggable-search-box-root">
      {selects1.map((v) => {
        return (
          <Select
            key={`1-${v}`}
            style={{ width: "30%", display: "inline-block", margin: 10 }}
            value={v}
          >
            {options}
          </Select>
        );
      })}
      <div className="btns">
        <Button type="primary" style={{ marginRight: 8 }}>
          查询
        </Button>
        <Button
          onClick={() =>
            setDraggable((d) => {
              return !d;
            })
          }
        >
          移动
        </Button>
      </div>
    </div>
  ) : (
    <Container
      groupName="1"
      onDrop={(e) => handleDrop(selects1, e)}
      getChildPayload={(idx) => selects1[idx]}
      render={(ref) => {
        return (
          <div className="draggable-search-box-root" ref={ref}>
            {selects1.map((v) => {
              return (
                <Draggable key={`1-${v}`}>
                  <div style={{ width: "33.33%", display: "inline-block" }}>
                    <Select style={{ width: "100%", margin: 10 }} value={v}>
                      {options}
                    </Select>
                  </div>
                </Draggable>
              );
            })}
            <div className="btns">
              <Button type="primary" style={{ marginRight: 8 }}>
                查询
              </Button>
              <Button
                onClick={() =>
                  setDraggable((d) => {
                    return !d;
                  })
                }
              >
                移动中
              </Button>
            </div>
          </div>
        );
      }}
    />
  );
}

export default DraggableSearchBox;
