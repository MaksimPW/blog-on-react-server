import React from 'react';

const TextBox = ({ text }) => (
  <span>{text}</span>
);

TextBox.defaultProps = {
  text: 'default text',
};

export default TextBox;
