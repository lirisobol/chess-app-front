import { useState } from "react";
import localStyles from "./HomeSection.module.css";

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

            <div>
                <h1 className={localStyles.title} >ChessLens</h1>    
                <h4 className={localStyles.phrase}>" Vision Beyond the Board "</h4>
            </div>

            <div className={localStyles.searchFormContainer}>
                <form className={localStyles.searchForm} onSubmit={handleSubmit}>
                    <input
                        className="form-control p-4 text-center"
                        type="text"
                        value={username}
                        onChange={(event) => setUserName(event.target.value)}
                        placeholder="Enter Chess.com username"
                    />
                    <button className="btn btn-outline-light p-4" type="submit">Search</button>
                </form>
            </div>

        </section>
    )
}
export default Home;