import React from 'react'

function Header({total,money}) {
  return (
    <>
    <div className="header">
        Harcayacak  $  <span>
          { money - total } </span> paranız kaldı
             
    </div>
    <style jsx> {`
      .header{
        position: sticky;
        top:0;
        background: green;
        height: 60px;
        display:flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;
        letter-spacing:2px;
        

      }
      .header span {
        margin: 0 10px;
      }
      `}

    
    </style>
    </>
  )
}


export default Header
