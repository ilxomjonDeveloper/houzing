import React from 'react'
import { Puff } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Puff
    height="80"
    width="80"
    radius={3}
    color="#0d263b"
    ariaLabel="puff-loading"
    wrapperStyle={{width: "100%", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center"}}
    visible={true}
  />
  )
}

export default Loader