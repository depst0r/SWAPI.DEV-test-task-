import React, { useEffect, useState } from 'react'

export const ReviewData = ({arr}) => {

    const [userData, setUserData] = useState('')

    useEffect(() => {
        setUserData(arr)
    }, [arr])

    return<>
        {userData ? userData.map(res => {
            return (
                <div className="card text-white bg-info mb-3">
            <div className="card-header">thanks for the tip</div>
            <div className="card-body">
                <h5 className="card-title">{res.userName}</h5>
                <h5 className="card-title">{res.email}</h5>
                <p className="card-text">{res.review}</p>
            </div>
            </div>
            )
        }): null }
    </>
}