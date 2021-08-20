import { useContext } from 'react';
import ListItem from './ListItem';
import { ItemsContext } from '../store/items-context';

import classes from './Items.module.css';

const Items: React.FC = () => {
  const itemsCtx = useContext(ItemsContext);

  return (
    <ul className={classes.items}>
      {itemsCtx.items.map(item => (
        <ListItem
          key={item.id}
          text={item.text}
          onRemoveItem={itemsCtx.removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Items;
