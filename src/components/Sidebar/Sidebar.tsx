import styled from "styled-components";
import {Sections} from "./Sections.tsx";
import {Channels} from "./Channels.tsx";

export const Sidebar = () => (
    <Wrapper>
        <LogoWrapper>
            <h2>TestMeServer</h2>
        </LogoWrapper>
        <Sections />
        <Channels />
    </Wrapper>
)

const Wrapper = styled.div`
    background-color: #fff;
    width: 400px;
    height: 100%;
    overflow: hidden;
    color: #000;
    display: flex;
    flex-direction: column;
`;

const LogoWrapper = styled.div`
    border-bottom: 1px solid grey;
    padding: 1rem;
    h2{
      padding: 0;
      margin: 0;
    }
`;

