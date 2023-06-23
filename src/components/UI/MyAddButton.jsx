/* eslint-disable react/prop-types */
function MyAddButton({ onClick }) {
  return (
    <button className="add-button" onClick={() => onClick(true)}>
      Add new task
      <span className="material-symbols-outlined">add</span>
    </button>
  );
}

export default MyAddButton;
