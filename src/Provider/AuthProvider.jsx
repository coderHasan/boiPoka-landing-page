import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../utils/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  // Continue Google
  const googleProvider = new GoogleAuthProvider();
  const handleGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Signin User with email
  const handleUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign Out
  const handleSignOut = () => {
    signOut(auth);
  };
  const updateUser = (name, photo) => {
    setLoader(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    user,
    setUser,
    handleGoogle,
    loader,
    createUser,
    handleUser,
    handleSignOut,
    updateUser,
  };
  useEffect(() => {
    const unsubsdcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else setUser(null);
    });
    setLoader(false);
    return () => {
      unsubsdcribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
