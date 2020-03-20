import React from 'react';
import {Data} from './Data'
import { Query } from './Query';

export const App = () => {
    return(
        <React.Fragment>
            <Query />
            <Data />
        </React.Fragment>
    );
}
