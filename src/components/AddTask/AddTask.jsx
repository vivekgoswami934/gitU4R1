import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./addTask.module.css";

const AddTask = () => {
    
   const [currentItem,setCurrentItem] = useState(null)
   const [itemList,updateItemList] = useState([])

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value)
      console.log(e.target.value)
  }
  const onClickHandler = () => {
      updateItemList([...itemList , {item : currentItem , key : Date.now() }])
     console.log(itemList)
     // setCurrentItem("")

  }
   
  // NOTE: do not delete `data-cy` key value pair
  return (
    
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add Task..."  onChange={onChangeHandler}/>
      <button data-cy="add-task-button" onClick={onClickHandler}>+</button>
      <Task  itemList={itemList}  updateItemList = { updateItemList }   />

    </div>
     
  );
};

export default AddTask;
