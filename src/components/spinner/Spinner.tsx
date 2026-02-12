import React from "react";
import Styled from "./styles";

const Spinner: React.FC = () => {
    return (
        <Styled.SpinnerWrapper>
            <span>Loading...🚀</span>
        </Styled.SpinnerWrapper>
    )
}

export default Spinner;