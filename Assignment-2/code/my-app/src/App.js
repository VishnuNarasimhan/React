import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
    <Card 
      img = {employee.profileImg}
      name = {employee.name}
      location = {employee.location}
      bloodGroup = {employee.bloodGroup}
      age = {employee.age}
      
    />
</div>
)
}



export default App;
