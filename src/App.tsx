import React, { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './containers/admin/dashboard';
import Signup from './containers/auth/signup';
import Login from './containers/auth/login';
import Loader from './components/shared/loader';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
   <Routes>
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route element={<DefaultLayout />}>
        <Route index path="/admin/dashboard" element={<Dashboard />} />
        {/* {routes.map(({ path, component: Component }) => (
            <Route
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))} */}
      </Route>
   </Routes>
  );
}

export default App;
