import { StyledButton, StyledLi, StyledUl } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (
        <StyledUl>
            {options.map(option => <StyledLi key={option}>
                <StyledButton type="button" onClick={onLeaveFeedback}>{option}</StyledButton>
            </StyledLi>)}
        </StyledUl>
    );
};