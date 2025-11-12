import Navigation from "./Nav";
// import { useState } from "react";

const Header = (props) => {
    // const [active, setActive] = useState('active');
    // const [keyword, setKeywords] = useState('');

    // const handleChange = (ev) => {
    //     let value = ev.target.value === '' ? 'active': 'not-active';
    //     setActive(value);
    // }

    return (
        <header>
            <div className="logo" onClick={() =>console.log('I was clicked')}>AWESOME NEWS</div>
            <input type="text" onChange={props.getKeywords} />
            <Navigation />
        </header>
    )
}
export default Header;