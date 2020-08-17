import React, { ReactElement } from "react";
import Draggable, { DraggableEventHandler } from "react-draggable";
import { Button } from "antd";
interface Props {}

function DraggablePage({}: Props): ReactElement {
  const handleStart: DraggableEventHandler = (e, data) => {
    console.log(e, data);
  };
  const handleDrag = () => {};
  const handleStop = () => {};
  return (
    <div>
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div>
          <Button className="handle">Drag from here</Button>
        </div>
      </Draggable>
    </div>
  );
}

export default DraggablePage;
