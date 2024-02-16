import React from 'react';
import Banner from "../Banner";

function WonBanner({guessNum}) {
  return (
      <Banner type="success">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessNum} guesses</strong>.
        </p>
      </Banner>
  )
}

export default WonBanner;
