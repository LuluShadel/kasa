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
    const rotateIconClass = isOpen ? 'rotate-icon' : ''; 

    return (
      <div className="menu">
        <div className="collapse" onClick={this.toggleCollapse}>
          <p>{title}</p>
          <i className={`fa fa-chevron-up ${rotateIconClass}`} />
        </div>
        {isOpen && ( 
          <div className={`menu_Hide`}>
            <p>{text}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Collapse;












