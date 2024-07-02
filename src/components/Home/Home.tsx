import { useState } from "react";
import localStyles from "./Home.module.css";

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
        <section className={localStyles.home}>

            <div className={localStyles.headingContainer}>
                <h1 className={localStyles.title}>ChessLens</h1>    
                <h4 className={localStyles.phrase}>Vision Beyond the Board</h4>
            </div>

            <div className={localStyles.searchContainer}>
                <form className={localStyles.searchForm} onSubmit={handleSubmit}>
                    <input
                        className="form-control p-4 w-50 rounded-pill"
                        type="text"
                        value={username}
                        onChange={(event) => setUserName(event.target.value)}
                        placeholder="Enter Chess.com username"
                    />
                    <button className="btn btn-dark p-3 w-50 rounded-pill" type="submit">Search</button>
                </form>
            </div>

        </section>
    )
}
export default Home;