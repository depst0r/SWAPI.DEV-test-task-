import React, {useState} from 'react'

export const FormReviev = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [review, setReview] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    } 

    return<>
<form onSubmit={handleSubmit}>
<div className="form-group">
        <label htmlFor="exampleInputUserName">User Name</label>
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
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input 
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
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea 
        className="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"
        value={review}
        onChange={e => setReview(e.target.value)}
        />
    </div>
    <button 
    className="btn btn-primary">Submit</button>
</form>
    </>
}