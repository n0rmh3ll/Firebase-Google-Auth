import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/welcome');
    }
  }, [user, navigate]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/welcome');
    } catch (error) {
      setError('Failed to sign in with Google. Please try again.');
      console.error(error);
    }
  };

  if (user) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Google Authentication </h1>
      <button
        onClick={handleGoogleSignIn}
        className="bg-white text-black font-bold py-2 px-4 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out flex items-center"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
          className="w-6 h-6 mr-2"
        />
        Login with Google
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Login;
