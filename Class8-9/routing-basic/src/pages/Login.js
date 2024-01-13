import { useRef } from 'react';

const LoginForm = () => {
    const usernameRef = useRef('');
    const passwordRef = useRef('');
    const formRef = useRef('');

    const handleSubmit = () => {
        console.log(usernameRef.current.value, passwordRef.current.value);
    }

    const handleModeChange = () => {
        const isDarkMode = formRef.current.classList.contains('darkMode');
        if (isDarkMode) {
            formRef.current.classList.remove('darkMode')
        } else {
            formRef.current.classList.add('darkMode')
        }
    }

    console.log("Render");

    return (
        <div className="loginFormWrapper" ref={formRef}>
            <h2>Login</h2>
            <button onClick={handleModeChange}>Toggle Mode</button>
            <div>
                <label>Username</label>
                <input ref={usernameRef} type="text" placeholder="Enter username" />
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordRef} type="password" placeholder="Enter password" />
            </div>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default LoginForm;