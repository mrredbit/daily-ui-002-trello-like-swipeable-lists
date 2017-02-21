import React from 'React';
import styles from './List.css';
import Card from '../Card';
import Dragula from 'react-dragula';


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.index}>
      <div className={styles.mainContainer}>
        <div className={styles.listNameContainer}>
          {this.props.listName}
        </div>
        {
          <div className={styles.listContainer} ref={(component)=> this.props.addDraggable(component)}>
            {
              this.props.list.map((item, index) => {
                return <Card key={index}>{item}</Card>
              })
            }
          </div>
        }
      </div>
    </div>
  }

}
export default List;
