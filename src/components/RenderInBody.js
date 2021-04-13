import React from 'react'
import ReactDOM from "react-dom"
export class RenderInBody extends React.Component{
  constructor (props) {
    super(props)
    this.popup = document.createElement("div")
    console.log(this.popup)
    document.body.appendChild(this.popup);
  }

  
  componentWillUnmount () {
    React.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
  }

  render() {
    // Render a placeholder
    ReactDOM.render(this.props.children, this.popup)
    return null
  }

}