import React from 'react';
import PropTypes from 'prop-types';

const Hex = ({ children }) => <div>{children}</div>;

Hex.propTypes = {
  children: PropTypes.node.isRequired,
};

Hex.displayName = 'Hex Component [@bcgov/react-ui-components]';

export default Hex;
