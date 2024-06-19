function FormInput({ labelText, name, type, error }) {
  return (
    <div>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">{labelText}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder="Type here"
          className={`input input-bordered w-full ${error}`}
        />
      </label>
    </div>
  );
}

export default FormInput;
