import React from 'react'
import './Table.css'

function Table(props) {
  return (
    <>
        
      <td className='calander-table-dates'>
          <p>{props.date}</p>
          <div className='plus-icon'>
            <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.2128 18.5712H21.4271V11.7855C21.4271 11.5891 21.2664 11.4284 21.0699 11.4284H18.9271C18.7307 11.4284 18.5699 11.5891 18.5699 11.7855V18.5712H11.7842C11.5878 18.5712 11.4271 18.732 11.4271 18.9284V21.0712C11.4271 21.2677 11.5878 21.4284 11.7842 21.4284H18.5699V28.2141C18.5699 28.4105 18.7307 28.5712 18.9271 28.5712H21.0699C21.2664 28.5712 21.4271 28.4105 21.4271 28.2141V21.4284H28.2128C28.4092 21.4284 28.5699 21.2677 28.5699 21.0712V18.9284C28.5699 18.732 28.4092 18.5712 28.2128 18.5712Z" fill="#EA1F25"/>
              <path d="M20 0C8.95536 0 0 8.95536 0 20C0 31.0446 8.95536 40 20 40C31.0446 40 40 31.0446 40 20C40 8.95536 31.0446 0 20 0ZM20 36.6071C10.8304 36.6071 3.39286 29.1696 3.39286 20C3.39286 10.8304 10.8304 3.39286 20 3.39286C29.1696 3.39286 36.6071 10.8304 36.6071 20C36.6071 29.1696 29.1696 36.6071 20 36.6071Z" fill="#EA1F25"/>
            </svg>
          </div>
      </td>  
        
    </>
  )
}

export default Table