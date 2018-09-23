import React, { Component } from 'react';
import classes from './Hexgrid.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Hex from './Hex/Hex';

class Hexgrid extends Component {
  propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  displayName = 'Hex grid Component [@bcgov/react-ui-components]';

  render() {
    //  loop over items and wrap in the Hex Component
    const hexs = this.props.items.map(i => (
      <Hex key={shortid.generate()}>{i}</Hex>
    ));

    return (
      <div className={classes.Hexgrid}>
        <div className={classes.Inner}>{hexs}</div>
      </div>
    );
  }
}

export default Hexgrid;
