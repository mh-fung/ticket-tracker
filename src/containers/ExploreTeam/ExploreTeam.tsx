import { FormEvent, useState } from "react";
import employee from "../../types/employee"
import Employee from "../../components/Employee/Employee";
import SearchBox from "../../components/SearchBox/SearchBox";
import DropdownBox from "../../components/DropdownBox/DropdownBox";
import "./ExploreTeam.scss"

type ExploreTeamProps = {
    team: employee[];
};

const ExploreTeam = ({ team }: ExploreTeamProps) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value)
    }
    const [selectedRole, setSelectedRole] = useState("");

    const handleChange = (event: FormEvent<HTMLSelectElement>) => {
        if (selectedRole !== undefined) {
            setSelectedRole(event.currentTarget.value)
        }
    }
    const filteredTeam = team.filter(employee => {
        return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    }).filter((employee) => {
        if (selectedRole === "") {
            return employee
        } else {
        return employee.role === selectedRole
        }
    });
    const employees = filteredTeam.map((employee => {
        return <div key={employee.id}><Employee name={employee.name} role={employee.role} /></div>
    }))

    return (
        <div className="panel">
        <SearchBox searchTerm={searchTerm} label="Search by Name: " handleInput={handleInput}/>
        <DropdownBox label="Search by Role: " handleChange={handleChange}/>
        {employees}
        </div>
    )
};

export default ExploreTeam;