import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({itemList,updateItemList}) => {
 //console.log("props",itemList)
  // NOTE: do not delete `data-cy` key value pair
 // data-cy="task"

  const deleteItemList = (key ) => {
     const newList = itemList.filter( e => {
            return e.key !== key
     })
     updateItemList(newList)
  }
  return (
    <div data-cy="task">
      {
        itemList.map( e => {
          return (
            <div key={e.key} >
              <p>{e.item}</p>
              console.log(e.item)
              <Counter/>
              <button onClick={ deleteItemList(e.key)}> x </button>
            </div>
          )
        })
        

      }
    </div>
    
    
  );
};

export default Task;
