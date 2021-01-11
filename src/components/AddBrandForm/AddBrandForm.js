import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStateToProps';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { ThemeProvider, Button, Grid } from '@material-ui/core';
import theme from '../../theme';



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
            <ThemeProvider theme={theme}>
                <Grid container spacing={8}>
                    <Grid item xs='12' >
                        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
                        <Button variant='contained' color='primary' onClick={this.handleOpen}>Add Brand!</Button>
                    </Grid>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <Grid item xs={12}>
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
                                        renderInput={(params) => <TextField {...params} label="Brand Name" variant="outlined" onChange={(event) => this.handleChange(event, 'brandName')} />}

                                    />

                                    <Button variant='contained' color='secondary' type='submit'>Get Logo!</Button>
                                </form>
                            </div>
                        </Grid>
                    </Modal>
                </Grid>
            </ThemeProvider>
        )
    }
}

AddBrandForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStoreToProps)(AddBrandForm));



