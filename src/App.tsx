import './App.css'
import styled from "styled-components";
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";
import {Main} from "./components/Main.tsx";

function App() {

  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  )
}



const Wrapper = styled.div`
    display: flex;
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    border-radius: 1rem;
    overflow: auto;
    background-color: #000;
    margin: 0 auto;
    border: 1px solid grey
`;

export default App
