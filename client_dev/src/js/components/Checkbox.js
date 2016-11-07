import React from 'react';

export default class Checkbox extends React.Component {
    constructor(props) {
        super();

        /* Initialize blank state. */
        this.state = {
            checked: (typeof props.selected === 'undefined' ? false : props.selected)
        };

        this.change = this.change.bind(this);
    }

    change() {
        this.setState({checked: !this.state.checked}, () => {
            if (this.props.onChange) {
                this.props.onChange(this.props.id, this.state.checked);
            }
        });
    }

    render() {
        return (
            <div className={'checkbox ' + (this.state.checked ? 'checked' : 'unchecked')} onClick={this.change}></div>
        );
    }
}
