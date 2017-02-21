require('normalize.css/normalize.css');
import List from '../List';
import React from 'react';
import Slider from 'react-slick';
import Dragula from 'react-dragula';

import styles from './Main.css';
import '../../styles/dragula/dragula.css';
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
      speed: 200,
      swipe: !this.state.isDragging
    };
    return (
      <div className={styles.index}>
        <Slider {...settings}>
          {data.map(listObj => <div key={listObj.name}>
            <List listName={listObj.name}
                  list={listObj.list}
                  addDraggable={this.addDraggable}/>
          </div>)}
        </Slider>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      isDragging: false
    };
    this.draggables = [];
  }

  componentDidMount() {
    let options = {
      moves: () => {
        this.setState(Object.assign({}, this.stage, {isDragging: true}));
        return true;
      },
      accepts: () => {
        this.setState(Object.assign({}, this.stage, {isDragging: false}));
        return true;
      }
    };
    Dragula(this.draggables, options);
  }

  addDraggable = (component) => {
    this.draggables.push(component);
  }
}

export default AppComponent;
