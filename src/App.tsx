import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './containers/admin/dashboard';
import Signup from './containers/auth/signup';
import Login from './containers/auth/login';
import Loader from './components/shared/Loader';
import BillingPage from './containers/admin/billingPage';
import UserAgency from './containers/admin/UserAgency';
import AccountsPage from './containers/admin/accountsPage';
import TaskPage from './containers/admin/taskPage';

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
