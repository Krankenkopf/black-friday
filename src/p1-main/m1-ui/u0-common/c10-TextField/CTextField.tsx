import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";

export const CTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#ffffcc',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#dd0000',
            borderWidth: '3px',
        },
        '& .MuiFormHelperText-root': {
            fontFamily: 'inherit',
            fontSize: '13px',
            color: '#cc0000',
            animation: 'blinking 2s infinite'
        },
        '& .MuiInputBase-root': {
            '&.Mui-error helperText': {
                color: '#cc0000',

            }
        },
    },
})(TextField)