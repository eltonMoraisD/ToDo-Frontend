import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

import Header from '../../../Components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header></Header>
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
