import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
    <>
        {options.map((option) => {
            return <button
                key={option}
                onClick={() => onLeaveFeedback(option)}
                style={{
                    textTransform: "capitalize",
                }}>
                {option}
            </button>
        })}
    </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
