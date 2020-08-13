import React, { useCallback, useState } from "react";
import Content from "../../Components/Content";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import "./style.scss";

const About: React.FC = () => {
    const [data, setData] = useState([
        { id: 0, text: "a" },
        { id: 1, text: "b" },
        { id: 2, text: "c" },
        { id: 3, text: "d" },
        { id: 4, text: "e" },
        { id: 5, text: "f" },
    ]);
    // using useCallback is optional
    const onBeforeCapture = useCallback(() => {
        /*...*/
    }, []);
    const onBeforeDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragStart = useCallback((a, b) => {
        /*...*/
        // console.log(a, b);
    }, []);
    const onDragUpdate = useCallback(() => {
        /*...*/
    }, []);
    const onDragEnd = useCallback(
        (a, b) => {
            // the only one that is required
            console.log(data);
            console.log(a, b);
            const { index: dIdx } = a.destination; //目标
            const { index: sIdx } = a.source; //源头
            const v = data.find((v, idx) => idx == sIdx);
            const newData = [...data];
            if (sIdx > data.length) {
                newData.splice(sIdx - 1, 1); //remove source
            } else {
                newData.splice(sIdx, 1); //remove source
            }
            if (v) newData.splice(dIdx, 0, v); //insert at new position
            console.log(newData);
            setData(newData);
        },
        [data]
    );
    return (
        <Content>
            <DndProvider backend={HTML5Backend}>
                /* Your Drag-and-Drop Application */
            </DndProvider>
            <Content>
                <DragDropContext
                    onBeforeCapture={onBeforeCapture}
                    onBeforeDragStart={onBeforeDragStart}
                    onDragStart={onDragStart}
                    onDragUpdate={onDragUpdate}
                    onDragEnd={onDragEnd}
                >
                    <Droppable droppableId="A" type="A">
                        {(provided, snapshot) => {
                            return (
                                <div
                                    ref={provided.innerRef}
                                    style={{
                                        height: 500,
                                        // backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                                    }}
                                    {...provided.droppableProps}
                                >
                                    {data.map((v, idx) => {
                                        return (
                                            <Draggable
                                                draggableId={`A-${v.id}`}
                                                index={idx}
                                                key={v.id}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        className="drag-item"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        {v.text}
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                </div>
                            );
                        }}
                    </Droppable>
                </DragDropContext>
            </Content>
            {JSON.stringify(data)}
        </Content>
    );
};

export default About;
