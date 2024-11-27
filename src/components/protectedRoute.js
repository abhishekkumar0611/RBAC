import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children, permission }) => {
  const { user, hasPermission } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (permission && !hasPermission(permission)) return <Navigate to="/403" />;

  return children;
};

export default ProtectedRoute;
