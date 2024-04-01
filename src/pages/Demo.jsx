import React, { useState } from 'react';

function EditableComponent({ objectToEdit, onSave }) {
  const [editedObject, setEditedObject] = useState(objectToEdit);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedObject({ ...editedObject, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedObject); // Push the edited object to props
  };

  return (
    <div>
      <h2>Edit Object</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editedObject.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={editedObject.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

function ParentComponent() {
  const initialObject = { name: 'Initial Name', description: 'Initial Description' };
  const [object, setObject] = useState(initialObject);

  const handleSave = (editedObject) => {
    setObject(editedObject); // Update state with edited object
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <EditableComponent objectToEdit={object} onSave={handleSave} />
      <div>
        <h2>Current Object</h2>
        <p>Name: {object.name}</p>
        <p>Description: {object.description}</p>
      </div>
    </div>
  );
}

export default ParentComponent;
