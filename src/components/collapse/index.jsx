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

    return (
      <div className="menu">
        <div className="collapse" onClick={this.toggleCollapse}>
          <p>{title}</p>
          <i className={`fa fa-chevron-up ${rotateIconClass}`} />
        </div> 
        {isOpen ? ( 
          <div className={"menu_Hide"}>
            <ul>
              <li>{text}</li>
              </ul>
          </div>
        ) : <div className="menu_Hide closed">
        <ul>
          <li>{text}</li>
        </ul>
      </div>}
      </div>
    );
  }
}

export default Collapse;












