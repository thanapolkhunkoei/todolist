import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 50%;
    box-shadow: -2px 15px 32px -5px rgba(0, 0, 0, 0.67);
    height: auto;
    .header {
      background-color: red;
      color: white;
      padding: 1rem 1rem;
    }
    .content {
      padding: 2rem;
      .body {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .right-box {
        width: 5rem;
        display: flex;
        justify-content: space-around;

        button {
          background-color: white;
          padding: 0.3rem;
          border-radius: 10px;
          border: 1px solid rgba(225, 225, 225, 0.67);
        }
      }
      .todo-list {
        display: flex;
        flex-direction: column;
        margin: 1rem;
      }
      .list {
        margin: 0.7rem 0;

        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(225, 225, 225, 0.67);
        padding-bottom: 10px;
        .checkbox-round {
          margin-right: 10px;
          width: 1.3em;
          height: 1.3em;
          background-color: white;
          border-radius: 50%;
          vertical-align: middle;
          border: 1px solid #ddd;
          appearance: none;
          -webkit-appearance: none;
          outline: none;
          cursor: pointer;
        }
        .checkbox-round:checked {
          background-color: black;
        }
      }
      .input-box {
        width: 100%;
        input {
          width: 100%;
          height: 10rem;
          border-radius: 10px;
          border: 1px solid rgba(225, 225, 225, 0.67);
          ::placeholder {
            position: absolute;
            top: 20px;
            left: 20px;
          }
        }
        .button-box {
          margin-top: 0.8rem;
          button {
            margin-right: 10px;
            background-color: red;
            color: white;
            font-weight: bold;
            padding: 10px 15px;
            border-radius: 10px;
            border: 1px solid rgba(225, 225, 225, 0.67);
          }
          .button2 {
            background-color: white;
            color: black;
          }
        }
      }
    }
  }
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  const handleReset = (e) => {
    setTodos([]);
    setCompleted(0);
  };

  const toggleCompleted = (id) => {
    const updateTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.Completed;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  // console.log(todos);
  // console.log(todo);

  const checked = () => {
    if (completed < 5) {
      setCompleted(completed + 1);
      if (completed === 4) {
        alert("success");
      }
    }

    console.log(completed);
    console.log(todo.id);
  };

  return (
    <Container>
      <div className="box">
        <div className="header">
          <h3>Todo List</h3>
        </div>
        <div className="content">
          <div className="body">
            <h4>Today</h4>
            <div className="right-box">
              <p>{`${completed}/5`}</p>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
          <div className="todo-list">
            {todos.map((todo) => (
              <>
                <div className="list">
                  <input
                    className="checkbox-round"
                    onClick={checked}
                    onChange={() => toggleCompleted(todo.id)}
                    type="checkbox"
                    checked={todo.completed}
                  />

                  <div key={todo.id}>{todo.text}</div>
                </div>
              </>
            ))}
          </div>
          <div className="input-box">
            <form onSubmit={handleSubmit}>
              <input
                value={todo}
                type="text"
                placeholder="สิ่งที่อยากจะทำ....."
                onChange={(e) => setTodo(e.target.value)}
              />
              <div className="button-box">
                <button type="submit">Add task</button>
                <button className="button2">Cancle</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
