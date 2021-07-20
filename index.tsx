import react from 'React';
import { useFusionTable, useSetState } from 'ahooks';
import { Field, } from '@fpxfd/next';


import {
  State,
} from './index.interface';
import {
  getPageList,
} from './index.services';
import styles from './index.module/scss';

const demo = () => {
  const [state, setState] = useSetState<State>({});

  const field = Field.useField();
  const { paginationProps, tableProps, search, loading, refresh } = useFusionTable(getPageList, {
    field,
    defaultPageSize: 20,
    debounceInterval: 500,
  });
  const { submit, reset } = search;


  return <>demo</>;
};