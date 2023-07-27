import { Component } from "react";

function LatihanProps(props) {
    return <h3 className="text-2xl">Nama yang di ambil dari props : {props.text}</h3>
}

function PropsDidalamProps (props) {

    return <h1 className="text-5xl">Halo <LatihanProps text={props.text}/> dengan umur  {props.age}</h1>
}

class App extends Component {
    render() {
      return (
        <div className="testProps">
          <LatihanProps text="Senseii Kun"/>
          <br />
          <br />
          <PropsDidalamProps text="Pragoss" age="43"/>
        </div>
      )
    }
}
export default App;
