import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Initial state
const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  role: JSON.parse(localStorage.getItem('user'))?.role || null,
  loading: false,
  error: null,
};

// Create context
const AuthContext = createContext(null);

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
        role: action.payload.user.role,
        loading: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'LOGOUT':
      return {
        user: null,
        token: null,
        role: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('user');
    }

    if (state.token) {
      localStorage.setItem('token', state.token);
    } else {
      localStorage.removeItem('token');
    }
  }, [state.user, state.token]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
