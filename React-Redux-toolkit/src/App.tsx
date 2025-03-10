import "./App.css";
import MyComp from "./MyComp.tsx";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
// import { increment } from "./redux/slices";
import { increment, decrement } from "./redux/slices/index.ts";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Increment</button>

      <MyComp />
    </>
  );
}

export default App;
