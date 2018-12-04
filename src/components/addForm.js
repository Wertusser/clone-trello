import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        // margin: theme.spacing.unit,
        width: "100%"
    },
    textField: {
        outline: "none",
        boxSizing: "border-box",
        width: "100%"
    },
    textFieldBoard: {
        outline: "none",
        boxSizing: "border-box",
        width: "100%"
    }
});

export class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        console.log(this)
        event.preventDefault();
        const text = this.textInput.value.trim();

        if (text) {
            this.props.onAdd(text);
            this.textInput.value = '';
        }
    }

    render() {
        // <textarea title="Text" ref={ref => this.textInput = ref} />
        const { classes } = this.props;
        const input = this.props.type === 'card' ?
            <TextField
                id="standard-multiline-flexible"
                multiline
                rowsMax="4"
                placeholder="Добавить Карточку"
                className={classes.textField}
                inputRef={ref => this.textInput = ref}
                onSubmit={this.onSubmit}
                autoComplete='off'
            /> :
            <TextField
                id="standard-bare"
                className={classes.textFieldBoard}
                placeholder="Добавить Доску"
                inputRef={ref => this.textInput = ref}
                onSubmit={this.onSubmit}
                autoComplete='off'
            />
        return (
            <Card >
                <form onSubmit={this.onSubmit}>
                    {input}
                    <Button variant="contained" type="submit" aria-label="Add" color="primary"
                        className={classes.button}>
                        +
                    </Button>
                </form>
            </Card>
        );
    }
};

export default withStyles(styles)(connect()(AddForm));
