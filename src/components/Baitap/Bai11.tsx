import React, { Component } from 'react';

interface Props {}
interface State {
  isHovered: boolean;
}
export default class Bai11 extends Component<Props, State> {
  constructor(props:Props){
    super(props)
    this.state={
      isHovered: false
    }
  }
  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };
  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };
  render() {
    return (
      <div>
        <button onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} > Hover </button>
        <div style={{backgroundColor: 'blue', width: '100px', height: '30px', opacity: this.state.isHovered ? 1 : 0 }}>button</div>
      </div>
    )
  }
}