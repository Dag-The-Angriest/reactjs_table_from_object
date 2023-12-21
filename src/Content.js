import React from 'react'
import Row from './Row'



const Content = ({ items }) => {
  return (
    <table className='DataTable'>
        <tbody>
            {items.map(item => (
                    <Row
                        item={item}
                        key={item.id}
                    />
            ))}
        </tbody>
    </table>
  )
}

export default Content