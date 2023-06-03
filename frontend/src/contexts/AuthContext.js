import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { user: authUser } = await supabase.auth.getUser();
//       setUser(authUser?.user ?? null);
//     };

//     fetchUser();
//   }, []);

//   const signInWithGithub = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: 'github',
//       options: {
//         scopes: "codespace,repo",
//       }
//     });

//     if (error) {
//       console.log('Error signing in with GitHub:', error.message);
//     }
//   };

//   const signOut = async () => {
//     const { error } = await supabase.auth.signOut();

//     if (error) {
//       console.log('Error signing out:', error.message);
//     } else {
//       setUser(null);
//     }
//   };

//   const value = {
//     user,
//     setUser,
//     signInWithGithub,
//     signOut,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => useContext(AuthContext);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      console.log("AuthContext.js: AuthProvider()");
      const { user: authUser } = await supabase.auth.getUser();
      setUser(authUser?.user ?? null);
      setLoading(false);
    };

    fetchUser();
  }, []);

  const signInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        scopes: "codespace,repo",
      }
    });

    if (error) {
      console.log('Error signing in with GitHub:', error.message);
    }
    
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log('Error signing out:', error.message);
    } else {
      setUser(null);
    }
  };

  const value = {
    user,
    setUser,
    signInWithGithub,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
