function FormLine({ inputTitle, children }) {
  return (
    <div className="FormLine">
      <div className="FormLine__info">
        <p className="FormLine__descriptionInput">{inputTitle}</p>
        {children}
      </div>
    </div>
  );
}

export default FormLine;
