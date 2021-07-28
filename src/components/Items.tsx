import { useContext } from 'react';
import ListItem from './ListItem';
import { ItemsContext } from '../store/items-context';

import classes from './Items.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(ItemsContext);

  return (
    <ul className={classes.items}>
      {todosCtx.items.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          onRemoveItem={todosCtx.removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
