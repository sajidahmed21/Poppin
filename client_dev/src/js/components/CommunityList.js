import React from 'react';

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
            selected: new Set()
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

    }

    componentDidMount() {
        this.setState({
            'community-list-style': {
                height: window.innerHeight - document.querySelector('.community-list-items').offsetTop
            },
            communities: Dummy.communities
        });
    }

    render() {
        return (
            <div className='community-list'>
                <Input
                    type='text'
                    hint='Search communities...'
                    onChange={this.onSearch}
                />
                <div className='community-list-items' style={this.state['community-list-style']}>
                    {Object.keys(this.state.communities).map((key) => (
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
