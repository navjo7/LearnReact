import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' 
import Radium,{StyleRoot} from 'radium'
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

    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color:'black'
      }
    }

    let persons = null

    if(this.state.showPersons){

      persons = (
        <div>
          {
            this.state.persons.map((person,index)=>{
              return <Person 
                click = {this.deletePersonHandler.bind(this,index)}
                name = {person.name}
                age = {person.age}
                key = {person.id}
                changed = {(event)=>{
                  this.nameChangedHandler(event,person.id)
                }}
                />
            })
          }
        </div>
      )
      style.backgroundColor = "red"
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = []
    if(this.state.persons.length <=2){
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return (
      <StyleRoot>
        <div className="App">
        <h1> hi , how are you</h1>
        <p className={classes.join(' ')}> this a paragraph</p>
        
        <button 
          style = {style}
          onClick = {this.togglePersonHandler}>Toggle Name
        </button>
        {persons}
      </div>
      </StyleRoot>
    )

    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'it works now'))
  }
}

export default Radium(App);
