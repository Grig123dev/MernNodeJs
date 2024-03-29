import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hoks';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/Auth.context';

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    useEffect(()=>{
        message(error)
        clearError()
    },[error, message, clearError])
    
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(()=>{
        window.M.updateTextFields()
    },[])
    
    const registerHandler = async () => {
        try{
            const data = request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch(e) {

        }
    }

    const LoginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            console.log(data)
        } catch(e) {

        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h2>Сократи ссылку</h2>
                <div className="card blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">Авторизация</span>
         <div>

         <div className="input-field">
          <input
            placeholder="Введите email"
            id="email"
            type="text"
            name="email"
            className="yellow-input"
            value={form.email}
            onChange={changeHandler}
        />
        <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input
            placeholder="Введите пароль"
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
        />
        <label htmlFor="password">Пароль</label>
        </div>

         </div>
        </div>
        <div className="card-action">
         <button
            type="button"
            className="btn yellow darken-4"
            style={{marginRight: '10px'}}
            disabled={loading}
            onClick={LoginHandler}

        >Войти</button>
         <button
         type="button"
         className="btn grey lighten-1 black-text"
         onClick={registerHandler}
         disabled={loading}
         >
             Регистрация</button>
        </div>
      </div>
            </div>
        </div>
    )
};

export default AuthPage;
