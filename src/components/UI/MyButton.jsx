/* eslint-disable react/prop-types */
function MyButton({ children, ...props }) {
  return (
		<button {...props}>
			{children}
		</button>	
	);
}

export default MyButton;
