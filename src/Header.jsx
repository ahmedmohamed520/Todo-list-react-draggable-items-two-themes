import React from "react";
import { styled } from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <h1 className="logo">Todo </h1>
            <div className="theme-switcher">
                <img src="images/icon-moon.svg" alt="moon" className="image show" />
                <img src="images/icon-sun.svg" alt="sun" className="image " />
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-bottom: 2rem;

    .logo {
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 6px;
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
