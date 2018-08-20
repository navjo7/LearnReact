import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person' 
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
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
    let btnClass = ''
    if(this.state.showPersons){

      persons = (
        <div>
          {
            this.state.persons.map((person,index)=>{
              return <ErrorBoundary> 
                <Person
                  click = {this.deletePersonHandler.bind(this,index)}
                  name = {person.name}
                  age = {person.age}
                  key = {person.id}
                  changed = {(event)=>{
                    this.nameChangedHandler(event,person.id)
                  }}
                  
                />
                </ErrorBoundary>
            })
          }
        </div>
      )

      btnClass = classes.Red
    }

    let assignedClasses = []
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }
    return (
      <div className={classes.App}>
        <h1> hi , how are you</h1>
        <p className={assignedClasses.join(' ')}> this a paragraph</p>
        
        <button  className={btnClass}
          onClick = {this.togglePersonHandler}>Toggle Name
        </button>
        {persons}
      </div>
    )

    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'it works now'))
  }
}

export default App;
