import React, { Component } from 'react';

class PhoneForm extends Component {
    state={
        name:'',
        phone:''
    }

handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
}

handleSubmit=(e)=>{
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
        name:'',
        phone:''
    })
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="이름을 입력하세요"  value={this.state.name} onChange={this.handleChange} name='name'/>
                <input type="text" placeholder='전화번호를 입력하세요' value={this.state.phone} onChange={this.handleChange} name='phone'/>
                <div>{this.state.name}</div>
                <div>{this.state.phone}</div>
                <button type='submit'>등록</button>
            </form>
        );
    }
}

export default PhoneForm;