import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setCurrentUser } from '../features/user/userSlice';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const { users } = useSelector((state) => state.users);
  console.log(users);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const login = () => {
    const user = users.filter((user) => user.username === userName);
    if (user.length > 0) {
      localStorage.setItem('currentUser', JSON.stringify(user[0]));
      dispatch(setCurrentUser(user[0]));
    } else {
      setMessage(<p className={styles.errorMsg}>You are not regestered in our system</p>);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Wellcome to Our Page</h1>
      <div className={styles.inputesContainer}>
        <input className={styles.input} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your username" />
        <input className={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        <button className={styles.button} type="button" onClick={() => login(email)}>
          Login
        </button>
        {message}
      </div>
    </div>
  );
}
