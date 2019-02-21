import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", currentItem: { text: "", key: "" } };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Lista</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">Registrar contacto</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Añadir</button>
        </form>
        <TodoList
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
        />
      </div>
    );
  }

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({
      items: filteredItems
    });
  };

  updateItem = (id, newtext) => {

  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
}

class TodoList extends React.Component {
  removeItem(id) {
    this.props.deleteItem(id);
  }
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id} id={item.id}>
            <p id="texta">{item.text}</p>
            <button onClick={() => this.removeItem(item.id)}>Eliminar</button>|
            <button onClick={() => this.updateItem(item.id, "hola")}>
              Actualizar
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default TodoApp;
