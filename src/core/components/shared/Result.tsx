import React, { FC } from 'react';

interface ResultProps {
  content: string;
}

const Result: FC<ResultProps> = ({ content }) => {
  return <div className="calc-result">{content}</div>;
};

export default Result;
