import wrong from '../Images/wrong.png';

import './NoResults.css';


const SomethingWentWrong = () => {
    return(
        <div className='no-results-main'>
            <div>
                <img src={wrong} alt="No Results" className = "no-results-img" />
            </div>
            <div>
                <h4 className="wrong-text"><span style={{color:'#4B5AA5',fontWeight:600 ,fontSize:'2.5rem'}}>Oops !</span><br /> Something went wrong</h4>
            </div>
        </div>
    )
}
export default SomethingWentWrong;