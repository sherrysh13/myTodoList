import { useState } from 'react';
import './App.css';


function App() {

  const [data, setdata] = useState('')
  const [list, setlist] = useState([])

  const clickHandler = () => {
    console.log("btn clicked")
    if(data === ""){
      alert("please enter any input")
    }else{
      setlist([...list, data])
      setdata("")
      console.log(list)
    }
    
  }
  
  const delHandler = (id) => {
    const filteredArray = list.filter((elem, idx) => {
      return(
        idx !== id
      )
    })
    setlist(filteredArray)
  }

  return (
    <>
      <div className="container">
        <div className="inputField">
          <input type="text" value={data} onChange={e => setdata(e.target.value)}/>
          {/* {console.log(data)} */}
          <button onClick={clickHandler}>Add Task</button>
        </div>
        <div className="listBox">
          <div className="lists">
            {
              list.map((elem, idx) => {
                return(
                  <>
                    <div className="list" key={idx}>
                      <div className="txt"> {elem} </div>
                      <button className='delBtn'onClick={() => delHandler(idx)}>DEL</button>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
