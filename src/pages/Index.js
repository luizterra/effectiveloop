import React from 'react';
import { Auth } from 'aws-amplify';
import { Navigate } from 'react-router-dom';

class Index extends React.Component {
    state = {
        redirectToOverview: false,
    };

    async componentDidMount() {
        try {
            await Auth.currentAuthenticatedUser();
            this.setState({ redirectToOverview: true });
        } catch {
            // Not authenticated
        }
    }

    render() {
        if (this.state.redirectToOverview) {
            return <Navigate to="/overview" />;
        }

        return (
            <div>
                <h1>Welcome to the Index Page</h1>
            </div>
        );
    }
}

export default Index;
