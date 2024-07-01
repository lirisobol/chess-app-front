import { useState } from 'react';
import Home from './components/Home/Home';
import Layout from './layouts/Layout';
import DataSection from './components/DataSection/DataSection';
import { dataService } from './services/DataService';
import { User } from './models/User';

function App() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [userData, setUserData] = useState<User | null>(null); 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSearch = async (username: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await dataService.getUserData(username);
            console.log(data);
            
            setUserData(data);
        } 
        catch (err) {
            setError('Failed to fetch user data');
        }
        setIsLoading(false);
    };

    return (
        <Layout>
            <Home onSearch={onSearch} />
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <DataSection userData={userData} />
        </Layout>
    );
}

export default App;