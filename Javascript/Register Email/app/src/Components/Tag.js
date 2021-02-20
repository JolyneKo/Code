import React from 'react'

function Tag({color, text}) {
  return (
    <span style={{ backgroundColor: color }} className="tag">{text}</span>
  )
}

export default Tag
