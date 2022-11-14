import React from 'react'

const Display = ({ list, setList }) => {
    const changeMe = (item) => {
        item.complete = !item.complete;
        setList([...list])
    }

    const deleteMe = val => {
        setList(list.filter(item => (item.content != val)))
         document.title = `You have '${list.length-1}' in your List`;

    }

    return (
        <div>
            <h2 className='d-flex d-flex justify-content-center mt-5'>
                Check To Do List:
            </h2>
            <ul>
                {list.map((item, index) =>
                    <div className='col-2 mx-auto'>
                    <li className='list-group-item d-flex justify-content-around m-2'>
                        <input type="checkbox" onChange={e => changeMe(item)} />
                        <spam className={(item.complete) ? "complete" : null}>
                            {item.content}
                        </spam>
                        <button onClick={e => deleteMe(item.content)}> Delete</button>
                    </li>
                    </div>

                )}
            </ul>
        </div>
    )
}

export default Display