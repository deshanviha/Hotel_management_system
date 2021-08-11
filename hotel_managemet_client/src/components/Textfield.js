import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Textfield(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField id="standard-search" label={props.text} type="number" color="secondary" />
                <FormHelperText>{props.spec}</FormHelperText>
            </div>
        </div>
    );
}
