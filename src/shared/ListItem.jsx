import React from 'react';
import styles from './ListItem.module.css';

const ListItem = ({ item }) => {
  const { name, favorite_disney_character, status } = item;

  return (
    <div className={styles.listItemContainer}>
      <h3>{name}</h3>
      <p>{favorite_disney_character}</p>
      <p>{status}</p>
    </div>
  );
};

export default ListItem;