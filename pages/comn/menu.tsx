import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";

const Menu = () => {
  return (
    <>
      <ReflexContainer orientation="vertical">
        <ReflexElement className="left-pane" propagateDimensions={true}>
          <div>왼쪽 컴포넌트</div>
        </ReflexElement>
        <ReflexSplitter
          className="splitter"
          style={{ backgroundColor: "#ccdff2", width: "10px" }}
        >
          <div className="splitter"></div>
        </ReflexSplitter>
        <ReflexElement className="right-pane" minSize={10} maxSize={800}>
          <div>
            오른쪽 컴포넌트 hello hello hello hello hello hello hello hello
            hello
          </div>
        </ReflexElement>
      </ReflexContainer>
    </>
  );
};

export default Menu;
