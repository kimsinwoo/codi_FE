import { Link } from 'react-router-dom'
import style from '../styles/NavBar.module.css'

export default function NavBar({ isLogin, isSelect, setIsSelect }) {
    return (
        <div className={style.NavBar}>
            {
                isLogin === true ?
                    <button className={style.Logout}>로그아웃</button> :
                    <div className={style.isNotLogin}>
                        <Link className={style.Link}>로그인</Link>
                        <Link className={style.Link}>회원가입</Link>
                    </div>
            }
            <div className={style.ChatBot_Container}>
                {
                    isSelect === true ?
                        <div
                            className={style.Select_ChatBot}
                            onClick={() => {
                                setIsSelect(true)
                            }}
                        >
                            <img src="" alt="" />
                            <h3>코디 챗봇</h3>
                        </div> :
                        <div className={style.NotSelect_ChatBot}>
                            <img src="" alt="" />
                            <h3>코디 챗봇</h3>
                        </div>
                }
            </div>
        </div>
    )
}