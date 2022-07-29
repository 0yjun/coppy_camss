export default class rows {
  // 클래스 프로퍼티를 사전 선언하여야 한다
  columns: any;
  rows: any;

  constructor(columns: any, rows: any) {
    // 클래스 프로퍼티수에 값을 할당
    this.columns = columns;
    this.rows = rows;
    console.log(`${JSON.stringify(this.rows)} is rows.`);
  }

  getColumnsCount() {
    return this.columns.length;
  }
  addRow() {
    console.log('addrow class run');
    let newRow: any = {};
    this.rows.forEach((e: any) => {
      Object.keys(e).map(e => {
        newRow[e] = '';
      });
    });
    this.rows.push(newRow);
  }
  getRowCount() {
    return this.rows.length;
  }
}
