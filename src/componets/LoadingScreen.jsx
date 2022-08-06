import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const LoadingScreen = () => {
  return (
    <div className='loader-screen'>
      <div className='loader-container'><h1>Loading</h1><ClipLoader size={50} color={'#26CC62'} loading={true}/></div>
    </div>
  )
}

export default LoadingScreen