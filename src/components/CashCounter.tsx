import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CashDefaultStateType } from '../Store/types/reducer.types.ts';

import Button from '../ui/Button.tsx';


const CashCounter = (): ReactElement => {
  const dispatch = useDispatch();
  const cashState: CashDefaultStateType = useSelector((state: { cash: CashDefaultStateType }) => state.cash);
  const cash: number = cashState.cash;
  
  const debitCash = (cash: number): void => {
    dispatch({ type: "DEBIT_CASH", payload: cash });
  };
  
  const creditCash = ( cash: number): void => {
    dispatch({ type: "CREDIT_CASH", payload: cash });
  };
  
  return (
    <>
      <h2 className={"counter"}>$ {cash}</h2>
      <div className={"btns"}>
        <Button cb={debitCash} text={'Debit'}/>
        <Button cb={creditCash} text={'Credit'}/>
      </div>
    </>
  );
};

export default CashCounter;
