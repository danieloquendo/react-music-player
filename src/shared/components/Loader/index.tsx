import React from "react";
import "./Loader.scss";

export const Loader: React.FC = () => {
  return (
    <div className="center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
