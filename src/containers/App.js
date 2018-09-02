import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person' 
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
// import UserOutput from './UserOutput/UserOutput' 
// import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    persons: [
      {name:"navjot", age: 29, id:1},
      {name: "yoyo", age:21, id:2},
      {name: "snoop", age:4, id:3}
    ],
    userName:"navjo7",
    showPersons: false
  }

  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id === id
    })

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (index)=>{
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(index,1)
    this.setState({persons: persons})
  }
  togglePersonHandler = ()=>{
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }
  render() {

    let persons = null
    if(this.state.showPersons){
      persons = 
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
    }

    
    return (
      <div className={classes.App}>
        <Cockpit
          showPerson = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}
        />
        {persons}
      </div>
    )

    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'it works now'))
  }
}

export default App;
