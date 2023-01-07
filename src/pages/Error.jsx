import styled from "styled-components";

import { useError } from "./useError";

const Text = styled.h2`
    color: #0066FF;
    text-align: center;
`;

export const Error = () => {
    const [error] = useError();

    return (  
        <>
            <Text>{error}</Text>
        </>
    );
}
