import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../actions';
import List from './List';

import AddForm from './addForm';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.addList = this.addList.bind(this);
    }

    componentDidMount() {
        // this.props.dispatch(actions.fetchLists());
    }

    addList(title) {
        this.props.dispatch(
            actions.addList({
                title,
                id: this.props.lists.length + 1
            })
        );
    }

    render() {
        const lists = this.props.lists.map(list => <List key={list.id} {...list} />);
        return (
            <div className="board">
                <Header />
                <div className="lists">
                    {lists}
                    <AddForm onAdd={this.addList} type="list" />
                </div>
            </div>
        );
    }
};


function mapStateToProps(state) {
    return state;
};

export default connect(mapStateToProps)(Board);
