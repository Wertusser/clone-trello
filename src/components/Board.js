import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../actions';
import List from './List';
import { DragDropContext } from 'react-beautiful-dnd';
import AddForm from './addForm';
import { reorder } from '../utils';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.addList = this.addList.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount() {
        // this.props.dispatch(actions.fetchLists());
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
          }
        if (result.destination.droppableId === result.source.droppableId){
            const list =  this.props.lists[parseInt(result.destination.droppableId) -1]
            const cards = reorder(
                list.cards,
                result.source.index,
                result.destination.index
              );
              this.props.dispatch(actions.reorderCard(cards));
        }
        else {
            console.log(2)
        }
    }

    addList(title) {
        this.props.dispatch(
            actions.addList({
                title,
                id: this.props.lists.length + 1,
                cards: []
            })
        );
    }

    render() {
        const lists = this.props.lists.map(list => <List key={list.id} {...list} />);
        return (
            <div className="board">
                <Header />
                <div className="lists">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        {lists}
                    </DragDropContext>
                    <AddForm onAdd={this.addList} type="list" />
                </div>
            </div>
        );
    }
};


function mapStateToProps(store) {
    return {
        lists: store.lists
    };
};

export default connect(mapStateToProps)(Board);
