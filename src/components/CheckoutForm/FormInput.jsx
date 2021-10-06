import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        label={label}
                        required={required}
                    />
                )}
                name={name}
                control={control}
                defaultValue=""
            />
        </Grid>
    );
}

export default FormInput;