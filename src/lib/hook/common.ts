import { useCallback, useState } from 'react';

const fn_search = useCallback((e: any) => {
  const [option, setOption] = useState({});
}, []);
const fn_add = (
  data: Array<object>,
  setdata: Function,
  newObject: object = {},
) => setdata([...data, newObject]);

export { fn_search };
