import React from "react";

//компонент выпадающего списка (date, nationality)
function DropDownList({
  nameSelect,
  value,
  optionValue,
  handleChange,
  children,
}) {
  return (
    <select
      className="DropDownList"
      name={nameSelect}
      value={value}
      onChange={handleChange}
    >
      <option value="">{optionValue}</option>
      {children}
    </select>
  );
}

export default DropDownList;
