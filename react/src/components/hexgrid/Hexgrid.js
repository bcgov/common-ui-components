import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classes from './Hexgrid.css';
import Hex from './Hex/Hex';

class Hexgrid extends Component {
  propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
    hexW: PropTypes.string,
    gridMW: PropTypes.string,
    hexStyles: PropTypes.object,
  };

  defaultProps = {
    hexW: '200px',
    gridMW: '1000px',
    hexStyles: {
      'border-color': '#eee',
    },
  };

  state = {
    gridOuterWidth: null,
    gridInnerWidth: null,
    windowWidth: null,
  };

  displayName = 'Hex grid Component [@bcgov/react-ui-components]';

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.outerWidth !== this.state.outerWidth ||
      nextState.innerWidth !== this.state.innerWidth
    );
  }

  windowResized = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.windowResized);
    this.windowResized();
  }

  componentDidUnmount() {
    window.removeEventListener('resize', this.windowResized);
  }
  render() {
    const styles = this.props.hexStyles;
    //  loop over items and wrap in the Hex Component
    const hexs = this.props.items.map(i => (
      <Hex key={shortid.generate()} styles={styles}>
        {i}
      </Hex>
    ));

    return (
      <div className={classes.Hexgrid}>
        <div className={classes.Inner}>{hexs}</div>
      </div>
    );
  }
}

export default Radium(Hexgrid);
