import "./App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList, getCounter, setCounterPlus } from "./state/todoState";
import { setCounterMinus } from "./state/todoState";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoList = useSelector(getTodoList);
  const counterList = useSelector(getCounter);
  // const [todoItem, setTodoItem] = useState([
  //   {
  //     id: 1,
  //     name: "Name1",
  //     counter: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "Name2",
  //     counter: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "Name3",
  //     counter: 0,
  //   },
  // ]);

  return (
    <>
      <div>home</div>
      {todoList &&
        todoList.map((todo, idx) => {
          return (
            <div key={`div0${idx}`}>
              <div
                key={`div1${idx}`}
                style={{ border: "1px solid black", padding: "4px" }}
              >
                <span
                  key={`span1${idx}`}
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                >
                  {todo.name}
                </span>
                <span
                  key={`span2${idx}`}
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                >
                  Votes
                </span>
                <button
                  key={`button1${idx}`}
                  onClick={() => dispatch(setCounterPlus(idx))}
                >
                  +
                </button>
                <span key={`span3${idx}`}>{counterList[idx].vote}</span>
                <button
                  key={`button2${idx}`}
                  onClick={() => dispatch(setCounterMinus(idx))}
                >
                  -
                </button>
                <button
                  key={`button3${idx}`}
                  style={{ marginLeft: "10px" }}
                  onClick={() => navigate(`/detail/${todo.id}`)}
                >
                  detail
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default App;
