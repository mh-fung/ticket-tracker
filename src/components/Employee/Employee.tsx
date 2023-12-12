import "./Employee.scss";
import Counter from "../Counter/Counter";

type EmployeeProps = {
    name: string;
    role: string;
};

const Employee = ({name, role}: EmployeeProps) => {
    return (
        <div className="employee-container">
            <p className="employee__content">Name: {name}</p>
            <p className="employee__content">Role: {role}</p>
            <Counter />
        </div>
    );
};
export default Employee;