import { useState, useEffect } from 'react'

import leftIcon from '../../images/left.png'
import rightIcon from '../../images/right.png';

import './index.scss'

export interface PagerBtnProp{
  content: string | number;
  current: number;
}

export default function PagerBtn(prop: PagerBtnProp) {
  // TODO onclick
  const {content,current} = prop
  return (
    <div className={typeof(content)==='number'&&content===current?'pager-btn current':"pager-btn"}>
      <div>{typeof (content) === 'number' ? content : content === 'left'
        ?
        <img src={leftIcon}></img>:<img src={rightIcon}></img>
      }</div>
    </div>
  )
}