import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import MainOne from "./components/MainOne";
import MainSecond from "./components/MainSecond";
import Footer from "./components/Footer";


var leftArrow="<"
var rightArrow=">"

const employeeDetails = {
  name:"Alan Ford",
  employeeId: "00005152",
  appointment: "9:00(24-05-2016)",
  email:"alan.form@email.nl",
  phone:"+31123456789",
  status:"In Progress",
  door:"Mark",
  time:"10:30",
  date: "(25-05-2016)",
  profileImg:'https://www.w3schools.com/howto/img_avatar.png'

}


function App() {
  return (
    <div className="site-container">
    <Header 
      arrow = {leftArrow}
      name = {employeeDetails.name}
      employeeId = {employeeDetails.employeeId}
    />
    <MainOne 
      appointment = {employeeDetails.appointment}
      email = {employeeDetails.email}
      phone = {employeeDetails.phone}
    />
    <MainSecond 
      status = {employeeDetails.status}
      door = {employeeDetails.door}
      time = {employeeDetails.time}
      date = {employeeDetails.date}
    />

    <Footer
      profileImg = {employeeDetails.profileImg}
      arrow = {rightArrow}
    />
    {/* Start Your code here */}
    </div>
  );
}

export default App;
