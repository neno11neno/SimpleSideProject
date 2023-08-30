import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEyeSlash);

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);


  // 使用useNavigate函數來獲取一個導航函數
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      setError('UserName跟Password都要填喔!');
      return;
    }

    if (username.length < 8 || password.length < 8) {
      setError('UserName跟Password必須超過八碼');
      return;
    }

    // 假帳號列表
    const fakeAccounts = [
      { username: 'fakeuser1', password: 'password1' },
      { username: 'fakeuser2', password: 'password2' },
      // 在此添加其他假帳號
    ];

    // 驗證輸入的帳號與密碼是否匹配假帳號列表中的任何一對
    const isValidAccount = fakeAccounts.some(
      (fakeAccount) => fakeAccount.username === username && fakeAccount.password === password
    );

    if (!isValidAccount) {
      setError('無效的帳號或密碼');
      return;
    }

    // 在這裡，您可以使用您的用戶名和密碼來調用您的登入API或邏輯
    // 例如，使用fetch或axios發送一個POST請求到您的後端服務器
    // 或者，使用navigate函數來跳轉到您的主頁
    // 我只是打印它們到控制台作為示例
    console.log(username, password);
    navigate('/Home');
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label>UserName：</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='form-group input-container'>
            <label>Password：</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className='input-field'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='button' className='toggle-button' onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          {error && <p className='error-message'>{error}</p>}
          <div className='button-container'>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

