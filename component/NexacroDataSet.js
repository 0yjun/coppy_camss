const NexacroDataSet = data => {
  const DataSet = {
    ColumnInfo: {
      ConstColumn: {},
      Column: {},
    },
    Rows: [],
  };

  DataSet.Rows = Object.values(data);
  function getCount() {
    return NexacroDataSet.Rows.length();
  }

  return DataSet;
};

export default NexacroDataSet;
