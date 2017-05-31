import React, { DOM } from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ props }) => (
  DOM.div(
    { },
    React.createElement(Image, { image: props.image }),
    React.createElement(TextBox, { text: props.text }),
  )
);

export default BlogItem;
