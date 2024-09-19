import React from 'react';
import './styles/Heading.css';

const getIconPath = {
    plus: '/icons/plus.svg',
    ellipsis: '/icons/ellipsis.svg',
    status: (title) => `/icons/status/${title}.svg`,
    priority: (priority) => `/icons/priority/${priority}.svg`
};

const priorityCode = {
    'No priority': 0,
    'Low': 1,
    'Medium': 2,
    'High': 3,
    'Urgent': 4
};

const Heading = React.memo(({ title, grouping, count, available = true }) => {
    const getUserInitials = (name) => name.split(" ").map(n => n[0].toUpperCase()).join("");

    const renderIcon = () => {
        if (grouping === 'user') {
            return (
                <div className='card-user'>
                    <div className='card-user-icon'>{getUserInitials(title)}</div>
                    <div className={available ? 'active-user' : 'inactive-user'}></div>
                </div>
            );
        } else if (grouping === 'status') {
            return <img src={getIconPath.status(title)} alt={`${title} status`} />;
        } else if (grouping === 'priority') {
            return <img src={getIconPath.priority(priorityCode[title])} alt={`${title} priority`} />;
        }
        return null;
    };

    return (
        <div className='card-title'>
            <div className='card-title-left'>
                {renderIcon()}
                <span className='group-title'>{title}</span>
                <span className='group-count'>{count}</span>
            </div>
            {count > 0 && (
                <div className='card-title-right'>
                    <button className='card-title-right-btn'><img src={getIconPath.plus} alt="Add" /></button>
                    <button className='card-title-right-btn'><img src={getIconPath.ellipsis} alt="Options" /></button>
                </div>
            )}
        </div>
    );
});

export default Heading;
