import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps={
        info:{
            name:'이름',
            phone:'010-0000-0000',
            id:0
        }
    }
    handleDelete=()=>{
        this.props.onDelete(this.props.info.id);
    }
    render() {
        const style ={
            border: '1px solid black',
            padding:'8px',
            margin:'8px'
        }
        return (
            <div style={style}>
                <div><b>{this.props.info.name}</b></div>
                <div>{this.props.info.phone}</div>
                <button onClick={this.handleDelete}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;