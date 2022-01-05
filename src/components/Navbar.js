const Navbar = props => {

    if (!props.showNav) {
        return null
    }
    
    return (
        <div className="navbar">
            <button onClick={props.onClose} className="btn close-btn">Close</button>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;