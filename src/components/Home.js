import React, {useState} from "react";
import Modal from "./Modal";

const Home = () => {
    
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="home-content">
            <h1>Welcome to my page!</h1>
            <p>Want to see my cat? Click the button below.</p>
            <button onClick={() => setShowModal(true)} className={showModal ? "btn-hide" : "btn"}>See cat!</button>
            <Modal onClose={() => setShowModal(false)} showModal={showModal}/>
         </div>
    );
}

export default Home;