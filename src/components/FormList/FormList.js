import React from "react";

function Formlist({ title, name, onSubmit, disabled, children, handleReset }) {
  return (
    <div className="FormList__container">
      <h2 className="Formlist__title">{title}</h2>

      <form name={name} onSubmit={onSubmit} noValidate>
        <div className="FormList__form">{children}</div>
        <button
          onClick={handleReset}
          type="reset"
          aria-label="reset"
          className="FormList__button"
        >
          Очистить
        </button>
        <button
          type="submit"
          aria-label="registrationButton"
          disabled={disabled}
          className="FormList__button"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Formlist;
