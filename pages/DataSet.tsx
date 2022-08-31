import React from "react";

export class DataSet extends React.Component {
  constructor(props: any) {
    super(props);
    console.log("prop is ", props);
    this.state = {
      count: 0,
    };
  }
  test() {
    console.log("this is this.state", this.state);
  }

  render() {
    return <div>hello</div>;
  }
}
