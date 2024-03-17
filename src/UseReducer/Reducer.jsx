import { useReducer } from "react";

const initial = [];

function redu(state, action) {
  switch (action.type) {
    case "add":
      console.log("added");
      return [
        ...state,
        {
          id: Date.now(),
          sno: state.length + 1,
          name: action.dataToAdd,
          details: action.detailsAdded,
        },
      ];

    case "delete":
      console.log("deleted");
      return state.filter((u) => u.id !== action.deleteTask);

    case "edit":
      console.log("edit");
      return state.map((u) =>
        u.id === action.edited.id
          ? { ...u, name: action.edited.name, details: action.edited.details }
          : u
      );

    default:
      console.log("default case");
      return state;
  }
}

const Reducer = () => {
  const [states, dispatch] = useReducer(redu, initial);

  // --------------------------- Add -------------------------------------

  // function handleChange(e) {
  //   if (e.key === "Enter") {
  //     if (e.target.valuef)
  //       dispatch({ type: "add", dataToAdd: e.target.value });
  //     else alert("input should not be empty");
  //   }
  // }

  // function handleChange() {
  //   const a = prompt("Enter Task");
  //   const b = prompt("Enter details");
  //   dispatch({ type: "add", dataToAdd: a, detailsAdded: b });
  // }

  function handleChange() {
    dispatch({
      type: "add",
      dataToAdd: prompt("Enter Task"),
      detailsAdded: prompt("Enter details"),
    });
  }

  // ----------------------------- Delete -----------------------------------

  function deleteTask(id) {
    dispatch({ type: "delete", deleteTask: id });
  }

  // ------------------------------- Edit ---------------------------------

  // function editTask(a) {
  //   const x = prompt("Enter name", a.name);
  //   const y = prompt("Enter details", a.details);

  //   dispatch({ type: "edit", edited: { name: x, details: y, id: a.id } });
  // }

  function editTask(a) {
    dispatch({
      type: "edit",
      edited: {
        name: prompt("Enter name", a.name),
        details: prompt("Enter details", a.details),
        id: a.id,
      },
    });
  }

  // ----------------------------------------------------------------

  return (
    <div>
      {/* <input type="text" onKeyDown={handleChange} required /> */}
      <button onClick={handleChange}>+ Add task</button>
      <h1>{states.length}</h1>
      {states.map((a) => (
        <div key={a.id} style={{ display: "flex" }}>
          <h1>
            {a.sno} : {a.name} , {a.details}
          </h1>
          <button onClick={() => deleteTask(a.id)}>Del</button>
          <button onClick={() => editTask(a)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Reducer;
