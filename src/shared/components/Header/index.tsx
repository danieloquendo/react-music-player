import React from "react";
import "./Header.scss";

interface HeaderElement {
  rightTitle: string;
  lefTitle: string;
}

export const Header: React.FC<HeaderElement> = (props) => {
  return (
    <div className="app-header">
      <div className="row no-gutters">
        <div className="col-md-6">
          <p className="float-lef font-weight-bold m-0">{props.lefTitle}</p>
        </div>
        <div className="col-md-6">
          <p className="float-right m-0">{props.rightTitle}</p>
        </div>
      </div>
    </div>
  );
};
