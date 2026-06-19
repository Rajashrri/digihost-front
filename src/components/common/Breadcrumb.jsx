import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ breadcrumb }) => {
  const title = breadcrumb[breadcrumb.length - 1].breadtitle;

  return (
    <div className="breadcrumb">
      <h2>{title}</h2>

      <ul>
        {breadcrumb.map((item, index) => {
          const isLast = index === breadcrumb.length - 1;

          return (
            <React.Fragment key={index}>
              <li>
                {isLast ? (
                  <span>{item.breadtitle}</span>
                ) : (
                  <Link to={item.link}>{item.breadtitle}</Link>
                )}
              </li>

              {!isLast && (
                <li>{index === breadcrumb.length - 2 ? "||" : "|"}</li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;