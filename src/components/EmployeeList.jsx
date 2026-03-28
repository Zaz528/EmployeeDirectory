import EmployeeCard from './EmployeeCard';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
  return (
    <section className="employee-list-section">
      <div className="list-header">
        <h2 className="list-title">Équipe</h2>
        <span className="employee-count">{employees.length} membre{employees.length > 1 ? 's' : ''}</span>
      </div>
      
      {employees.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">👥</div>
          <p className="empty-message">Aucun employé enregistré pour le moment.</p>
        </div>
      ) : (
        <div className="employee-grid">
          {employees.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))}
        </div>
      )}
    </section>
  );
};

export default EmployeeList;