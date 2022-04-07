import React, {useEffect, useState} from 'react';
import './Postview.css';
import Header from "./components/Header";
import Post from "./components/Post";


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
const date = currentDate.getDate()+' '+ months[currentDate.getMonth()]+' '+currentDate.getFullYear();

const Postview=()=> {

  const [data,usedata] = useState([])

  const getData = async() => {
    let response = await fetch(`http://localhost:3004/user`);
    let currentData = await response.json();
    usedata(currentData);
  }


  useEffect(() => {getData()}, []);

  return (
    <div className="site-container">
      <Header/>
      {data.map((content,index) => {
        return (
          <Post 
            key = {index}
            name = {content.name}
            location = {content.location}
            like = {content.likes}
            description = {content.description}
            image = {content.PostImage}
            date = {date}
          />
        )
      })}
    </div>
  );
}

export default Postview;
