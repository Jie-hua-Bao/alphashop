import React from "react";


export function Input({ id, type, name, placeholder }) {
  return <input id={id} type={type} name={name} placeholder={placeholder} />;
}
export function Label({ forinputid, labelname = "" }) {
  return <label for={forinputid} className={labelname}></label>;
}
export function Select({ value, option }) {
  return (
    <select>
      <option value={value}>{option}</option>
    </select>
  );
}
