import './index.scss';

interface BubbleProp{
  color: string;
}

export default function Bubble(prop: BubbleProp) {
  const { color } = prop;
  return (
    <div className={color==='pink'?'bubble':'bubble blue'}>
      <div className='light'></div>
      <div className='inside'></div>
    </div>
  )
}