import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import AccountCreationPage from './components/pages/AccountCreationPage';
import DeviceStatusPage from './components/pages/DeviceStatusPage/DeviceStatusPage';
import DeviceHistoryPage from './components/pages/DeviceHistoryPage/DeviceHistoryPage';
import UserGenerationPage from './components/pages/UserGenerationPage/UserGenerationPage';
import UserListPage from './components/pages/UserListPage/UserListPage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/account/create' component={AccountCreationPage}/>
        <Route path='/:company_id/status' component={DeviceStatusPage}/>
        <Route path='/:company_id/history/:device_id' component={DeviceHistoryPage}/>
        <Route path='/:company_id/generate-user' component={UserGenerationPage}/>
        <Route path='/:company_id/users' component={UserListPage} />
    </Switch>
)