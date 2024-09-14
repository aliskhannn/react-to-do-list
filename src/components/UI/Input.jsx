function Input({ ...props }) {
  return (
    <input
			className="input"
			autoFocus
			{...props} 
		/>
  );
}

export default Input;
