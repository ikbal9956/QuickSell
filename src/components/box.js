import React from 'react';
import Tag from './Tag';
import './styles/Box.css';

function Box({ ticket, grouping, user }) {
  const { id, status, title, priority, tag } = ticket;
  const { name, available } = user;

  const getUserInitials = (fullName) => fullName.split(" ").map(n => n[0].toUpperCase()).join("");

  return (
    <div className='box'>
      <div className='box-header'>
        <div className='box-id'>{id}</div>
        {grouping !== 'user' && (
          <div className='box-user'>
            <div className='box-user-icon'>{getUserInitials(name)}</div>
            <div className={available ? 'active-user' : 'inactive-user'}></div>
          </div>
        )}
      </div>
      <div className='box-body'>
        {grouping !== 'status' && <img src={`/icons/status/${status}.svg`} alt={`${status} icon`} />}
        <span>{title}</span>
      </div>
      <div className='box-footer'>
        {grouping !== 'priority' && (
          <div className='box-footer-priority'>
            <img src={`/icons/priority/${priority}.svg`} alt={`${priority} priority icon`} />
          </div>
        )}
        <div className='box-footer-tags'>
          {tag.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Box;
