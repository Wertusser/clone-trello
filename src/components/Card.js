import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: "100%",
        minHeight: "50px",
        padding: "5px",
        background: "#fafafa",
        boxSizing: "border-box",
        marginBottom: "5px",
    }
};

class TrelloCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        };
        this.toggle = this.toggle.bind(this);
        this.checkSubmit = this.checkSubmit.bind(this);
    }

    toggle() {
        this.setState({
            isEditable: !this.state.isEditable
        });
    }

    checkSubmit(e) {
        if (e.key === 'Enter' || e.keyCode === 40) {
            this.toggle();
            this.props.onSubmit(e.target.value, this.props.id);
        }
    }

    render() {
        const { classes } = this.props;
        const focusField = (element) => element && element.focus();
        const editElement = this.state.isEditable ? (
            <div>
                <textarea ref={focusField}
                    defaultValue={this.props.text} onBlur={this.toggle} onKeyPress={this.checkSubmit} />
            </div>
        ) : (
            <div>
                <Typography component="p" onClick={this.toggle}>
                    {this.props.text}
                </Typography>
            </div>
            );

        return (
            <Card className={classes.card}>
                <div className="card-status">
                </div>
                {editElement}
            </Card >
        );
    };
}

export default withStyles(styles)(TrelloCard);

