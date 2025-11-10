import Navigation from "./Nav";
import { useState } from "react";

const Header = () => {
    const [keyword, setKeywords] = useState('');

    const handleChange = (ev) => {
        setKeywords(ev.target.value);
    }

    return (
        <header>
            <div className="logo" onClick={() =>console.log('I was clicked')}>AWESOME NEWS</div>
            <input type="text" onChange={handleChange} />
            <Navigation />
        </header>
    )
}
export default Header;