import React, { Component } from 'react';
import NexacroDataSet from './NexacroDataSet';
const ComnCode = () => {
  const dataset1 = NexacroDataSet([
    { id: '1', name: 'jun' },
    { id: '2', name: 'jun2' },
  ]);
  console.log(dataset1, dataset1.getCount());
  return <div>hello</div>;
};

export default ComnCode;
