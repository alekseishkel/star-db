import React from 'react';

const withChildFunction = (func) => (Wrapper) => {
  return (props) => (
    <Wrapper {...props}>
      {func}
    </Wrapper>
  )
}

export default withChildFunction;