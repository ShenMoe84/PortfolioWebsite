import React from 'react';
import styles from './NotFound.module.css';

/**
 * NotFound component renders a 404 message for any page that does not match the specified paths
 * @returns NotFound component
 */
const NotFound = () => (
    <div>
        <h1 className={styles.h1}>404 - Not Found!</h1>
    </div>
);

export default NotFound;