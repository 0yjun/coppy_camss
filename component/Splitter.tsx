import React from "react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

type spliterType = {
  firstComponent: React.ReactElement | React.ReactNode;
  secondComponent: React.ReactElement | React.ReactNode;
  orientation: "horizontal" | "vertical";
  minSize: [number, number];
  maxSize: [number, number];
};

const Spliter = ({
  firstComponent,
  secondComponent,
  orientation,
  minSize,
  maxSize,
}: spliterType) => {
  const orientationString = orientation;
  return (
    <ReflexContainer orientation={orientation}>
      <ReflexElement
        className="left-pane"
        minSize={minSize[0]}
        maxSize={maxSize[0]}
      >
        {firstComponent}
      </ReflexElement>
      <ReflexSplitter propagate={true}>
        <div style={{ visibility: "hidden" }}>1111</div>
      </ReflexSplitter>
      <ReflexElement
        className="right-pane"
        minSize={minSize[1]}
        maxSize={maxSize[1]}
      >
        {secondComponent}
      </ReflexElement>
    </ReflexContainer>
  );
};
export default Spliter;
