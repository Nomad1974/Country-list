import styled from "styled-components";

const Text = styled.h2`
    color: #0066FF;
    text-align: center;
`;

export const Error = ({error}) => {

    return (  
        <>
            <Text>{error}</Text>
        </>
    );
}
