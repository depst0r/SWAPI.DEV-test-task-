import React from 'react'
import Popup from "reactjs-popup"
import { FormReviev, FormReview } from '../FormReview/FormReview'

export const PoPup = () => {


    const contentStyle = {
      maxWidth: "600px",
      width: "90%"
    };
    return<>
        <Popup
        trigger={<button className='btn btn-secondary'>Review</button>}
        modal
        >

        <FormReviev />
      </Popup>   
    </>
}