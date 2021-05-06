import { useState, useEffect } from 'react'

import './index.scss';

export interface TagProp{
  content: string;
  isActive: boolean;
}

export default function Tag(prop: TagProp) {
  const {content,isActive} = prop
  return (
    <span className={isActive?'tag active':'tag'}>
      <span>{content}</span>
    </span>
  )
}