import "./RadioButtonGroup.css";

function RadioButtonGroup(props) {
  return (
    <div>
      <label className="tableElement">
        <input
          type="radio"
          value="Marine Life"
          checked={props.selectedOption === "Marine Life"}
          onChange={props.handleChange}
        />
        Marine Life
      </label>

      <label className="tableElement">
        <input
          type="radio"
          value="Fashion Designers"
          checked={props.selectedOption === "Fashion Designers"}
          onChange={props.handleChange}
        />
        Fashion Designers
      </label>

      <label className="tableElement">
        <input
          type="radio"
          value="Minimalist"
          checked={props.selectedOption === "Minimalist"}
          onChange={props.handleChange}
        />
        Minimalist
      </label>

      <label className="tableElement">
        <input
          type="radio"
          value="Musicians"
          checked={props.selectedOption === "Musicians"}
          onChange={props.handleChange}
        />
        Musicians
      </label>
    </div>
  );
}

export default RadioButtonGroup;
