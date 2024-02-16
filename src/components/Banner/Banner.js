import React from 'react';

function Banner({type, children}) {

  if (type === 'success') {
    return (
        <div className="happy banner">
            {children}
        </div>
    )
  } else if(type === 'fail') {
    return (
        <div className="sad banner">
            {children}
        </div>
    )
  } else {
      return null
  }

}

export default Banner;
