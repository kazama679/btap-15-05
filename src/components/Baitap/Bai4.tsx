import React, { Component, ChangeEvent } from 'react';

interface Props {}
interface State {
    value: string;
}
export default class Bai4 extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: "Hà Nội",
        };
    }
    handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        return (
            <div>
                <select id="country" name="country" onChange={this.handleChange}>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Hà Nam">Hà Nam</option>
                    <option value="Ninh Bình">Ninh Bình</option>
                    <option value="Thanh Hóa">Thanh Hóa</option>
                </select>
                <p>Tỉnh / Thành phố : {this.state.value}</p>
            </div>
        );
    }
}