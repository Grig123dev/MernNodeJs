import React, {useState, useEffect, useContext} from 'react'
import { useHttp } from '../hooks/http.hoks';
import { AuthContext } from '../context/Auth.context';
import { useHistory } from 'react-router-dom';

const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')
    const pressHandler = async event => {
        if(event.key === 'Enter') {
            try{
              const data = await request('/api/link/generate', 'POST', {from: link}, {
                Authorization: `Bearer ${auth.token}`
              })
              history.push(`/detail/${data.link._id}`)
            } catch(e){ }
        }
    }

    useEffect(()=>{
        window.M.updateTextFields()
    },[])
    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
            <div className="input-field">
          <input
            placeholder="Вставтье ссылку"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
         <label htmlFor="link">Введите ссылку</label>
         </div>
            </div>
        </div>
    )
};

export default CreatePage;
