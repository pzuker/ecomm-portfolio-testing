import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

import React from 'react';

const Spinner = () => {
  return (
    <SpinnerOverlay data-testid='spinner'>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
