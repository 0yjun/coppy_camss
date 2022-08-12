const Dataset = {
  ColumnInfo: {
    columns: {},
  },

  hello: function (thing: any) {
    console.log(JSON.stringify(this) + 'says hello' + thing);
  },
  setColumns: function (columns: Array<object>) {
    this.ColumnInfo.columns = columns;
  },
  toString: function () {
    return JSON.stringify(this);
  },
};

export default Dataset;
