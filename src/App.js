import React from 'react'
import FormInput from './components/FormInput'
import TodoItem from './components/TodoItem';
import logo from './logo.svg'
import './App.css'
class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Sholat Subuh berjamaah"
      },
      {
        id: 2,
        title: "Baca Quran"
      }
    ]
  }

  // fungsi hapus, fungsi ini akan diakses ketika tombol hapus di klik
  deleteTask = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  }

  // fungsi tambah data
  addTask = (data) => {
    const newTask = {
      id: this.state.todos.length + 1,
      title: data
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  }

  // Fungsi untuk mengedit tugas
  editTask = (id, newTitle) => {
    this.setState({
      todos: this.state.todos.map(item =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {todos.map(item =>
            // kirim props ke komponen TodoItem
            <TodoItem key={item.id} todo={item} del={this.deleteTask} />
          )}
        </div>
        <div className="input-form">
          <FormInput addTask={this.addTask} />
        </div>
      </div>
    );
  }
}

export default App;


