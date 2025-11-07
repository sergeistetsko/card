import styled, {css} from 'styled-components'

type StyledButtonPropsType = {
    color?: string;
    btnType: 'primary' | 'outlined';
}

export const StyledButton = styled.button<StyledButtonPropsType>`
    border: none;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    text-decoration: none;
    font-weight: 700;
    font-size: 10px;
    line-height: 2;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${props => props.color || '#4e71fe'};
        color: #fff;
    }

    ${props => props.btnType === 'outlined' && css<StyledButtonPropsType>`
        border: 2px solid ${props => props.color || '#4e71fe'};
        color: ${props => props.color || '#4e71fe'};
        background-color: transparent;
    `}

    ${props => props.btnType === 'primary' && css<StyledButtonPropsType>`
        color: #fff;
        background-color: ${props => props.color || '#4e71fe'};

        &:hover {
            background-color: #fff;
            color: ${props => props.color || '#4e71fe'};
            border: 2px solid ${props => props.color || '#4e71fe'};
        }
    `}

`