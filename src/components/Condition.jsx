import React from 'react';

export default function Condition(props) {
  const { shouldRender } = props;

  if(shouldRender) {
    return props.children;
  }else {
    return null;
  }
}