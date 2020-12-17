import React from 'react'
import Popup from "reactjs-popup"
import { FormReviev, FormReview } from '../FormReview/FormReview'

export const PoPup = () => {
    return<>
        <Popup
        trigger={<button className='btn btn-secondary'>Review</button>}
        modal
        >
        <FormReviev />
      </Popup>   
    </>
}