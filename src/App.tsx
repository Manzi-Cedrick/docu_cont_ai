import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './containers/admin/dashboard';
import Signup from './containers/auth/signup';
import Login from './containers/auth/login';
import BillingPage from './containers/admin/billingPage';
import UserAgency from './containers/admin/UserAgency';
import AccountsPage from './containers/admin/accountsPage';
import TaskPage from './containers/admin/taskPage';
import ProfilePage from './containers/agency/profilePage';
import ReportPage from './containers/agency/ReportPage';
import billingAgency from './containers/agency/billingAgency';
import UserAccounts from './containers/agency/userAccounts';
import CloudPage from './containers/agency/cloudPage';
import Loader from './components/shared/Loader';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const routes = [
    {
      path: '/admin/dashboard',
      component: Dashboard,
    },
    {
      path: '/admin/user',
      component: UserAgency,
    },
    {
      path: '/admin/billing',
      component: BillingPage,
    },
    {
      path: '/admin/accounts',
      component: AccountsPage,
    },
    {
      path: '/admin/tasks',
      component: TaskPage,
    },
    {
      path: '/admin/support',
      component: Dashboard,
    },
    {
      path: '/admin/settings',
      component: Dashboard,
    },
    {
      path: '/admin/cloud',
      component: Dashboard,
    },
    {
      path: '/agency/profile',
      component: ProfilePage,
    },
    {
      path: '/agency/report',
      component: ReportPage,
    },
    {
      path: '/agency/billing',
      component: billingAgency,
    },
    {
      path: '/agency/accounts',
      component: UserAccounts,
    },
    {
      path: '/agency/tasks',
      component: TaskPage,
    },
    {
      path: '/agency/support',
      component: Dashboard,
    },
    {
      path: '/agency/settings',
      component: Dashboard,
    },
    {
      path: '/agency/cloud',
      component: CloudPage,
    },
    
  ];

  return loading ? (
    <Loader />
  ) : (
   <Routes>
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route element={<DefaultLayout />}>
        {routes.map(({ path, component: Component }) => (
            <Route
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
      </Route>
   </Routes>
  );
}

export default App;
