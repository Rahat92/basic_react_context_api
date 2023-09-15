import React, { useState } from "react";
interface AlertProps{
  children: React.ReactNode;
  color: string;
}

const Alert = ({ children, color }: AlertProps) => {
  const [display, setDisplay] = useState("flex");
  return (
    <div
      onClick={(e) => {
        setDisplay("none"); // not working for child elements
      }}
      style={{
        width: "100vw",
        height: "100vh",
        display: display,
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0,0,0,.5)",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          position: "absolute",
          top: "50%",
          background: color,
          padding: "1rem",
          borderRadius: "5px",
          left: "50%",
          margin: "0 auto",
          transform: "translateY(-50%) translateX(-50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Alert;
