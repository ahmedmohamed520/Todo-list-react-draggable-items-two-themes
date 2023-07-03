import React from "react";
import { styled } from "styled-components";

const TodoItem = ({ id, index, title, isCompleted, toggleMarkAsCompletedHandler, deleteTaskHandler }) => {
    return (
        <Wrapper className={isCompleted && "completed-task"}>
            <div
                onClick={() => {
                    toggleMarkAsCompletedHandler(index);
                }}
                className="todo-circle"
            ></div>
            <div
                onClick={() => {
                    toggleMarkAsCompletedHandler(index);
                }}
                className="todo-text"
            >
                {title}
            </div>
            <div
                onClick={() => {
                    deleteTaskHandler(id);
                }}
                className="todo-icon"
            >
                <img src="images/icon-cross.svg" alt="cross icon" />
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    background-color: #fff;
    border-bottom: 1px solid var(--clr-gray-3);
    padding: 1rem;
    cursor: pointer;

    .todo-text {
        flex-grow: 1;
    }
    .todo-circle {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid var(--clr-gray-3);
        cursor: pointer;
    }
    .todo-icon {
        display: none;
    }

    @media only screen and (max-width: 704px) {
        .todo-icon {
            display: flex;
            align-items: center;
            margin-left: auto;
            flex: 0 0 16px;
        }
        .todo-icon img {
            width: 80%;
        }
    }
`;

export default TodoItem;
