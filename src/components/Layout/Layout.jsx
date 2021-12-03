import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css'
import Navigation from '../Navigation'

const Layout = ({children}) => (
  <div className={styles.layout}>
    <Navigation/>

    {children}
  </div>
);

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
