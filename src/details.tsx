import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoList, getCounter } from "./state/todoState";

interface IProps {}

const Details: FC<IProps> = (props) => {
  const { id } = useParams();
  const todoList = useSelector(getTodoList);
  const votes = useSelector(getCounter);
  const navigate = useNavigate();
  return (
    <>
      <div>Details</div>
      <p>id: {id} </p>
      <p>name : {todoList[id - 1].name}</p>
      <p>vote : {votes[id - 1].vote}</p>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};

export default Details;
