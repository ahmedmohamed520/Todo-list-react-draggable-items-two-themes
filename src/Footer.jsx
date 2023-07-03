import React from "react";
import { styled } from "styled-components";
import FooterLinks from "./FooterLinks";

const Footer = ({ numOfActiveTasks, setFilter, filter, clearCompletedHandler }) => {
    return (
        <Wrapper>
            <div className="todo-footer">
                <div className="text-gray text-sm">{numOfActiveTasks} items left</div>
                <div className="desktop-links">
                    <FooterLinks filter={filter} setFilter={setFilter} />
                </div>
                <button onClick={clearCompletedHandler} className="text-gray text-sm btn">
                    Clear Completed
                </button>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    .todo-footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
    .btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--clr-gray-5);
        justify-self: end;
    }

    @media only screen and (max-width: 704px) {
        .todo-footer {
            justify-content: space-between;
        }
    }
`;
export default Footer;
