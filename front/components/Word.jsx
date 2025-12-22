import PropTypes from 'prop-types';
import { animDiv, div, p } from '../styles/Word.module.css';

function Word({ playerColor, showAnswers, showSVGTimer, strkos, word }) {
  const blankPos = word.startsWith('_')
    ? 'word, blank first'
    : 'word, blank last';

  return (
    <div className={showAnswers ? [animDiv, div].join(' ') : div}>
      <svg preserveAspectRatio="none">
        {showSVGTimer && (
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            style={{ stroke: playerColor, strokeDashoffset: strkos }}
          />
        )}
      </svg>
      <p aria-label={blankPos} role="alert" className={p}>
        {word}
      </p>
    </div>
  );
}

Word.propTypes = {
  playerColor: PropTypes.string,
  showAnswers: PropTypes.bool,
  showSVGTimer: PropTypes.bool,
  word: PropTypes.string,
};

export default Word;
