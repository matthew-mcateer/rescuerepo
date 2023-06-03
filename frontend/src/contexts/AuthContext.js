import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       const { user: authUser } = await supabase.auth.getUser();
// //       setUser(authUser?.user ?? null);
// //     };

// //     fetchUser();
// //   }, []);

// //   const signInWithGithub = async () => {
// //     const { error } = await supabase.auth.signInWithOAuth({
// //       provider: 'github',
// //       options: {
// //         scopes: "codespace,repo",
// //       }
// //     });

// //     if (error) {
// //       console.log('Error signing in with GitHub:', error.message);
// //     }
// //   };

// //   const signOut = async () => {
// //     const { error } = await supabase.auth.signOut();

// //     if (error) {
// //       console.log('Error signing out:', error.message);
// //     } else {
// //       setUser(null);
// //     }
// //   };

// //   const value = {
// //     user,
// //     setUser,
// //     signInWithGithub,
// //     signOut,
// //   };

// //   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// // };

// // export const useAuth = () => useContext(AuthContext);

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       console.log("AuthContext.js: AuthProvider()");
//       const { user: authUser } = await supabase.auth.getUser();
//       setUser(authUser?.user ?? null);
//       setLoading(false);
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

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
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

  // useEffect(() => {
  //   supabase.auth.signInWithOAuth({
  //     provider: 'github',
  //     options: {
  //       scopes: 'codespace,repo'
  //     }
  //   }).then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

  // const login = async () => {
  //   const { error } = await supabase.auth.signInWithOAuth({
  //     provider: 'github',
  //     options: {
  //       scopes: 'codespace,repo'
  //     }
  //   })
  //   console.log("AuthProvider.js: login()");
  //   // const res = await supabase.auth.session();
  //   // console.log(res);
  //   // console.log(error);
  //   if (error) throw error

    
  // }

// const login = () => supabase.auth.signInWithOAuth({ provider: 'github', options: { scopes: 'codespace,repo'} })

async function login() {
  const { data, error  } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })

  if (error) {
    throw error
  } else {
    setTimeout(() => {
      console.log(data)
      // Get the user
      const user = supabase.auth.getUser()
      console.log(user)
      setUser(data.user)
    }, 5000);
  }
}

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const value = {
    session,
    user,
    setUser,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
