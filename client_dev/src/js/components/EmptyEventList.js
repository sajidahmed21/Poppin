import React from 'react';

const EmptyEventList = props => (
    <div className='height-sizer'>
        <div className='event-list'>
            <div className='error'>
                <span>{props.text}</span>
                {props.icon !== false && (
                    <i className={'fa ' + props.icon}></i>
                )}
            </div>
        </div>
    </div>
);

export default EmptyEventList;
