import React from 'react';
import Banner from "../Banner";

function FailBanner({answer}) {
  return (
      <Banner type="fail">
        <p>
          <strong>Sorry!</strong> The correct answer is
          <strong>{answer}</strong>.
        </p>
      </Banner>
  )
}

export default FailBanner;
