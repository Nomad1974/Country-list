import styled from "styled-components";


const Text = styled.h2`
    color: #0066FF;
    text-align: center;
`;

export const SearchError = () => {

    return (  
        <>
            <Text>The country is not found!!!</Text>
        </>
    );
}