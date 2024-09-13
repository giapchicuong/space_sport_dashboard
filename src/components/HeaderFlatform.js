import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderFlatform() {
    return (
        <div className='flex gap-2.5'>
            <Link to='/flatform'>Flatform</Link>
            <Link to='/auth'>auth</Link>
            <Link to='view'>video</Link>
            <Link to='/upload'>upload video</Link>
            <Link to='/account'>account</Link>
        </div>
    )
}
