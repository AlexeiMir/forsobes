import React from 'react';
import './App.css';

const Error = () => {
  return <div style={{border: "1px solid red"}}>
    Не получилось удалить объект. Доавить еще?
  </div>
}

const Success = () => {
  return <div style={{border: "2px solid green"}}>
    Добавить еще премию?
  </div>
}

const Tiger = () => {
  return <div >
    <img src={"https://st50.stblizko.ru/images/product/312/027/079_medium.jpg"}/>
  </div>
}


    const Confirm = (props) => {
        return <div style={{padding:"10px", border: "1px solid black", width:"200px" }}>
          <br/>
            {props.children}
          <br/>
          <br/>
          <button onClick={()=>{props.onOkClick()}} >OK</button>
          <button onClick={()=>{props.onCancelClick()}}>Cancel</button>
        </div>
    }



 /*const ConfirmedError = withConfirm(Error)
 const ConfirmedSuccess = withConfirm(Success)
 const ConfirmedTiger = withConfirm(Tiger)*/


class App extends React.Component {
    state = {
        error: true,
        success: true,
        tiger: true
    }


    render(){
  return (
    <div className="App">
     {this.state.error&&<Confirm onOkClick={()=>{alert("NO");this.setState({error: false}) } }
                                       onCancelClick={()=>{this.setState({error: false})}}>
         <Error/></Confirm>}
        <br/>
        <br/>
        {this.state.success&&<Confirm onOkClick={()=>{alert("Success");this.setState({success: false})}}
                                              onCancelClick={()=>{this.setState({error: false})}}>
        <Success/></Confirm>}
        <br/>
        {this.state.tiger&&<Confirm onOkClick={()=>{alert("Tiger");this.setState({tiger: false})}}
                                          onCancelClick={()=>{this.setState({error: false})}}>
        <Tiger/></Confirm>}
    </div>
  );
    }
}

export default App;
