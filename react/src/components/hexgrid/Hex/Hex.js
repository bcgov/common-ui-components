import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import classes from './Hex.css';

const Hex = ({ children, styles }) => {
  return (
    <div style={styles} className={classes.Hex}>
      {children}
    </div>
  );
};

Hex.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object.isRequired,
};

Hex.displayName = 'Hex Component [@bcgov/react-ui-components]';

export default Radium(Hex);
