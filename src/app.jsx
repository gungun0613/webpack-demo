import React from "react";
import "./index.css";

class App extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1 className="red-color">{title}</h1>
      </div>
    );
  }
}

export default App;
