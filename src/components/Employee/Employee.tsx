import "./Employee.scss";
import Counter from "../Counter/Counter";

type EmployeeProps = {
    name: string;
    role: string;
};

const Employee = ({name, role}: EmployeeProps) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Role: {role}</p>
            <Counter />
        </div>
    );
};
export default Employee;