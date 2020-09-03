import React from 'react'

export const LinkCard = ({link}) => {
    return (
        <>
       <h2>Ссылка</h2>
        <p>ваша ссылка: <a href={link.to} target="__blank" rel="noopener noreferrer" >{link.to}</a></p>
        <p>откуда: <a href={link.from} target="__blank" rel="noopener noreferrer" >{link.from}</a></p>
         <p>количество кликов по ссылке: <strong>{link.clicks}</strong></p>
        <p>дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}