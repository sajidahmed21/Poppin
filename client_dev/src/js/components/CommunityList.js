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
            communities: {},
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

    componentDidMount() {
        this.setState({ communities: update(this.state.communities, {
            $merge: Dummy.communities
        }) });
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
                    {Object.keys(this.state.communities).filter((key) => (
                        this.state.search === '' || (
                            this.state.communities[key].name.toLowerCase().indexOf(this.state.search) >= 0 ||
                            this.state.communities[key].description.toLowerCase().indexOf(this.state.search) >= 0
                        )
                    )).map((key) => (
                        <CommunityListItem
                            key={key}
                            id={key}
                            name={this.state.communities[key].name}
                            description={this.state.communities[key].description}
                            onSelected={this.onCommunityClick}
                            selected={this.state.selected.has(key)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
