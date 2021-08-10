import { useRef, useContext } from 'react';
import { ItemsContext as itemsContext } from '../store/items-context';
import classes from './NewItem.module.css';

const NewItem: React.FC = () => {
  const itemsCtx = useContext(itemsContext);
  const itemInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();

    const enteredItemText = itemInputRef.current!.value;

    if (enteredItemText.trim().length === 0) {
      return;
    }
    itemsCtx.addItem(enteredItemText);
    itemInputRef.current!.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>
        Enter new item or click on listed item to remove it
      </label>
      <input type='text' id='text' ref={itemInputRef} />
      <button>Add Item</button>
    </form>
  );
};

export default NewItem;
