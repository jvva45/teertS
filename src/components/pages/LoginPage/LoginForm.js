import { useState } from 'react'
import Button from '../../Button/Button'
import TextField from '../../TextField/TextField'
import './LoginForm.css'
import useAuth from '../../features/auth/useAuth'
import { useNavigate } from 'react-router-dom'
import { useCustomer } from '../../context/CustomerContext';




const LoginForm = () => {
    const [login, setlogin] = useState('')
    const [password, setPassword] = useState('')
    const { login: LoginUser, error } = useAuth();
    const navigate = useNavigate();

    const {setUserContext } = useCustomer();


    const onSave = async (event) => {
        event.preventDefault();

        const success = await LoginUser(login, password); // aguarda resposta do login
        

        if (success) {
            
            
            setUserContext(login); // agora sim deve estar preenchido
            alert('Login successful!');
            navigate('/dashboard');
        } else {
            alert(error);
        }
    };
    return (

        <section className="login-form">

            <form onSubmit={onSave} >
                <TextField
                    mandatory={true}
                    placeholder="Login"
                    value={login}
                    onChange={value => setlogin(value)}
                />

                <TextField
                    mandatory={true}
                    placeholder="Password"
                    value={password}
                    onChange={value => setPassword(value)}
                />
                <Button>
                    Enter
                </Button>

            </form>
        </section>
    )
}

export default LoginForm