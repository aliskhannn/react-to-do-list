function MyInput({ ...props }) {
  return (
    <input
			className="input"
			autoFocus
			{...props} 
		/>
  );
}

export default MyInput;
