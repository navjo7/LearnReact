import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' 
import UserOutput from './UserOutput/UserOutput' 
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    persons: [
      {name:"navjot", age: 29},
      {name: "yoyo", age:21},
      {name: "snoop", age:4}
    ],
    userName:"navjo7"
  }
  switchNameHandler = (newName)=>{
    console.log("inside switch handler")
    this.setState({
      persons: [{
          name: "navjot",
          age: 29
        },
        {
          name: newName,
          age: 21
        },
        {
          name: "snoop",
          age: 5
        }
      ]
    })
  }

  nameChangedHandler = (event)=>{
    this.setState({
      persons: [{
          name: "navjot",
          age: 29
        },
        {
          name: event.target.value,
          age: 21
        },
        {
          name: "snoop",
          age: 5
        }
      ]
    })
  }

  
  userNameChangedHandler = (userName)=>{
    this.setState({
      persons: [{
            name: "navjot",
            age: 29
          },
          {
            name: "yoyo",
            age: 21
          },
          {
            name: "snoop",
            age: 4
          }
        ],
        userName: userName
    })
  }

  userInputHandler = (event) => {
    this.setState({
      persons: [{
          name: "navjot",
          age: 29
        },
        {
          name: "yoyo",
          age: 21
        },
        {
          name: "snoop",
          age: 4
        }
      ],
      userName: event.target.value
    })
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    const outputStyle = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1> hi , how are you</h1>
        <p> this a paragraph</p>
        <button 
        style = {style}
        onClick = {()=>{
          return this.switchNameHandler("Garry sidhu")
        }}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
        />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "singh")}
          changed = {this.nameChangedHandler}>
           I am a singer
        </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}
        />
        <UserOutput
        style = {outputStyle}
           username = {this.state.userName} 
           click = {this.userNameChangedHandler.bind(this,"navjotTheLegend")}/>
        <UserOutput 
          username = {this.state.userName}
          click = {this.userNameChangedHandler.bind(this,"haha user")}/>
        <UserInput userName = {this.state.userName}
        change = {this.userInputHandler}
        />
      </div>
    )

    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'it works now'))
  }
}

export default App;
