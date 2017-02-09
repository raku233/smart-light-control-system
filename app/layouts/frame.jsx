import React from 'react';

class Frame extends React.Component {
  render() {
    return (
      <div className="frame">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Frame;