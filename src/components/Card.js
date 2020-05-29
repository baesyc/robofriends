import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className="card tc dib ma3 pa2 grow shadow-5 bg-light-green">
      <img src={`https://robohash.org/${name}?size=200x200`} alt='robots' />
      <h4 className='name'>{name}</h4>
      <p className='email'>{email}</p>
    </div>
  );
}

export default Card;