import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Create context
const AuthContext = createContext(initialState);

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { 
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
        loading: false,
      };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload.error };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
