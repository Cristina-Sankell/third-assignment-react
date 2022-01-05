import Image from "../Selma.jpg"

const Modal = props => {

    if (!props.showModal) {
        return null
    }

    return (
        <div className="modal">
            <button onClick={props.onClose} className="btn close-btn">Close</button>
            <h1>My cat</h1>
            <p>Here is a picture of my cat Selma.</p>
            <img src={Image} alt="Selma"/>
        </div>
    );
}

export default Modal;