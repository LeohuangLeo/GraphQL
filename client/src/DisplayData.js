import React from 'react';
import {useQuery, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
    query getAllUsers {
        users {
            age
            id
            name
            username
            nationality
        }
    }
`

function DisplayData() {

    const { data, loading, error } = useQuery(QUERY_ALL_USERS);
    if (loading) {
        return <div>DATA IS LOADING...</div>
    }
    if (error) {
        console.log(error);
    }
    return(
        <div>
            {data && data.users.map(
                (user) => {
                    return (
                        <div>
                            Name: {user.name}
                        </div>
                    )
                }
            )}
        </div>
    )
};

export default DisplayData;