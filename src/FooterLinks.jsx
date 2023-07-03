import React from "react";

const FooterLinks = ({ filter, setFilter }) => {
    return (
        <div className="footer-links">
            <a
                onClick={(e) => {
                    e.preventDefault();
                    setFilter("all");
                }}
                href="/"
                className={`footer-link ${filter === "all" && "active-link"}`}
            >
                All
            </a>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    setFilter("active");
                }}
                href="/"
                className={`footer-link ${filter === "active" && "active-link"}`}
            >
                Active
            </a>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    setFilter("completed");
                }}
                href="/"
                className={`footer-link ${filter === "completed" && "active-link"}`}
            >
                Completed
            </a>
        </div>
    );
};

export default FooterLinks;
