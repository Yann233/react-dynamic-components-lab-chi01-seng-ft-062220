import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }



  render() {
     console.log(this.props.opacity)
    return (
      // Should expect a single prop (an opacity value), which can be used in the component 
      // via: this.props.opacity. This prop is first passed in src/App.js
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity = {this.props.opacity - 0.1} /> : null}
      </div>
// If the opacity value is greater than or equal to 0.2:
// the ColorBox component should render another ColorBox inside itself (recursive components!)
// an opacity prop should be passed to the child
// the passed opacity prop should be reduced by 0.1
// If the opacity value is less than 0.2:
// do not render another ColorBox (or else we would have infinite ColorBoxes rendering!)
// instead, the render method should return null
)
  }



  //另一个方法
  // render() {
  //   if (this.props.opacity >= 0.2){
  //   return (
  //     <div className="color-box" style={{opacity: this.props.opacity} }>
  //       <ColorBox opacity={this.props.opacity - 0.1}/>
  //     </div>
  //   )
  //   } else {
  //     return null
  //   }
  // }
}