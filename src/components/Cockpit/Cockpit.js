import React from 'react'
import classes from './Cockpit.css'
const cockpit = (props) => {

    let assignedClasses = []
    let btnClass = ''
    if(props.showPersons){
        btnClass = classes.Red

    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return(
        <div>
            <h1> hi , how are you</h1>
            <p className={assignedClasses.join(' ')}> this a paragraph</p>
            
            <button  className={btnClass}
            onClick = {props.clicked}>Toggle Name
            </button>
        </div>
       
    )
}

export default cockpit