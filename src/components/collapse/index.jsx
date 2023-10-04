import './collapse.scss';
import React, { Component } from 'react';

class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { title, text } = this.props;
    const { isOpen } = this.state;
    const rotateIconClass = isOpen ? 'rotate-icon' : 'rotate-icon-closed'; 

    let content;

    if (typeof text === 'string') {
      // Si text est une chaîne de caractères, afficher le texte.
      content = <p>{text}</p>;
    } else if (Array.isArray(text)) {
      // Si text est un tableau, générez une liste à partir de ses éléments.
      content = (
        <ul>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    return (
      <div className="menu">
        <div className="collapse" onClick={this.toggleCollapse}>
          <p>{title}</p>
          <i className={`fa fa-chevron-up ${rotateIconClass}`} />
        </div>
        {isOpen ? (
          <div className={"menu_Hide"}>{content}</div>
        ) : (
          <div className="menu_Hide closed">{content}</div>
        )}
      </div>
    );
  }
}

export default Collapse;


















