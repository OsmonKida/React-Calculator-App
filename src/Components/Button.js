import React from "react";

const Button = ({
  handleClear,
  handleButton,
  handleDelete,
  handleOperations,
  handleEqual,
  children,
}) => {
  const checkForOperator = (childrenVal) => {
    return (
      childrenVal === "+" ||
      childrenVal === "-" ||
      childrenVal === "*" ||
      childrenVal === "/"
    );
  };

  const checkForClearButton = (childrenVal) => {
    return childrenVal === "Clear";
  };

  const checkForDeleteButton = (childrenVal) => {
    return childrenVal === "Delete";
  };

  const checkForEqualButton = (childrenVal) => {
    return childrenVal === "=";
  };

  //Conditional rendering for different types of buttons
  if (checkForOperator(children)) {
    return (
      <button
        onClick={() => handleOperations(children)}
        className="operator-btn"
      >
        {children}
      </button>
    );
  }

  if (checkForClearButton(children)) {
    return (
      <button
        onClick={() => {
          handleClear();
        }}
        className="clear-btn"
      >
        {children}
      </button>
    );
  }

  if (checkForDeleteButton(children)) {
    return (
      <button
        className="delete-btn"
        onClick={() => {
          handleDelete();
        }}
      >
        {children}
      </button>
    );
  }

  if (children === "0") {
    return (
      <button className="zero-btn" onClick={() => handleButton(children)}>
        {children}
      </button>
    );
  }

  return (
    <button
      className="btn"
      onClick={() => {
        if (checkForEqualButton(children)) {
          handleEqual();
        } else {
          handleButton(children);
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
