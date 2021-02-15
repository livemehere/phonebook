import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps={
        list:[]
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.data !== this.props.data;
    }
    render() {
        console.log('yes');
        const list = this.props.data.map(
            info => <PhoneInfo onDelete={this.props.onDelete}key={info.id} info={info}/>
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;