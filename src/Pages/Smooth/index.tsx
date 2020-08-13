import React, { useState } from "react";
import {
    Container,
    Draggable,
    DragStartParams,
    DragEndParams,
    DropResult,
} from "react-smooth-dnd";
import Content from "../../Components/Content";
import "./style.scss";

interface IItem {
    id: number;
    text: string;
}

const Item = ({
    text,
    onItemClick,
}: {
    text: string;
    onItemClick(content: string): void;
}) => {
    const [content, setContent] = useState(text || "");
    return (
        <div className="item">
            <input
                value={content}
                onChange={(e) => {
                    setContent(e.currentTarget.value);
                }}
            />
            <button onClick={() => onItemClick(content)}>submit</button>
        </div>
    );
};

const Smooth: React.FC = () => {
    const [items, setItems] = useState<IItem[]>([
        { id: 0, text: "A" },
        { id: 1, text: "B" },
        { id: 2, text: "C" },
        { id: 3, text: "D" },
    ]);

    const onDragStart = ({
        isSource,
        payload,
        willAcceptDrop,
    }: DragStartParams) => {
        console.log("onDragStart:::", isSource, payload, willAcceptDrop);
    };

    const onDrop = (dropResult: DropResult) => {
        const { removedIndex, addedIndex, payload, element } = dropResult;
        console.log("onDrop:::", removedIndex, addedIndex, payload, element);
        const newItems = [...items];
        // remove item
        if (removedIndex !== null) {
            newItems.splice(removedIndex, 1);
        }
        // add item
        if (addedIndex !== null) {
            newItems.splice(addedIndex, 0, payload);
        }

        setItems(newItems);
    };

    const onDragEnd = ({
        isSource,
        payload,
        willAcceptDrop,
    }: DragEndParams) => {
        console.log("onDragEnd:::", isSource, payload, willAcceptDrop);
    };

    return (
        <Content>
            <Container
                onDrop={onDrop}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                getChildPayload={(index) => items[index]}
                orientation="vertical"
                lockAxis="y"
            >
                {items.map((item) => {
                    return (
                        <Draggable key={item.id}>
                            <Item
                                text={item.text}
                                onItemClick={(text) => {
                                    item.text = text;
                                    setItems((data) => {
                                        return [...data];
                                    });
                                }}
                            />
                        </Draggable>
                    );
                })}
            </Container>
            <div>{JSON.stringify(items)}</div>
        </Content>
    );
};

export default Smooth;
