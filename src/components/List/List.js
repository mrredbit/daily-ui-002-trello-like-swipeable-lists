import React from 'React';
import styles from './List.css';
import Card from '../Card';

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
          !!this.props.list.length &&
          <div className={styles.listContainer}>
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
