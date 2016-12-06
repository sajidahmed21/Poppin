import React from 'react';
import update from 'immutability-helper';

import Input from 'muicss/lib/react/input';

import CommunityListItem from './CommunityListItem';

import Dummy from '../lib/Dummy';

export default class CommunityList extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            'community-list-style': {},
            selected: new Set(),
            search: ''
        };

        this.onCommunityClick = this.onCommunityClick.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onCommunityClick(communityId, newCheckState) {
        if (newCheckState) {
            if (!this.state.selected.has(communityId)) {
                this.state.selected.add(communityId);
            }
        } else {
            if (this.state.selected.has(communityId)) {
                this.state.selected.delete(communityId);
            }
        }

        this.forceUpdate();
    }

    onSearch(e) {
        this.setState(update(this.state, {
            $merge: {
                search: e.target.value.trim().toLowerCase()
            }
        }));
    }

    render() {
        return (
            <div className='community-list'>
                <Input
                    type='text'
                    hint='Search communities...'
                    onChange={this.onSearch}
                />
                <div className='community-list-items'>
                    {this.props.communities && Object.keys(this.props.communities).filter((key) => (
                        (this.state.search === '' || (
                            this.props.communities[key].name.toLowerCase().indexOf(this.state.search) >= 0 ||
                            this.props.communities[key].description.toLowerCase().indexOf(this.state.search) >= 0
                        )) && (typeof this.props.filter === 'undefined' || this.props.filter(this.props.communities[key]))
                    )).map((key) => (
                        <CommunityListItem
                            key={key}
                            id={key}
                            name={this.props.communities[key].name}
                            description={this.props.communities[key].description}
                            onSelected={this.onCommunityClick}
                            onClick={() => {
                                if (this.props.onCommunitySelect) {
                                    this.props.onCommunitySelect(key);
                                }
                            }}
                            selected={this.state.selected.has(key)}
                            private={this.props.communities[key].private === true}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
