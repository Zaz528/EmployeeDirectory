import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { initialEmployees } from "./data/employees"; // Importation des données isolées
import "./App.css";


function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  // Logique d'ajout simplifiée
  const addEmployee = (newEmployee) => {
    setEmployees(prev => [...prev, { ...newEmployee, id: Date.now() }]);
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
            {/* Formulaire - Section Sidebar */}
            <aside className="app-sidebar">
              <div className="section-card">
                <h2 className="section-title">Nouvel Employé</h2>
                <EmployeeForm addEmployee={addEmployee} />
              </div>
            </aside>

            {/* Liste - Section Contenu Principal */}
            <section className="app-content">
              <EmployeeList employees={employees} />
            </section>
          </div>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2026 Entreprise CloZaz - SA</p>
      </footer>
    </div>
  );
}

export default App;