import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './List.css'

const List = ({list}) => {
  const [isMoved , setIsMoved] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)

  const listRef = useRef()

  const handleClick = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === 'left' && slideNumber > 0){
      setSlideNumber(slideNumber - 1 )
      listRef.current.style.transform= `translateX(${230 + distance}px)`
    }
    if(direction === 'right' && slideNumber < 5 ){
      setSlideNumber(slideNumber + 1)
      setIsMoved(true)
      listRef.current.style.transform= `translateX(${-230 + distance}px)`

    }
  }


  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <button className='slideArrow left' onClick={()=>handleClick("left")}
        style={isMoved? {display:'block'} : {display:'none'}}>Left</button>
        <div className="container" ref={listRef}>
          {list.content.map((item,i)=>(

          <ListItem index={i} item={item}/>  
          ))}
          
        </div>
        <button className='slideArrow right' onClick={()=> handleClick("right")}>Right</button>
      </div>
    </div>
  )
}

export default List