import React from "react";
import { Select, Table, Button } from "antd";
import { ColumnProps } from "antd/lib/table";
import "./style.scss";

const Option = Select.Option;

interface IData {
  name: string;
  age: number;
  height: number;
  weight: number;
  gender: string;
  birthday: string;
}

const columns: Array<ColumnProps<IData>> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Height",
    dataIndex: "height",
  },
  {
    title: "Weight",
    dataIndex: "weight",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Birthday",
    dataIndex: "birthday",
  },
];

const dataSource: IData[] = new Array(10).map((_, idx) => {
  return {
    name: idx.toString(),
    age: idx,
    height: idx,
    weight: idx,
    gender: idx.toString(),
    birthday: idx.toString(),
  } as IData;
});

const AdvancedTable: React.FC = () => {
  return (
    <div className="advanced-table-root">
      <div className="operate-box">
        <div className="operate-box-left">
          <div className="operate-box-left-item">
            <span>Name</span>
            <Select>
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
            </Select>
          </div>
          <div className="operate-box-left-item">
            <span>Name</span>
            <Select>
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
            </Select>
          </div>
          <div className="operate-box-left-item">
            <span>Name</span>
            <Select>
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
            </Select>
          </div>
          <div className="operate-box-left-item">
            <span>Name</span>
            <Select>
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
            </Select>
          </div>
          <div className="operate-box-left-item">
            <span>Name</span>
            <Select>
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
            </Select>
          </div>
          <div className="operate-box-left-item">
            <span>Name</span>
            <Select>
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
            </Select>
          </div>
          <div className="operate-box-left-item">
            <span>Name</span>
            <Select>
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
            </Select>
          </div>
          <div className="operate-box-left-item">
            <span>Name</span>
            <Select>
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
            </Select>
          </div>
        </div>
        <div className="operate-box-right">
          <div className="operate-box-right-item">
            <Button type="primary">查询</Button>
          </div>
          <div className="operate-box-right-item">
            <Button>复位</Button>
          </div>
        </div>
      </div>
      <div className="table-box">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default AdvancedTable;
