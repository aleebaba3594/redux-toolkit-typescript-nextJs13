import { RootState } from "@/app/Redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "@/app/Redux/Features/name/nameSlice";

function Comp2() {
  const name = useSelector((state: RootState) => state.name.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>name is ({name}) </h1>
      <button
        onClick={() => {
          dispatch(changeName("ALI"));
        }}
      >
        CHANGE NAME
      </button>
    </div>
  );
}

export default Comp2;
