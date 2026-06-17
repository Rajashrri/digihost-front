import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ breadcrumb = [] }) => {
  return (
    <section className="breadcrumbsec">
      <div className="container">
        <ul>
          {breadcrumb.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <Link to={item.link}>{item.name}</Link>
              ) : (
                <span>{item.name}</span>
              )}

              {index !== breadcrumb.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;