import { useContext } from 'react';
import { AppContext } from '../context/userContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authContext = useContext(AppContext);
  const { user, loading } = authContext;

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;
