import React from 'react'
import Button from './Button'

const Header = ({ reqType, setReqType }) => {
  return (
    <header>
        <Button
            buttonText="users"
            reqType={reqType}
            setReqType={setReqType}
        />
        <Button
            buttonText="posts"
            reqType={reqType}
            setReqType={setReqType}
        />
        <Button
            buttonText="comments"
            reqType={reqType}
            setReqType={setReqType}
        />
    </header>
  )
}

export default Header