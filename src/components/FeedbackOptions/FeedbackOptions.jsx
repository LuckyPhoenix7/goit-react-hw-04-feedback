import { OptionsContainer, OptionBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClickButton }) => {
  const optionKeys = Object.keys(options);

  return (
    <OptionsContainer>
      {optionKeys.map(key => (
        <OptionBtn
          key={key}
          type="button"
          name={key}
          onClick={() => onClickButton(key)}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </OptionBtn>
      ))}
    </OptionsContainer>
  );
};
