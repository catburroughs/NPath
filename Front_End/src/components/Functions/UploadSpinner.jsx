import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function ShowSpinner({status}) {
    
    return (
        
        <div>
   {status && <CircularProgress color="secondary"size={50}/>}
  </div>
            
    );
}

export default ShowSpinner;