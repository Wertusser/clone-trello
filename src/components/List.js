import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import * as actions from '../actions/index';
import TrelloCard from './Card';
import AddForm from './addForm';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
                id: this.props.cards.length + 1
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
        const cards = this.props.cards.map((card, index) => <TrelloCard key={index} {...card} onSubmit={this.editCard} />);
        const {classes} = this.props;
        return (
            <Paper className={classes.list}>
                <h3>{this.props.title}</h3>
                {cards}
                <AddForm onAdd={this.addCard} type="card"/>
            </Paper>
        );
    }
};

List.defaultProps = {
    title: '',
    cards: []
};

export default withStyles(styles)(connect()(List));
