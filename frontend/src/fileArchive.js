import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

const Archive =() =>{
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // console.log('sss')
     
      try {
        fetch('http://localhost:3001/archives/uploads/supplysense')
        .then(response => response.json())
        .then(data => {
          const result=data;
          console.log(result,'ppp')
          setData(result);
        })
        .catch(error => console.error(error));
        // Replace 'https://api.example.com/tabledata' with the actual endpoint
       // const response = fetch('http://localhost:3001/json');
       // console.log(response,'rrr')
       
      //  d=Data;
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
      
    };

    fetchData();
  }, []);
    return(
        <div>
      <div className="full-width-border">
          <Container className="container">
            Archives
          </Container>
        </div>
        </div>
    )

};
export default Archive