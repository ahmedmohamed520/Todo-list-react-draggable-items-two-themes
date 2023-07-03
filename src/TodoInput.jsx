import React, { useState } from "react";
import { styled } from "styled-components";

const TodoInput = ({ addTaskHandler }) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [error, setError] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setError(false);
        if (taskTitle.trim().length > 0) {
            const task = { id: Date.now(), title: taskTitle, isCompleted: false };
            addTaskHandler(task);
            setTaskTitle("");
        } else {
            setError(true);
        }
    };
    return (
        <Wrapper className={` ${error && "error"}`} onSubmit={submitHandler}>
            <div className="circle"></div>
            <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                className={`input `}
                placeholder="Create a new todo..."
            />
        </Wrapper>
    );
};

const Wrapper = styled.form`
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    position: relative;

    .circle {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid var(--clr-gray-3);
        cursor: pointer;
        margin: 0 0.75rem 0 1rem;
        position: absolute;
    }
    .input {
        width: 100%;
        border: none;
        font-size: 1rem;
        color: var(--clr-gray-5);
        padding: 1rem;
        padding-left: 3.5rem;
        border-radius: 5px;
    }
    .input:focus {
        outline: none;
        box-shadow: 0 0 10px var(--clr-gray-5);
    }
    .input::placeholder {
        color: var(--clr-gray-5);
    }
    .error .input {
        border-color: red;
    }
`;

export default TodoInput;
