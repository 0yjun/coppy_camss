import { Col, Form, Row } from "antd";
import Search from "antd/lib/transfer/search";
import { useEffect } from "react";

type items = {
  type: string;
  label: string;
  row?: Array<Array<object>>;
};

const SearchRow = ({ colArr, index }: any) => {
  return (
    <Row className="row">
      {colArr.map((item: any, index: number) => (
        <Col className="col" key={index} span={24 / colArr.length}>
          {item}
        </Col>
      ))}
    </Row>
  );
};

const SearchArea = (props: any) => {
  const { layout, row, col, items } = props;

  return (
    <Form layout={layout}>
      {row.map((item: object, index: number) => (
        <SearchRow colArr={item} key={index} />
      ))}
    </Form>
  );
};

export default SearchArea;
