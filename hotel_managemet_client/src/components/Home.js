import {useState} from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Home(props){

const [modalIsopen, setModalIsOpen]  = useState(false);


function bookingHandler(){

setModalIsOpen(true);

}

function closeModelHandler(){

        setModalIsOpen(false);

}


return(

<div className='card'>
    <h2>{props.text}</h2>
        <div className='actions'>
<button className='btn' onClick={bookingHandler} >booking</button>
        </div>
{modalIsopen && <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler} />}
{modalIsopen && <Backdrop onCancel={closeModelHandler}   />}       


</div>



);

}

export default Home;