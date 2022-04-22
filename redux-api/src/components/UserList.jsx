import React, {useEffect} from 'react'
import { EndPointUsers } from '../REDUX/slices/users/index'
import { useDispatch, useSelector} from 'react-redux'

const UserList = () => {

    const dispatch = useDispatch();

    const { list } = useSelector(state => state.users)

    useEffect(() =>{
        dispatch(EndPointUsers());
    },[])


  return (
    <div className='container mt-4'>
        <div className='row'>
            {
                list.map((user, index) => (
                    <div key={index} className='col-md-3 mb-4'>
                        <div className='card'>
                            <img src={user.avatar} alt="img" />
                            <div className='card-body'>
                                <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
                                <p className='card-text'>{user.email}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default UserList