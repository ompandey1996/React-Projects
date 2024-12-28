// import React from 'react'

function LoadingSpinner() {
  return (
    <div>
    
    <div className="d-flex justify-content-center spinner ">
  <div className="spinner-border text-warning" role="status"    style={{width: "5rem",height: "5rem"}}>
    {/* <span className="sr-only">Loading...</span> */}
  </div>
</div>
    </div>
  )
}

export default LoadingSpinner