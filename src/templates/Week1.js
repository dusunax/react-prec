import React from 'react';

function GetItem(){
    return (
        <li className='item'>
            <strong>
                독서하기
            </strong>
            <button>완료</button>
        </li>
    )
}

function Week1(){
    return(
        <div>
            <h2 style={{textAlign: "left"}}>오늘 할 일</h2>
            <div className='contents-area'>
                <ul className='item-list' style={{textAlign: "left"}}>
                    <GetItem />
                    <GetItem />
                </ul>
                <div className='role-form'>
                    <input type="text" placeholder='입력하기 ...'/>
                    <button>추가</button>
                </div>
            </div>
        </div>
    )
}

export default Week1;