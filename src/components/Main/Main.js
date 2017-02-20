require('normalize.css/normalize.css');
import List from '../List';
import React from 'react';
import Slider from 'react-slick';

import styles from './Main.css';
import '../../styles/slick/slick.css';
import '../../styles/slick/slick-theme.css';
import '../../styles/general.css';

class AppComponent extends React.Component {
  render() {
    const data = [
      {
        name: 'Monday',
        list: [
          'buy milk',
          'buy eggs',
          'buy mushroom',
          'buy coffee bean',
          'buy LAN cable',
          'read a book'
        ]
      }, {
        name: 'Tuesday',
        list: [
          'lunch with Jon',
          'freelance'
        ]
      }, {
        name: 'Wednesday',
        list: [
          'freelance',
          'dinner with Monki',
        ]
      }, {
        name: 'Thursday',
        list: [
          'play football',
          'call Dad'
        ]
      }, {
        name: 'Friday',
        list: [
          'have drink with Jason'
        ]
      }, {
        name: 'Saturday',
        list: []
      }, {
        name: 'Sunday',
        list: []
      }
    ];
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 200
    };
    return (
      <div className={styles.index}>
        <Slider {...settings}>
          {data.map(listObj => <div key={listObj.name}><List listName={listObj.name} list={listObj.list}/></div>)}
        </Slider>
      </div>
    );
  }
}

export default AppComponent;
