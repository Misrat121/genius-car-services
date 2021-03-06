import React from 'react';
import Expert from '../Expert/Expert';

import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'

const experts = [
    {id: 1, name: 'Will Smith', img:expert1},
    {id: 1, name: 'Rachel Green', img:expert2},
    {id: 1, name: 'Joe Tribiani', img:expert3},
    {id: 1, name: 'Chandler Bing', img:expert4},
    {id: 1, name: 'Ross Geller', img:expert5},
    {id: 1, name: 'Monica Geller', img:expert6},
]
const Experts = () => {
    return (
        <div id="experts" className='container'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                    key ={expert.id}
                    expert = {expert}
                    
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;