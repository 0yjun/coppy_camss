import React, { ChangeEvent, useCallback, useState } from "react";

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
