import React from 'react';
import { FallingLines } from 'react-loader-spinner';


export const Loader = () => (
  <div >
   <FallingLines
  color="#ccd542"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
  </div>
);



