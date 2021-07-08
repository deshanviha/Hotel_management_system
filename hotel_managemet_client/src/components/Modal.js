function Modal(props) {

    function cancelHandler() {

        props.onCancel();

    }

    function confirmHandler() {

        props.onConfirm();

    }


    return (
        <div className='modal'>

            <p>Confirm order</p>
            <button className='btn btn--alt' onClick={cancelHandler}>cancel</button>
            <button className='btn' onClick={confirmHandler}>confirm</button>
        </div>
    );

}

export default Modal;