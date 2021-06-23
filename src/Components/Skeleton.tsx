import React from 'react';
import './Skeleton.css';

const Skeleton = () => {
    return(
        <div className="skeleton-main">
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <div className='left'></div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div className='right'>
                        <div className='one'>

                        </div>
                        <div className='two'>

                        </div>
                        <div className='three'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className="top-story-skeleton">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton;