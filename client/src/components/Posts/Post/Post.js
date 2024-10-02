import React from "react";
import { CardContent } from "@mui/material"; // Import CardContent
import { StyledCard, StyledTypography } from "./styles";

const Post = () => {
    return (
        <StyledCard>
            <CardContent>
                <StyledTypography variant="h5">Post Title</StyledTypography>
                <StyledTypography variant="body2">Post content goes here.</StyledTypography>
            </CardContent>
        </StyledCard>
    );
};

export default Post;
