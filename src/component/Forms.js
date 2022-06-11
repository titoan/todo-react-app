import React from "react";

export class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      textItems: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.noteDown = this.noteDown.bind(this);
    this.saveList = this.saveList.bind(this);
    this.delItem = this.delItem.bind(this);
  }

  componentDidUpdate() {
    this.saveList();
  }

  componentDidMount() {
    if (localStorage.getItem("list")) {
      const list = JSON.parse(localStorage.getItem("list"));
      this.setState({ textItems: list });
    }
  }

  saveList() {
    localStorage.setItem("list", JSON.stringify(this.state.textItems));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  noteDown(e) {
    e.preventDefault();
    if (this.state.value.length === 0) {
      return;
    }

    const newItem = {
      text: this.state.value,
      id: Date.now(),
    };

    this.setState((state) => ({
      textItems: state.textItems.concat(newItem), //Добавление элементов в массив должно происходить при помощи метода concat потому, что тот возвращает новый массив, а не видоизменяет текущий
      value: "",
    }));
  }

  delItem(e) {
    let listItems = JSON.parse(localStorage.getItem("list"));
    listItems = listItems.filter((el) => el.id != e.target.id);
    this.setState({
      textItems: listItems,
      value: "",
    });
  }

  clearList() {
    localStorage.clear();
  }

  render() {
    return (
      <Forms
        textItems={this.state.textItems}
        value={this.state.value}
        noteDown={this.noteDown}
        handleChange={this.handleChange}
        delItem={this.delItem}
      />
    );
  }
}

class Forms extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-list">
        <MyNote text={this.props.textItems} delItem={this.props.delItem} />
        <label>
          <input
            type="text"
            name="name"
            className="all-input"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </label>
        <input type="submit" value="Note down" onClick={this.props.noteDown} />
        <input type="submit" value="Clear list" onClick={this.clearList} />
      </form>
    );
  }
}

class MyNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.text.map((item) => (
          <p key={item.id} className="list-item">
            {item.text}
            <span
              onClick={this.props.delItem}
              id={item.id}
              className="del-item"
            ></span>
          </p>
        ))}
      </div>
    );
  }
}
