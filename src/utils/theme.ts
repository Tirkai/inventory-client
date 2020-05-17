import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1890FF",
        },
        secondary: {
            main: "#c4c4c4",
        },
        type: "dark",
    },
    typography: {
        allVariants: {
            // fontFamily: "BrutalType",
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
            },
        },
        MuiFormControl: {
            root: {
                width: "100%",
            },
        },
        MuiFilledInput: {
            input: {
                background: "#EEEEEE",
            },
        },
        MuiInput: {
            input: {
                height: "32px",
                background: "#333",
                borderRadius: "4px",
                padding: "4px 12px",
                // borderBottom: "1px solid #666",
            },
            underline: {
                "&:before": {
                    borderBottom: "1px solid #666",
                    display: "none",
                },
                "&:hover:not($disabled):before": {
                    display: "none",
                    borderBottom: "1px solid #666",
                },
            },
        },
        MuiDialogTitle: {
            root: {
                // borderBottom: "1px solid #333",
            },
        },
        MuiDialogActions: {
            root: {
                padding: "8px 24px",
                borderTop: "1px solid #e2e2e2",
            },
        },
        MuiInputLabel: {
            formControl: {
                transform: `translate(0, 22px) scale(1)`,
            },
            shrink: {
                transform: "translate(-5px, -5px) scale(0.75)",
            },
        },
        MuiSelect: {
            root: {
                display: "flex",
                alignItems: "center",
                background: "#333",
                borderRadius: "4px",
            },
            select: {
                borderRadius: "4px",
            },
            selectMenu: {
                minHeight: "40px",
                boxSizing: "border-box",
            },
        },
        MuiFormLabel: {
            root: {
                padding: "8px",
            },
        },
        MuiStepper: {
            root: {
                padding: "0",
            },
        },
        MuiStepLabel: {
            completed: {
                cursor: "pointer",
            },
            labelContainer: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "10px",
            },
        },
        MuiFab: {
            root: {
                boxShadow: "none",
                "&:active": {
                    boxShadow: "none",
                },
                "&$focusVisible": {
                    boxShadow: "none",
                },
            },
            extended: {
                boxShadow: "none",
            },
        },
    },
    props: {
        MuiButton: {
            disableElevation: true,
        },
        MuiTextField: {
            InputLabelProps: {
                // shrink: true,
            },
        },
    },
});

export { theme };
