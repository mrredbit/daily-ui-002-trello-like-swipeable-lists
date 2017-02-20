import React from 'React';
import styles from './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.index}>
      {this.props.children}
    </div>
  }
}
export default Card;
