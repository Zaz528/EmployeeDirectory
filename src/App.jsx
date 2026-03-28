import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";


function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jean Paul",
      position: "Développeur Senior",
      department: "Ingénierie",
      status: "Actif",
    },
    {
      id: 2,
      name: "Marie Claude",
      position: "Product Manager",
      department: "Produit",
      status: "Inactif",
    }
  ]);

  const addEmployee = (newEmployee) => {
    const employeeWithId = { ...newEmployee, id: Date.now() };
    setEmployees([...employees, employeeWithId]);
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Gestion RH</h1>
          <p className="app-subtitle">Consultez et gérez les profils de votre équipe.</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="app-grid">
            {/* Section Formulaire - Mise en avant pour l'ajout */}
            <aside className="app-sidebar">
              <div className="section-card">
                <h2 className="section-title">Nouvel Employé</h2>
                <EmployeeForm addEmployee={addEmployee} />
              </div>
            </aside>

            {/* Section Liste - Zone principale d'affichage */}
            <section className="app-content">
              <EmployeeList employees={employees} />
            </section>
          </div>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2026 Entreprise RH - Workshop React & Git</p>
      </footer>
    </div>
  );
}

export default App;