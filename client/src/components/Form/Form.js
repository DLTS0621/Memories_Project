import React from "react";
import { StyledForm, StyledTextField, StyledButton } from "./styles";

const Form = () => {
    return (
        <StyledForm>
            <StyledTextField label="Title" variant="outlined" />
            <StyledTextField label="Message" variant="outlined" multiline rows={4} />
            <StyledButton variant="contained" color="primary">Submit</StyledButton>
        </StyledForm>
    );
};

export default Form;
