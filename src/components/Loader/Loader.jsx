import React from 'react';
import { FallingLines } from 'react-loader-spinner';
import styles from './Loader.module.css'

export const Loader = () => (
  <div className={styles.loader}>
   <FallingLines
  color="#ccd542"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
  </div>
);



