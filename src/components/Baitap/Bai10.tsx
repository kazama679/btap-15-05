import React, { Component } from 'react';

interface Props {}
interface State {
    gender: string;
}
export default class Bai10 extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            gender: 'Nam',
        };
    }
    toggleButton = () => {
        const genders = ['Nam', 'Nữ', 'Khác'];
        const randomGender = genders[Math.floor(Math.random() * genders.length)];
        this.setState({
            gender: randomGender
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.toggleButton}>Random gender</button>
                <p>{this.state.gender}</p>
            </div>
        );
    }
}