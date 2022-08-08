import { useCallback, useState } from 'react';

export default (initialValue = null) => {
  const [value, setValue]: any = useState(initialValue);
  const onAdd = useCallback((e: any) => {
    setValue([value, {}]);
  }, []);
  return [value, onAdd, setValue];
};
