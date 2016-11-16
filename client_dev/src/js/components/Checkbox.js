import React from 'react';

export default class Checkbox extends React.Component {
    constructor(props) {
        super();

        /* Initialize blank state. */
        this.state = {
            checked: (typeof props.selected !== 'boolean' ? false : props.selected),
            initial: true
        };

        this.change = this.change.bind(this);
    }

    change() {
        this.setState({
            checked: !this.state.checked,
            initial: false
        }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.props.id, this.state.checked);
            }
        });
    }

    render() {
        return (
            <div className={'checkbox ' + (this.state.checked ? (
                    this.state.initial ? 'checked-static' : 'checked'
                ) : 'unchecked')} onClick={this.change}></div>
        );
    }
}
