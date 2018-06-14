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
    this.scrollLeft();
  }

  componentDidUpdate() {
    this.scrollLeft();
  }

  scrollLeft() {
    if (!this.props.skeleton) {
      const node = this.elem.current;
      node.scrollLeft = node.scrollWidth;
    }
  }

  render() {
    const p = this.props.parcel;
    let dateMax;
    let dateMin;
    let monthString;
    let day;
    let month;
    let minTimeH;
    let minTimeM;
    let maxTimeH;
    let maxTimeM;
    if (p) {
      dateMax = new Date(p.package.maxArrival * 1000);
      dateMin = new Date(p.package.minArrival * 1000);
      minTimeH = dateMin.getHours();
      minTimeM = dateMin.getMinutes();
      maxTimeH = dateMax.getHours();
      maxTimeM = dateMax.getMinutes();
      day = dateMax.getDate();
      month = dateMax.getMonth();
      switch (month) {
        case 0:
          monthString = 'January';
          break;
        case 1:
          monthString = 'Februari';
          break;
        case 2:
          monthString = 'March';
          break;
        case 3:
          monthString = 'April';
          break;
        case 4:
          monthString = 'May';
          break;
        case 5:
          monthString = 'Juni';
          break;
        case 6:
          monthString = 'Juli';
          break;
        case 7:
          monthString = 'August';
          break;
        case 8:
          monthString = 'September';
          break;
        case 9:
          monthString = 'Oktober';
          break;
        case 10:
          monthString = 'November';
          break;
        case 11:
          monthString = 'December';
          break;
        default:
          monthString = 'unknown';
          break;
      }
    }
    return this.props.skeleton ? (
      <div className="card-carousel card-carousel--center">
        <div className="card-loader" />
      </div>
    ) : (
      <div ref={this.elem} className="card-carousel">
        <Card status="At the hub" timeframe="15:10 - 16:00" date={`${monthString} ${day}`} />
        <Card status="On it's way" timeframe="15:20 - 15:50" date={`${monthString} ${day}`} />
        <Card status="On it's way" timeframe="15:40 - 15:50" date={`${monthString} ${day}`} />
        <Card
          old={false}
          status="Card"
          timeframe={`${minTimeH}:${minTimeM} - ${maxTimeH}:${maxTimeM}`}
          date={`${monthString} ${day}`}
        />
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
