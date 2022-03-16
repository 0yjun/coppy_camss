import { useSelector } from 'react-redux';

export default function useMySelector(props) {
  //useSelector 훅과 shallowEqual을 사용한 것을 return해줍니다.
  return useSelector(state => state.commond);
}
