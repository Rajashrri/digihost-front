import React from "react";

const Breadcrumb = ({ breadcrumb }) => {
  const title = breadcrumb[breadcrumb.length - 1];
  const shouldScroll = title.length > 30;

  return (
    <div className="breadcrumb">
      <div className="breadcrumb-title-wrap">
        <h2 className={shouldScroll ? "marquee-title" : ""}>{title}</h2>
      </div>

      <ul>
        {breadcrumb.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <a href="">{item}</a>
            </li>

            {index === breadcrumb.length - 2 && <li>||</li>}
            {index < breadcrumb.length - 2 && <li>|</li>}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;