import classes from './ListItem.module.css';

const ListItem: React.FC<{
  text: string;
  onRemoveItem: () => void;
}> = props => {
  return (
    <li className={classes.item} onClick={props.onRemoveItem}>
      {props.text}
    </li>
  );
};

export default ListItem;
