import './index.less'
import React from 'react';
const index = ({text,children}: {text: string,children?: JSX.Element}) => {
    return  <p className='message_text'>
                {text ? text : children}
            </p>
  }

  export default React.memo(index);