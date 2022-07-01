import React from 'react';

interface HeaderParams {
  value: string;
}

const Header: React.FC<HeaderParams> = ({ value }) => {
  return <p className="text-4xl text-center">{value}</p>;
};

export default Header;
