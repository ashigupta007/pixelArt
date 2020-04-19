import React from "react";
import "./styles.css";

class Pixel extends React.Component
{
    constructor(props)
    {
      super(props)
      this.state= {
        isActive : false,
        size : 3
      }
    } 
    onClickHandler =() =>
    {
      this.setState({isActive : true, backgroundColor: this.props.backgroundColor})
    }
    render(){
      return <div className="pixel" style={{backgroundColor: this.state.isActive ? this.state.backgroundColor : '#ffffff', borderColor:this.state.isActive ? this.state.backgroundColor : 'rgba(0,0,0,0.1)' }} onClick={()=>{this.onClickHandler()}}></div>
    }
}
class MainComponent extends React.Component
{
  constructor(props)
    {
      super(props)
      this.state = {
        backgroundColor : "#ff00ff"
      }
    } 
  componentDidMount = () =>
  {
    this.setState({nrows : 625})
  }
  changeColor=(colorCode)=> {
    this.setState({backgroundColor : colorCode})
  }

  render(){

    let layout = [...Array(this.state.nrows)].map((e, i) => <Pixel backgroundColor = {this.state.backgroundColor}/>)

    return <div className="maincontainer">
      <input type="color" id="favcolor" name="favcolor" value={this.state.backgroundColor} onChange={(e)=>{this.changeColor(e.target.value)}}></input>
      <div className="canvas" id="canvas">
        {layout}
      </div>
    </div>
  }
}
export default MainComponent