import { Col, Form, Input, Row } from "antd";
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

const formItemLayout = {
  labelCol: { span: 4 },
  //wrapperCol: { span: 8 },
  style: { border: "1px solid gray" },
};

const ColItem = (props: any) => {
  const { name, type, required } = props;
  return (
    // <Form.Item
    //   className={`height-2000`}
    //   {...formItemLayout}
    //   label={name}
    //   name={name}
    //   required={required}
    // >
    //   <Input />
    // </Form.Item>
    <p style={{ border: "1px solid gray" }} className={`height-120`}>
      hello
    </p>
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
const DemoBox: React.FC<{ children: React.ReactNode; value: number }> = (
  props
) => <p className={`height-${props.value}`}>{props.children}</p>;
const SearchArea = (props: any) => {
  const { layout, row, col, items } = props;

  return (
    <>
      <Row justify="center" align="top">
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>
    </>
  );
};

export default SearchArea;
