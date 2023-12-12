import team from './data/team'
import "./App.scss"
import Employee from './components/Employee/Employee'


const App = () => {
const employees = team.map((employee) => {
  return <div key={employee.id}><Employee name={employee.name} role={employee.role}/></div>
})
  return (
    <div className="app">
      <header className="header">Ticket Tracker</header>
      <section className="employees-container">
        {employees}
      </section>
    </div>
  )
}

export default App
