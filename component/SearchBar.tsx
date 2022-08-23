import { Button } from 'antd';
import axios from 'axios';
import client from '../src/lib/api/client';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchBar = (props: any) => {
  const { searchBtn } = props;
  const { setData } = props;
  const searchBarRef = useRef<any>(null);
  const { pathname } = useLocation();

  type validator = {
    COL_NM: string;
    MSG: string;
    OPTION: string;
  };
  const confirmSave = (array: Array<object>, validator: validator) => {
    array.every((el: object) => {
      el.hasOwnProperty(validator.COL_NM);
    });
  };

  const fn_search = async (e: any) => {
    const childrenNodes = searchBarRef.current.children;
    let option: any = {};
    for (let item of childrenNodes) {
      if (item.value) {
        option[item.id] = item.value;
      }
    }
    const param = JSON.stringify(option)
      .replace(/{|}|"/gi, '')
      .replace(/:/gi, '=')
      .replace(/,/gi, '&&');
    console.log(param);
    try {
      //const response = await client.get(`/${pathname}?${param}`);
      const response = await client.get(`/comn/comncode?${param}`);
      //const saveResponse = await client.post(`/comn/comncode/save`, [
      //   { cd: 'test03', cdNm: 'test코드3' },
      //   { cd: 'test04', cdNm: 'test코드4' },
      // ]);
      console.log('response : ', response);
      /*테스트 실행*/
      confirmSave(response.data, {
        COL_NM: 'cd',
        MSG: '코드는 필수입니다',
        OPTION: 'required',
      });
      /*테스트 종료*/
      setData(response.data);
    } catch (error) {
      console.log('error : ', error);
    }
  };
  return (
    <>
      <div style={{ border: '2px solid red' }} ref={searchBarRef}>
        {props.children}
      </div>
      {searchBtn || <Button onClick={fn_search}>조회</Button>}
    </>
  );
};

export default SearchBar;
