import { useState } from 'react';
import Home from './components/Home/Home';
import Layout from './layouts/Layout';
import DataSection from './components/DataSection/DataSection';
import { dataService } from './services/DataService';

function App() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [userData, setUserData] = useState<any | null>(null); // Replace 'any' with a more specific type when available
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSearch = async (username: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await dataService.getUserProfileData(username);
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