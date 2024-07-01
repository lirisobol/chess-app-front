import { useState } from "react";
import styles from "./Home.module.css";

interface HomeProps {
    onSearch: (username:string) => void;
}

function Home({onSearch}:HomeProps):JSX.Element {
    const [username, setUserName] = useState('');

    function handleSubmit (event:React.FormEvent) {
        console.log(username);
        
        event.preventDefault();
        onSearch(username);
    }

    return (
        <section className={styles.home}>
            <h1>Chess.Com Data Viewer</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUserName(event.target.value)}
                    placeholder="Enter Chess.com username"
                />
                <button type="submit">Search</button>
            </form>
        </section>
    )
}
export default Home;