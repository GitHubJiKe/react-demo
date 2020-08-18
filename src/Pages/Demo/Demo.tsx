import React from "react";
import { Button, Modal } from "antd";

export interface DemoProps {}

function Demo({}: DemoProps) {
  const [modal, contextHolder] = Modal.useModal();
  const handleClick = () => {
    const onOK = () => {
      console.log("onOK");
    };
    console.log(modal);
    modal.confirm({
      title: "Hello",
      content: "World",
      onOk: onOK,
      onCancel: () => {},
    });
  };
  return (
    <>
      <Button onClick={handleClick}>Test</Button>
      <Button
        onClick={() => {
          console.log("Test2");
        }}
      >
        Test2
      </Button>
      {contextHolder}
    </>
  );
}

export default Demo;
