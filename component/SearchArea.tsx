import { Col, DatePicker, Dropdown, Form, Input, Row } from "antd";
import Search from "antd/lib/transfer/search";
import { useEffect } from "react";

type items = {
  type: string;
  label: string;
  row?: Array<Array<object>>;
};
type colObjectType = {
  name: string;
  item: string;
};

const ColType = ({ type }: any) => {
  console.log("coltype : ", type);
  switch (type) {
    case "input":
      return <Input />;
    case "date":
      return <DatePicker />;

    default:
      return <div></div>;
  }
};

const formItemLayout = {
  labelCol: { span: 4 },
  //wrapperCol: { span: 8 },
  style: { border: "1px solid gray" },
};

const ColItem = (props: any) => {
  const { name, type, required } = props;
  console.log("colitem type ", type);
  return (
    <Form.Item
      className={`height-2000`}
      {...formItemLayout}
      label={name}
      name={name}
      required={required}
    >
      <ColType type={type} />
    </Form.Item>
  );
};

const SearchRow = ({ colArr, index }: any) => {
  return (
    <Row className="rowitem" justify="center" align="top">
      {colArr.map((item: any, index: number) => (
        <Col className="colitem" key={index} span={24 / colArr.length}>
          <ColItem {...item} />
        </Col>
      ))}
    </Row>
  );
};

const SearchArea = (props: any) => {
  const { layout, row, col, items } = props;

  return (
    <>
      {row.map((item: object, index: number) => (
        <SearchRow colArr={item} key={index} />
      ))}
    </>
  );
};

export default SearchArea;
