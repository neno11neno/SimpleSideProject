import React, { FC } from 'react';

interface CalcButtonProps {
  onClick: () => void;
  action: string;
}

const CalcButton: FC<CalcButtonProps> = ({ onClick, action }) => {
  let btnClass = "";

  action.match(/\+|-|\*|\/|=/)
    ? (btnClass = "operator-btn btn")
    : action === "c"
    ? (btnClass = "c-btn btn")
    : (btnClass = "number-btn btn");

  return (
    <button className={btnClass} onClick={onClick}>
      {action}
    </button>
  );
};

export default CalcButton;
