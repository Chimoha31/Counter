import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
}

// 第一引数に名前、第二引数にinitialState、その後にinitialStateを変更していくからreducerを第三引数にとる。
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducer: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});

// storeの中のreducerに持ってくまでにactionsが必要＝{increment, decrementr}をactionsによってstoreに渡す。
export const {increment, decrementr} = counterSlice.actions;
// reducer＝変える。storeに中にあるreducer＝{increment, decrementr}は変更される値だから。
export default counterSlice.reducer