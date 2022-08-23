import { Button } from 'antd';
import axios from 'axios';
import client from '../src/lib/api/client';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Validator } from './validator';

const SearchBar = (props: any) => {
  const { searchBtn } = props;
  const { setData } = props;
  const searchBarRef = useRef<any>(null);
  const { pathname } = useLocation();

  const fn_search = async (e: any) => {
    const childrenNodes = searchBarRef.current.children;
    let option: any = {};
    for (let item of childrenNodes) {
      if (item.value) {
        option[item.id] = item.value;
      }
    }
    const validator = new Validator(
      [
        {
          COL_NM: 'cd',
          MSG: '코드를 입력학세요',
          OPTION: 'required',
          VALUE: 60,
          TYPE: '',
        },
        {
          COL_NM: 'upCd',
          MSG: '상위코드를 입력학세요',
          OPTION: 'max',
          VALUE: 100,
          TYPE: 'string',
        },
      ],
      [{ cd: 'usr01' }, { cd: 'usr02' }, { cd: 'usr03', upCd: 'usr' }],
    );
    console.log('validator.validate()', validator.isValid());
    const param = JSON.stringify(option)
      .replace(/{|}|"/gi, '')
      .replace(/:/gi, '=')
      .replace(/,/gi, '&&');
    console.log(param);
    try {
      const response = await client.get(`/comn/comncode?${param}`);
      console.log('response : ', response);
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
