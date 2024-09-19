import React, {useEffect, useState} from 'react'
import './board.css'
import Nav from '../components/Nav';
import Heading from '../components/Heading';
import Box from '../components/box';
import Order from '../components/Sequence';
import DATA from '../components/getItems'


function Board() {
    const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
    const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'title');

    useEffect(() => {
        localStorage.setItem('ordering', ordering);
        localStorage.setItem('grouping', grouping);

        if (grouping === 'priority') {
            setOrdering('title');
        }
    }, [ordering, grouping]);

    const findUserById = userId => DATA.users.find(user => user.id === userId);

    return (
        <div className='page'>
            <Nav grouping={grouping} ordering={ordering} setGrouping={setGrouping} setOrdering={setOrdering} />
            <div className='board'>
                {DATA[grouping].map((group, index) => (
                    <div key={index} className='group-column'>
                        <Heading 
                            title={group.title} 
                            grouping={grouping} 
                            count={group.tickets.length} 
                            available={grouping === 'user' ? findUserById(group.title)?.available : null} 
                        />
                        {Order(group.tickets, ordering).map((item, idx) => (
                            <Box key={idx} ticket={item} grouping={grouping} user={findUserById(item.userId)} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Board;