import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card';
import './style.css';

class CardCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.elem = React.createRef();
  }

  componentDidMount() {
    const node = this.elem.current;
    node.scrollLeft = node.scrollWidth;
  }

  render() {
    return this.props.skeleton ? (
      <div className="card-carousel card-carousel--center">
        <div className="card-loader" />
      </div>
    ) : (
      <div ref={this.elem} className="card-carousel">
        <Card status="At hub" timeframe="15:10 - 16:00" date="May 21" />
        <Card status="Delivery is on its way" timeframe="15:20 - 15:50" date="May 21" />
        <Card status="Delivery is on its way" timeframe="15:40 - 15:50" date="May 21" />
      </div>
    );
  }
}

CardCarousel.propTypes = {
  skeleton: PropTypes.bool,
};
CardCarousel.defaultProps = {
  skeleton: true,
};

export default CardCarousel;
