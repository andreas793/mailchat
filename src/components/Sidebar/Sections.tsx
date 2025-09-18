import styled from "styled-components";

export const Sections = () => {
    return (
        <Wrapper>
            <SectionItem>
                Новые
            </SectionItem>
            <SectionItem>
                Ветки
            </SectionItem>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 10px;`;

const SectionItem = styled.div``;