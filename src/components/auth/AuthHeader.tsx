
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className="text-center">
      <Link to="/" className="flex justify-center mb-6">
        <span className="text-guiitar-primary font-serif font-bold text-3xl">GUIITAR</span>
        <span className="text-guiitar-accent font-serif font-bold text-3xl ml-2">COUNCIL</span>
      </Link>
      <h2 className="mt-6 text-2xl font-extrabold text-gray-900">Welcome Back</h2>
      <p className="mt-2 text-sm text-gray-600">
        Sign in to access your account or register for a new one
      </p>
      
      {isLoggedIn && (
        <div className="mt-4 flex flex-col space-y-2">
          <Link 
            to="/dashboard" 
            className="text-guiitar-primary hover:text-guiitar-primary/90 text-sm font-medium"
          >
            Go to your dashboard
          </Link>
          <Link 
            to="/dashboard/profile" 
            className="text-guiitar-accent hover:text-guiitar-accent/90 text-sm font-medium"
          >
            View your profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthHeader;
