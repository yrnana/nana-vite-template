import React from 'react';

const Button: React.FC = ({ children }) => {
  return (
    <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
      {children}
    </button>
  );
};

export default Button;
