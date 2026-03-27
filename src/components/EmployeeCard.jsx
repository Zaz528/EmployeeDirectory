import './EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
  const { name, position, department, status } = employee;
  
  const statusClass = status.toLowerCase() === 'actif' ? 'status-active' : 'status-inactive';

  return (
    <div className="employee-card">
      <div className="card-accent"></div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="employee-name">{name}</h3>
          <span className={`status-badge ${statusClass}`}>
            {status}
          </span>
        </div>
        
        <div className="employee-details">
          <div className="detail-item">
            <span className="detail-label">Poste</span>
            <span className="detail-value">{position}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Departement</span>
            <span className="detail-value">{department}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;