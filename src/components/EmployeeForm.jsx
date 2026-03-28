import { useState } from "react";
import "./EmployeeForm.css";

export default function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

  
    const newEmployee = {
      id: Date.now(),    
      name: name,
      position: position,
      department: department,
      status: "Actif",     
    };
    

    addEmployee(newEmployee);

    setName("");
    setPosition("");
    setDepartment("");
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Ajouter un employé</h2>

      <input
        type="text"
        placeholder="Nom de l'employé"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Poste"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Departement"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}
