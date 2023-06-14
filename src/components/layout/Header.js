import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Kwillox App</h1>
        <Link to="/login">
          Login
          </Link>
          <Link to="/">
          Register
          </Link>
        <HeaderCartButton onClick={props.onShowCart} />
        

      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;