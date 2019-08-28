import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import NavigationBar from './navigation';
import CreateComponent from '../demo/components/create.component';
import FindComponent from '../demo/components/find.component';
import ListComponent from '../demo/components/list.component';
import SearchComponent from '../demo/components/search.component';

// const ListComponent = React.lazy(() => import(/* webpackChunkName: "list-component" */ "../demo/components/list.component"));
// const CreateComponent = React.lazy(() => import(/* webpackChunkName: "create-component" */ "../demo/components/create.component"));
// const SearchComponent = React.lazy(() => import(/* webpackChunkName: "search-component" */ "../demo/components/search.component"));
// const FindComponent = React.lazy(() => import(/* webpackChunkName: "find-component" */ "../demo/components/find.component"));

export default class CustomerHome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <Router>
            //     <NavigationBar></NavigationBar>
            //     <React.Suspense fallback="Loading">
            //         <Route path="/" exact component={ListComponent} />
            //     </React.Suspense>
            //     <React.Suspense fallback="Loading">
            //         <Route path="/list" component={ListComponent} />
            //     </React.Suspense>
            //     <React.Suspense fallback="Loading">
            //         <Route path="/add" component={CreateComponent} />
            //     </React.Suspense>
            //     <React.Suspense fallback="Loading">
            //         <Route path="/search" component={SearchComponent} />
            //     </React.Suspense>
            //     <React.Suspense fallback="Loading">
            //         <Route path="/view/:id" component={FindComponent} />
            //     </React.Suspense>
            // </Router>
            <Router>
                <NavigationBar></NavigationBar>
                <Route path="/" exact component={ListComponent} />
                <Route path="/list" component={ListComponent} />
                <Route path="/add" component={CreateComponent} />
                <Route path="/search" component={SearchComponent} />
                <Route path="/view/:id" component={FindComponent} />
            </Router>
        );
    }
}
