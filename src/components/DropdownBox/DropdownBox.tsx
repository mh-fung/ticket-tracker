import "./DropdownBox.scss"
import { FormEventHandler } from "react";

type DropdownBoxProps = {
    label: string;
    handleChange: FormEventHandler<HTMLSelectElement>;
}

const DropdownBox = ({label, handleChange}: DropdownBoxProps) => {
    return (
        <div className="dropdownBox">
            <label htmlFor="roles">{label}</label>
            <select id="roles" onChange={handleChange}>
                <option value=""></option>
                <option value="Junior Software Developer">Junior Software Developer</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Senior Software Developer">Senior Software Developer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Tester">Tester</option>
                <option value="Hard Man">Hard Man</option>
            </select>
        </div>
    )

};

export default DropdownBox;