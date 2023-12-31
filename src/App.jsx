import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { styled } from "styled-components";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import { tasks as data } from "./data";
import FooterLinks from "./FooterLinks";

const App = () => {
    const dragItem = useRef();
    const dragOverItem = useRef();

    const [tasks, setTasks] = useState(data);
    const [filter, setFilter] = useState("all");
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [numOfActiveTasks, setNumOfActiveTasks] = useState(0);
    const [theme, setTheme] = useState("light");

    let tasksCopy = JSON.parse(JSON.stringify(tasks));

    const addTaskHandler = (task) => {
        tasksCopy.push(task);
        setTasks(tasksCopy);
        filterTasksHandler("all");
    };
    const toggleMarkAsCompletedHandler = (index) => {
        tasksCopy[index].isCompleted = !tasksCopy[index]?.isCompleted;
        setTasks(tasksCopy);
    };
    const numOfActiveTasksHandler = useCallback(() => {
        let num = 0;
        tasks.forEach((task) => {
            if (task.isCompleted === false) num = num + 1;
        });
        setNumOfActiveTasks(num);
    }, [tasks]);

    const filterTasksHandler = useCallback(() => {
        const filteredTasks = tasks.filter((task) => {
            if (filter === "active") {
                return task.isCompleted === false;
            }
            if (filter === "completed") {
                return task.isCompleted === true;
            }
            return task;
        });
        setFilteredTasks(filteredTasks);
    }, [tasks, filter]);

    const clearCompletedHandler = () => {
        tasksCopy = tasksCopy.filter((task) => task.isCompleted === false);
        setTasks(tasksCopy);
    };

    const deleteTaskHandler = (id) => {
        tasksCopy = tasksCopy.filter((task) => task.id !== id);
        setTasks(tasksCopy);
    };

    const dragStart = (e, position) => {
        dragItem.current = position;
    };
    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    };
    const drop = (e) => {
        const dragItemContent = tasksCopy[dragItem.current];
        tasksCopy.splice(dragItem.current, 1);
        tasksCopy.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setTasks(tasksCopy);
    };
    // Effects
    useEffect(() => {
        numOfActiveTasksHandler();
        filterTasksHandler();
    }, [numOfActiveTasksHandler, filterTasksHandler]);

    return (
        <Wrapper className={`${theme}-theme`}>
            <img
                src="images/bg-desktop-light.jpg"
                alt="hero image"
                className="hero-image  light-hero-desktop"
            />
            <img
                src="images/bg-mobile-light.jpg"
                alt="hero image"
                className="hero-image  light-hero-mobile"
            />

            <img
                src="images/bg-desktop-dark.jpg"
                alt="hero image"
                className="hero-image  dark-hero-desktop"
            />
            <img src="images/bg-mobile-dark.jpg" alt="hero image" className="hero-image  dark-hero-mobile" />

            <div className="container">
                <Header setTheme={setTheme} theme={theme} />
                <TodoInput addTaskHandler={addTaskHandler} />
                <div className="todo-list">
                    {filteredTasks.map((task, index) => (
                        <TodoItem
                            key={task.id}
                            {...task}
                            index={index}
                            toggleMarkAsCompletedHandler={toggleMarkAsCompletedHandler}
                            deleteTaskHandler={deleteTaskHandler}
                            onDragStart={(e) => dragStart(e, index)}
                            onDragEnter={(e) => dragEnter(e, index)}
                            onDragEnd={drop}
                        />
                    ))}

                    <Footer
                        numOfActiveTasks={numOfActiveTasks}
                        setFilter={setFilter}
                        filter={filter}
                        clearCompletedHandler={clearCompletedHandler}
                    />
                </div>

                <div className="todo-list separated-links">
                    <FooterLinks filter={filter} setFilter={setFilter} />
                </div>
                <div className="text-gray text-center text-sm mt-3">Drag and drop to render list</div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;

    background-color: var(--bg-main);
    min-height: 100vh;

    .hero-image {
        position: absolute;
        height: 45vh;
        width: 100%;
        left: 0;
        top: 0;
        object-fit: cover;
        z-index: 1;
    }
    .todo-list {
        border-radius: 5px;
        background-color: var(--clr-gray-1);
        overflow: hidden;
        margin-bottom: 1.5rem;
        box-shadow: 0 0 25px var(--clr-gray-3);
    }
    .text-gray {
        color: var(--clr-gray-5);
    }
    .text-center {
        text-align: center;
    }
    .text-sm {
        font-size: 0.75rem;
    }
    .mt-3 {
        margin-top: 3rem;
    }
    .footer-links {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-self: end;
    }
    .separated-links {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        display: none;
    }
    @media only screen and (max-width: 704px) {
        .hero-image {
            object-fit: cover;
        }
        .desktop-links {
            display: none;
        }
        .separated-links {
            display: flex;
        }
        .btn {
            grid-column: 3/4;
        }
    }
`;

export default App;
