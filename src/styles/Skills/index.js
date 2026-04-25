import styled from 'styled-components';

export const SkillsDiv = styled.div`
    width: 100%;
    padding: 6px 0;
`;
export const SkillsContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;
export const Common = styled.div`
    /* width: 30%; */
    margin: 20px auto;
    text-align: center;
    /* justify-content: space-around; */
`;
export const H1 = styled.h1`
    font-size: 32px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.fontColorPrimary};
`;
export const Col = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

export const BoxDiv = styled.div`
    text-align: center;
`;

export const SkillBox = styled.div`
    padding: 40px;
    transition: all 0.5s linear;
    @media (max-width: 767px) {
        padding: 16px;
    }
`;

export const SkillBoxText = styled.p`
    font-size: 15px;
    font-weight: 600;
`;
