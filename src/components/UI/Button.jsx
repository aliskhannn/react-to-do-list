/* eslint-disable react/prop-types */
function Button({ children, ...props }) {
  return (
		<button {...props}>
			{children}
		</button>	
	);
}

export default Button;
