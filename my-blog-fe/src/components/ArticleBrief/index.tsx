import { useState, useEffect } from 'react'

import Tag from '../Tag'

import './index.scss';

export interface ArticleBriefProp{
  title: string;
  tagNames: string[];
  brief: string;
  modifyTime: number;
}

export default function ArticleBrief(prop: ArticleBriefProp) {
  const { brief, modifyTime, tagNames, title } = prop
  return (
    <div className='article-brief'>
      <span className='brief-header'>
        <h2 className='title'>
          {title}
        </h2>
      </span>
      <div className='brief'>{brief}</div>
      <div className='foot'> 
        <div className='modify-time'>最后编辑于{new Date(modifyTime).toLocaleDateString()}</div>
        <div className='tags'>
          {tagNames.map((tag,index) => 
            <Tag content={tag} isActive={false} key={index} />
          )}
        </div>
      </div>
    </div>
  )
}