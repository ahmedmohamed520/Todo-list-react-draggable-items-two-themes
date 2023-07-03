import React from "react";
import { styled } from "styled-components";

const Header = ({ setTheme, theme }) => {
    return (
        <Wrapper>
            <h1 className="logo">Todo </h1>
            <div className="theme-switcher">
                <img
                    onClick={() => setTheme("dark")}
                    src="images/icon-moon.svg"
                    alt="moon"
                    className={`image ${theme === "light" && "show"}`}
                />
                <img
                    onClick={() => setTheme("light")}
                    src="images/icon-sun.svg"
                    alt="sun"
                    className={`image ${theme === "dark" && "show"}`}
                />
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--clr-gray-1);
    margin-bottom: 2rem;

    .logo {
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 6px;
        color: #fff;
    }
    .theme-switcher {
        cursor: pointer;
    }
    .image {
        display: none;
    }
    .show {
        display: block;
    }
`;

export default Header;
