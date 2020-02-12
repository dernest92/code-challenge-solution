import React from "react";
import Input from "../input/input.component.jsx";
import CustomButton from "../button/button.component";

const fields = [
  {
    name: "First Name",
    value: "",
    required: true
  },
  {
    name: "Last Name",
    value: "",
    required: true
  },
  {
    name: "Address",
    value: "",
    required: true
  },
  {
    name: "Address 2",
    value: "",
    required: false
  }
];

class UserForm extends React.Component {
  state = { fields };

  handleChange = e => {
    const { name, value } = e.target;
    const fields = [...this.state.fields];
    const field = { ...fields.find(f => f.name === name) };
    const index = fields.findIndex(f => f.name === name);
    field.value = value;
    fields.splice(index, 1, field);
    this.setState({ fields });
  };

  handleSubmit = e => {
    e.preventDefault();

    const fields = this.state.fields.map(f => {
      f.error = f.required && f.value === "";
      return f;
    });

    this.setState({ fields });

    if (fields.every(f => !f.error)) {
      const fieldValues = this.state.fields.map(f => `${f.name}: ${f.value}`);
      alert(JSON.stringify(fieldValues, null, 2));
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.fields.map(field => (
          <Input
            field={field}
            handleChange={this.handleChange}
            key={field.name}
          />
        ))}
        <CustomButton iconRight="arrow-right">Next</CustomButton>
      </form>
    );
  }
}

export default UserForm;
