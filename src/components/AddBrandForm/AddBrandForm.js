import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStateToProps';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class AddBrandForm extends Component {
    state = {
        newBrand: {
            brandName: '',
            brandLogo: ''
        },
        open: false
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (event) => {
        this.props.dispatch({ type: 'FETCH_SEARCH', payload: event.target.value })
        this.setState({
            newBrand: {
                brandName: event.target.value,
                brandLogo: this.props.reduxState.autocompleteReducer[0]?.logo
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'ADD_BRANDS', payload: this.state.newBrand })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>

                <Typography gutterBottom>Click to get the full Modal experience!</Typography>
                <Button onClick={this.handleOpen}>Add Brand</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                            Add A Brand Below!
                            </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Your favorite brands should populate as you type
                            </Typography>
                        <form onSubmit={this.handleSubmit}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={this.props.reduxState?.autocompleteReducer}
                                getOptionLabel={(option) => option.name}
                                style={{ width: 300, justifyContent: 'center' }}
                                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" onChange={(event) => this.handleChange(event, 'brandName')} />}

                            />

                            <Button type='submit'>Get Logo!</Button>
                        </form>
                    </div>
                </Modal>

            </div>
        )
    }
}

AddBrandForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStoreToProps)(AddBrandForm));


