import React from 'react'
import { Button, Spinner } from 'reactstrap'

function CustomButton(props) {
  return (
    <Button {...props}>{props.loading && <Spinner size={props.size || "sm"} />}{props.children}</Button>
  )
}

export default CustomButton