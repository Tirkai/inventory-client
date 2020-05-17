import { Button, TextField } from "@material-ui/core";
import { FormItem } from "components/formLayout/FormItem/FormItem";
import { Formik } from "formik";
import { IAddItemFormData } from "interfaces/form/IAddItemFormData";
import React, { Component } from "react";

interface IAddItemFormProps {
    onSubmit: (data: IAddItemFormData) => void;
}

export class AddItemForm extends Component<IAddItemFormProps> {
    render() {
        return (
            <Formik<IAddItemFormData>
                initialValues={{
                    name: "",
                }}
                onSubmit={this.props.onSubmit}
            >
                {(form) => (
                    <form onSubmit={form.handleSubmit}>
                        <FormItem>
                            <TextField
                                autoFocus
                                label="Название"
                                name="name"
                                value={form.values.name}
                                onChange={form.handleChange}
                            ></TextField>
                        </FormItem>
                        <FormItem align="flex-end">
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                            >
                                Добавить
                            </Button>
                        </FormItem>
                    </form>
                )}
            </Formik>
        );
    }
}
