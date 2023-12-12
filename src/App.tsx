import team from './data/team'
import "./App.scss"
import ExploreTeam from './containers/ExploreTeam/ExploreTeam'


const App = () => {
  return (
    <div className="app">
      <header className="header">Ticket Tracker</header>
      <section className="employees-container">
        <ExploreTeam team={team}/>
      </section>
      
    </div>
  )
}

export default App
