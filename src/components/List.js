import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import * as actions from '../actions/index';
import TrelloCard from './Card';
import AddForm from './addForm';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { uniq_key } from '../utils';

const styles = theme => ({
    list: {
        width: "200px",
        padding: "5px",
        flexShrink: 0,
        display: "flex",
        margin: "0 7px",
        flexDirection: "column",
        background: "#f2f2f2",
    }
});

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this)
        this.editCard = this.editCard.bind(this)
    }

    addCard(text) {
        this.props.dispatch(
            actions.addCard({
                text,
                listId: this.props.id,
                id: uniq_key('card')
            })
        );
    }

    editCard(text, card_id) {
        this.props.dispatch(
            actions.editCard({
                text,
                listId: this.props.id,
                id: card_id
            })
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.list}>
                <h3>{this.props.title}</h3>
                <Droppable droppableId={`${this.props.id}`}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                        >
                            {this.props.cards.map((card, index) => (
                                <Draggable key={card.id} draggableId={card.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <TrelloCard key={index} {...card} onSubmit={this.editCard} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <AddForm onAdd={this.addCard} type="card" />
            </Paper>
        );
    }
};

function mapStateToProps(store, ownProps) {
    console.log(ownProps)
    return {
        cards: store.lists[ownProps.id -1].cards
    }
}

export default withStyles(styles)(connect(mapStateToProps)(List));
