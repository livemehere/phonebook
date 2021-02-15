import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
id=0;
state={
  impormation:[
    
  ],
  keyword:''
}

  onCreate =(data)=>{
    console.log(data);
    this.setState({impormation:this.state.impormation.concat({id:this.id++, ...data})})
  }

  handleRemove=(id)=>{
    this.setState({impormation:this.state.impormation.filter((info)=>info.id!==id)})
  }

  handleChange=(e)=>{
    this.setState({keyword:e.target.value});
    
  }

  render() {
    const filteredList = this.state.impormation.filter(info =>info.name.indexOf(this.state.keyword) !== -1)

    return (
      <>
        <PhoneForm onCreate={this.onCreate}/>
        <div><input type="text" value={this.state.keyword} onChange={this.handleChange}/></div>
        <PhoneInfoList data={filteredList} onDelete={this.handleRemove}/>
        
      </>
    );
  }
}

export default App;