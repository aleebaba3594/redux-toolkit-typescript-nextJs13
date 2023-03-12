"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmountFive,
} from "../../Redux/Features/counter/counterSlice";
import { RootState } from "../../Redux/store";
import styles from "../../page.module.css";
export default function Comp1() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className={styles.main}>
        <p>its another comp</p>
      <button className={styles.button} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button className={styles.button} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(incrementByAmountFive(5))}
      >
        Increment by 5
      </button>
    </main>
  );
}
