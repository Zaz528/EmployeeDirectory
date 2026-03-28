import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

 function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jean Paul",
      position: "Développeur",
      department: "IT",
      status: "Actif",
    },
    {
      id: 2,
      name: "Marie Claude",
      position: "Manager",
      department: "RH",
      status: "Inactif",
    }
  ]);

  // Fonction pour ajouter un nouvel employé
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="app-container">
      <h1>Liste des employés</h1>

      {/* Liste des employés */}
      <EmployeeList employees={employees} />

      {/* Formulaire pour ajouter un employé */}
      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}
export default App;
