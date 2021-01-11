import { createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#66bb6a'
        },
        secondary: {
            main: '#00b0ff',
            contrastText: '#47824a'
        }
    }
})

theme.props = {
    MuiButton: {
        disableElevation: true,
    },
    MuiGrid: {
        item: true,
        container: false,
    }
}

theme.overrides = {
    MuiButton: {
        root: {
            borderRadius: 0,
            textTransform: 'none'
        },
        containedPrimary: {
            '&:hover': {
                backgroundColor: '#00b0ff',
                color: '#66bb6a'
            }
        },
        containedSecondary: {
            fontWeight: 700
        }
    }
}

export default theme;