import React, { forwardRef } from 'react';

/* 콤보가 세팅될때 로직 처리
사용법 : 
    useeffect(()=>{ //컴포넌트 onload시
        onComboset();
    },[]);
}*/
type propstype = {
  url: string;
};
const Combo = forwardRef(
  (props: propstype, ref: React.ForwardedRef<HTMLSelectElement>) => {
    console.log('자식 컴포넌트 Cat');
    console.log(ref);
    const { url } = props;

    return (
      <div>
        <select ref={ref}>
          <option>hello</option>
        </select>
      </div>
    );
  },
);

export default Combo;
