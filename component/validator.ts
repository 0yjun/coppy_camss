type validatorType = {
  COL_NM: string;
  MSG: string;
  OPTION: 'min' | 'max' | 'comparedate' | 'required';
  VALUE: number;
  TYPE: string;
};

/**
 * test
 * @param validArray : 검사할 양식을 저장하는 array
 * @param targetArray : 검사 대상이되는 array
 * @function isValid : 검증 값을 true,false로 반환한다.
 *
 */
export class Validator {
  constructor(
    private validArray: Array<validatorType>,
    private targetArray: Array<any>,
    private ref?: any,
  ) {
    this.validArray = validArray;
    this.targetArray = targetArray;
    console.log('validator 생성 ', this);
  }
  /**
   * targetArray,
   * @param targetArray (검사할 array)
   * @param obj (컬럼)
   * @returns targetArray를 순회하며 obj(컬럼)으로 검사한다.
   */
  checkAvailability = (targetArray: Array<object>, validObj: validatorType) => {
    const { COL_NM, MSG, OPTION, VALUE } = validObj;
    return targetArray.every((elem: any, index) => {
      switch (OPTION) {
        case 'required':
          return elem[COL_NM] !== undefined;
        case 'min':
          return parseInt(elem[COL_NM]) > VALUE;
        case 'max':
          if (isNaN(parseInt(elem[COL_NM]))) {
            return false;
          } else {
            return parseInt(elem[COL_NM]) < VALUE;
          }
      }
    });
  };

  isValid = () =>
    this.validArray.every(
      validObj => (targetArray: Array<object>, validObj: validatorType) => {
        const { COL_NM, MSG, OPTION, VALUE } = validObj;
        return targetArray.every((elem: any, index) => {
          switch (OPTION) {
            case 'required':
              return elem[COL_NM] !== undefined;
            case 'min':
              return parseInt(elem[COL_NM]) > VALUE;
            case 'max':
              if (isNaN(parseInt(elem[COL_NM]))) {
                return false;
              } else {
                return parseInt(elem[COL_NM]) < VALUE;
              }
          }
        });
      },
    );
}
