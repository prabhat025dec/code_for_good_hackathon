import './App.css';
import Report from './pages/Chart'
import LineChart from './pages/LineChart1'
import LineChart1 from './pages/LineChart2'
import LineChart3 from './pages/LineChart3'
import LineChart4 from './pages/LineChart4'
import PieChart1 from './pages/PieChart';
import Calendar1 from './pages/CalendarChart';

function App() {
  return (
    <div className="App" style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
      <h2 style={{align:"center", color:"white", paddingTop:"2%"}}>Dashboard</h2>
      <Report /> 
      <PieChart1 />
      <Calendar1 />
      <LineChart />
      <LineChart1 />
      <LineChart3 />
      <LineChart4 />
    </div>
  );
}

export default App;
