// import React from 'react'
import styles from"./Display.module.css"
function Display() {
  return (
    <div>
      <input  className={styles.input} type="number" placeholder="Enter No" readOnly />
    </div>
  )
}

export default Display