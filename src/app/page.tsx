"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./Redux/Features/counter/counterSlice"; //counter slice
import { changeName } from "@/app/Redux/Features/name/nameSlice"; //name slice
import { RootState } from "./Redux/store"; // store
import styles from "./page.module.css";
import Comp1 from "./components/comp1/Comp1";
import Comp2 from "./components/comp2/Comp2";
export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const name = useSelector((state: RootState) => state.name.value);

  const dispatch = useDispatch();
  return (
    <main className={styles.main}>
      <button className={styles.button} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <span>name is ({name})</span>
      <button
        className={styles.button}
        onClick={() => dispatch(changeName("ASAD"))}
      >
        change name
      </button>
      <button className={styles.button} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment by 2
      </button>
      <Comp1 />
      <Comp2 />
    </main>
  );
}
