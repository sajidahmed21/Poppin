import React from 'react';

export default class DatePicker extends React.Component {
    constructor(props) {
        super();

        /* Initialize blank state. */
        this.state = {
            epoch: new Date().getTime() / 1000
        };

        this.show = this.show.bind(this);
    }

    show() {
        DateTimePicker.show({
            mode: 'date'
        }).then(date => {
            DateTimePicker.show({
                mode: 'time'
            }).then(time => {
                this.setState({
                    epoch: new Date(date.year, date.month, date.day, time.hour, time.minute).getTime() / 1000
                });
            });
        });
    }

    render() {
        const attrs = {
            readOnly: 'readOnly'
        };

        return (
            <div className='mui-textfield'>
                <input
                    className='datepicker-input'
                    {...attrs}
                    onClick={this.show}
                    placeholder={this.placeholder || ''}
                    value={moment.unix(this.state.epoch).format(this.props.format || 'MMM. Do YYYY, h:mm:ss a')}
                />
                {this.props.label && (
                    <label style={{transition: '0.15s ease-out'}}>{this.props.label}</label>
                )}
            </div>
        );
    }
}
