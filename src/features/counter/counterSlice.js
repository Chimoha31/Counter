import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
}

// 第一引数に名前、第二引数にinitialState、その後にinitialStateを変更していくからreducersを第三引数にとる。
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
});

// storeの中のreducerに持ってくまでにactionsが必要＝{increment, decrementr}をactionsによってstoreに渡す。
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;
// reducer＝変える。storeに中にあるreducer＝{increment, decrementr}は変更される値だから。
export default counterSlice.reducer