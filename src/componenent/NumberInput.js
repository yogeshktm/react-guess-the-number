function NumberInput(props) {
  return (
    <form className="guess-form" onSubmit={props.onSubmit}>
      <input
        id="mainInput"
        type="number"
        onChange={props.onChange}
        disabled={props.attempts === props.maxAttempts ? true : false}
      />
      <button
        className="btn"
        disabled={props.attempts === props.maxAttempts ? true : false}
      >
        Check
      </button>
    </form>
  );
}

export default NumberInput;
