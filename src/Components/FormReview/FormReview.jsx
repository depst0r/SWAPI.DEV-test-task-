import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ReviewData } from './ReviewData'

export const FormReview = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [review, setReview] = useState('')
    const [arr, setArr] = useState([])

    const submitForm = () => {
        new Promise(resolve => { 
            setUserName('')
            setEmail('')
            setReview('')
            setTimeout(() => { 
                setArr(state => state.concat({
                    id: Date.now(),
                    userName,
                    email,
                    review
                }))
            resolve()
            }, 1000)
        })
    }

    const handleSubmit = e => {
        if (userName.length >= 5 ) {
            submitForm()
        } 
        e.preventDefault()
    } 

    return<>
        <ReviewData arr={arr}/>
    <form onSubmit={handleSubmit}>
    <Link to='/'>
        <p>X</p>
    </Link>
    <div className="form-group">
            <label 
            htmlFor="exampleInputUserName" 
            required>
                User Name
                </label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleInputUserName" 
            placeholder="User Name"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label 
            htmlFor="exampleInputEmail1">
                Email address
                </label>
            <input 
            required
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label 
            htmlFor="exampleFormControlTextarea1">
                Review text
                </label>
            <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3"
            value={review}
            onChange={e => setReview(e.target.value)}
            />
        </div>
        <button 
        className="btn btn-primary" 
        type="submit">
            Submit
        </button>
    </form>
    </>
}