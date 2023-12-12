import { FormEvent, useState } from "react";
import employee from "../../types/employee"
import Employee from "../../components/Employee/Employee";
import SearchBox from "../../components/SearchBox/SearchBox";

type ExploreTeamProps = {
    team: employee[];
};

const ExploreTeam = ({ team }: ExploreTeamProps) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value)
    }
    const filteredTeam = team.filter(employee => {
        return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const employees = filteredTeam.map((employee => {
        return <div key={employee.id}><Employee name={employee.name} role={employee.role} /></div>
    }))

    return (
        <>
        <SearchBox searchTerm={searchTerm} label="Search by Name " handleInput={handleInput}/>
        {employees}
        </>
    )
};

export default ExploreTeam;