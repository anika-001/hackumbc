import React from 'react';

function minion(props) {
    return props.courses.map(function(course) {
      return (
        <div key={course.id}>
          <span>
            <a href={course.url}><h4>{course.title}</h4></a>
          </span>
          <span>by <strong>ok</strong></span>
          <span>| Video Hours: </span>

          <br/><br/>
        </div>
      );
    }); 
  }
  
  export default minion;