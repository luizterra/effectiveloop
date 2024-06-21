import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Overview = () => {
    const [loading, setLoading] = useState(true);
    const [isCustomer, setIsCustomer] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkCustomer = async () => {
            try {
                console.log('Attempting to get current session...');
                const session = await Auth.currentSession();
                const idToken = session.getIdToken().getJwtToken();
                console.log('ID Token:', idToken);

                const decodedToken = jwtDecode(idToken);
                console.log('Decoded Token:', decodedToken);

                const email = decodedToken.email;
                console.log('User email:', email);

                if (email) {
                    console.log('Making API call to check customer status...');
                    const response = await axios.get('https://ef8zw0lp47.execute-api.us-east-1.amazonaws.com/CheckCustomerDBStage/check-customer', {
                        params: { email }
                    });
                    console.log('API response:', response.data);

                    if (response.data && response.data.customer_email) {
                        console.log('User is a customer');
                        setIsCustomer(true);
                    } else {
                        console.log('User is not a customer');
                        setIsCustomer(false);
                    }
                } else {
                    console.error('Email is undefined');
                    navigate('/error'); // Assuming you have an error page
                }
            } catch (error) {
                console.error('Error checking customer status:', error);
                setIsCustomer(false);
            } finally {
                setLoading(false);
                console.log('Finished customer check');
            }
        };

        checkCustomer();
    }, [navigate]);

    useEffect(() => {
        if (!loading) {
            if (!isCustomer) {
                console.log('Redirecting to /sales');
                navigate('/sales');
            } else {
                console.log('User is a customer, staying on overview page');
            }
        }
    }, [loading, isCustomer, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isCustomer) {
        return null; // Or a redirect/loading component while we handle the redirection
    }

    return (
        <div>
            <h1>Overview Page</h1>
        </div>
    );
};

export default Overview;
