import { useRef, useState } from "react"
import '../App.css';

// Controlled handling

// const LoginForm = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const handleUsername = (e) => {
//         setUsername(e.target.value);
//     }

//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//     }

//     const handleSubmit = () => {
//         console.log(username, password);
//     }
//     return (
//         <div>
//             <div>
//                 <label>Username</label>
//                 <input type="text" placeholder="Enter username" onChange={handleUsername}/>
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type="password" placeholder="Enter password" onChange={handlePassword}/>
//             </div>
//             <button onClick={handleSubmit}>Login</button>
//         </div>
//     )
// }


// const LoginForm = () => {
//     const [formData, setFormData] = useState({
//         username: "",
//         password: ""
//     });
//     const handleUsername = (e) => {
//         setFormData({
//             ...formData,
//             username: e.target.value
//         });
//     }

//     const handlePassword = (e) => {
//         setFormData({
//             ...formData,
//             password: e.target.value
//         });
//     }

//     const handleSubmit = () => {
//         console.log(formData);
//     }
//     return (
//         <div>
//             <div>
//                 <label>Username</label>
//                 <input type="text" placeholder="Enter username" onChange={handleUsername}/>
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type="password" placeholder="Enter password" onChange={handlePassword}/>
//             </div>
//             <button onClick={handleSubmit}>Login</button>
//         </div>
//     )
// }

// const LoginForm = () => {
//     const [formData, setFormData] = useState({
//         username: "",
//         password: ""
//     });

//     const handleFormUpdate = (key) => (e) => {
//         setFormData({
//             ...formData,
//             [key]: e.target.value
//         });
//     }

//     const handleSubmit = () => {
//         console.log(formData);
//     }

//     return (
//         <div>
//             <div>
//                 <label>Username</label>
//                 <input type="text" placeholder="Enter username" onChange={handleFormUpdate('username')}/>
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type="password" placeholder="Enter password" onChange={handleFormUpdate('password')}/>
//             </div>
//             <button onClick={handleSubmit}>Login</button>
//         </div>
//     )
// }


// Uncontrolled handling
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