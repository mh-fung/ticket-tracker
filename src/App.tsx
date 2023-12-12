import team from './data/team'
import './App.css'
import Employee from './components/Employee/Employee'


const App = () => {
//map method on team(i.e. employee[]): a call back function to create an array of employee components?

const teamTSX = team.map((employee) => {
  return <div key={employee.id}> <Employee name={employee.name} role={employee.role}/></div>
})
  return (
    <div>
      <header>Ticket Tracker</header>
      <section className="container">
        {teamTSX}
      </section>
    </div>
  )
}

export default App
