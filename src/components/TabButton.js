import React from 'react'

function TabButton({ active, selectTab, children }) {
    const buttonClasses = active
    ? "text-white border-b border-indigo-500"
    : "text-gray-500";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  );
}

export default TabButton