import React, {useState,useEffect} from 'react';
import './App.css';

const Error = (props) => {
  return <div style={{border: "1px solid red"}}>
    Не получилось удалить объект через {props.counter} Доавить еще?
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
    let [counter, setCounter] = useState(10);

    useEffect( () => {
            setInterval( () => {setCounter((c) => c-1)},1000)
        },[])


        return <div style={{padding:"10px", border: "1px solid black", width:"200px" }}>
          <br/>
            {props.renderContent(counter)}
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
     {this.state.error&&<Confirm renderContent={(counter)=><Error counter={counter}/>} onOkClick={()=>{alert("NO");this.setState({error: false}) } }
                                       onCancelClick={()=>{this.setState({error: false})}}/>
         }
        <br/>
        <br/>
        {this.state.success&&<Confirm renderContent={()=><Success/>} onOkClick={()=>{alert("Success");this.setState({success: false})}}
                                              onCancelClick={()=>{this.setState({error: false})}}/>
        }
        <br/>
        {this.state.tiger&&<Confirm renderContent={()=><Tiger/>} onOkClick={()=>{alert("Tiger");this.setState({tiger: false})}}
                                          onCancelClick={()=>{this.setState({error: false})}}/>
        }
    </div>
  );
    }
}

export default App;
