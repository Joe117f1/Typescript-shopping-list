import classes from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Grocery List</div>
    </header>
  );
};

export default MainNavigation;
