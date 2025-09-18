import {type ReactNode, useEffect, useState} from "react";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import { fetchSections} from "../../redux/sectionsReducer.ts";

export const Channels = () => {

    const {sections} = useAppSelector(({sections}) => sections );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchSections());
    }, [dispatch]);

    return (
        <Wrapper>
            { sections.map(({title, id}) =>
                <ChannelItem key={id} title={title || "Канал_вне_секции"} />
            )
            }
            <ChannelItem title={"Канал_вне_секции"}/>
            <ChannelItem title={"Разработка"}>
                <ChannelContent>
                    <SkillGroup title={"Git"} current={3}>
                        <SkillItem title={"Front_one"}/>
                        <SkillItem title={"Front_two"}/>
                    </SkillGroup>
                    <SkillGroup title={"Это очень длинное название канала кококококококо"}/>
                    <SkillGroup title={"QAA"} current={23}>
                        <SkillItem title={"Запросы"}/>
                        <SkillItem title={"MR"} current={13}/>
                        <SkillItem title={"Автотесты"} current={10}/>
                    </SkillGroup>
                </ChannelContent>
            </ChannelItem>
        </Wrapper>
    )
}


const ChannelItem = ({title, children}: { title: string, children?: ReactNode }) => (
    <Channel>
        <div>{title}</div>
        {children}
    </Channel>
);

const SkillGroup = ({title, children, current}: { title: string, children?: ReactNode, current?: number }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <SkillGroupWrapper isActive={isActive}>
            <SkillGroupTitle isActive={isActive} isArrowShow={!!children} onClick={handleClick}>
                <span>{title}</span>
                {current && <Current>{current}</Current>}
            </SkillGroupTitle>
            {children &&
                <ul>{children}</ul>
            }
        </SkillGroupWrapper>
    );
}

const SkillItem = ({title, current}: { title: string, current?: number }) => (
    <SkillTitle>
        <span>{title}</span>
        {current && <Current>{current}</Current>}
    </SkillTitle>
)

const Wrapper = styled.ul`
    flex: 1;
    overflow: auto;
    padding: 10px;
`;

const Channel = styled.li`
    margin-bottom: 8px;`;

const ChannelContent = styled.ul`
    li > ul > li:first-child:after {
        top: 0;
    }

    li > ul > li:last-child:before {
        border-radius: 0 0 0 4px;
    }
`;

const SkillGroupWrapper = styled.li<{ isActive?: boolean }>`
    overflow: hidden;
    height: ${({isActive}) => isActive ? "auto" : "32px"};
`;

const SkillGroupTitle = styled.div<{ isActive?: boolean, isArrowShow?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    width: 100%;
    &:hover span {
        background-color: lightgray;
    }
    &:after {
        content: '';
        display: ${({isArrowShow}) => isArrowShow ? "block" : "none"};
        width: 6px;
        height: 6px;
        border: 1px solid #000;
        border-top-color: transparent;
        border-left-color: transparent;
        position: relative;
        top: ${({isActive}) => isActive ? '-2px' : '0'};
        transform: rotate(${({isActive}) => isActive ? '45deg' : '-45deg'})
    }
    span {
        max-width: calc(100% - 24px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 4px;
        padding: 4px;
    }
`;

const SkillTitle = styled.li`
    position: relative;
    padding-left: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        padding: 0 4px;
        border-radius: 4px;
    }
    &:hover span{
        background-color: lightgray;
    }
    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 22px;
        position: absolute;
        left: 10px;
        top: -10px;
        background-color: #000;
    }

    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid #000;
        border-top-color: transparent;
        border-right-color: transparent;
        top: 0;
        left: 10px;
    }`;


const Current = styled.div`
    display: inline-flex;
    width: auto;
    min-width: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 4px 6px;
    font-size: 14px;
    line-height: 14px;
    background-color: blue;
    color: #fff;
    position: absolute;
    right: 0;`;