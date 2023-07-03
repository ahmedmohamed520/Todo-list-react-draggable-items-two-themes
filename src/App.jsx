import React from "react";

const App = () => {
    return (
        <Wrapper className={`light-theme`}>
            <div className="hero-section">
                <img src="images/bg-desktop-light.jpg" alt="hero bg" className="hero-image desktop" />
                <img src="images/bg-mobile-light.jpg" alt="hero bg" className="hero-image mobile" />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

export default App;
