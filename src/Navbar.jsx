import { useState } from "react"
import local from './image/local.svg'
import uzb from './image/uzb.svg'
import user from './image/user.svg'
import heart from './image/heart.svg'
import shop_card from './image/shop_card.svg'
import logo from './image/logo.svg'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

export default function Navbar() {
    const [gorod, setGorod] = useState('Urganch')
    const [flag, setFlag] = useState(uzb)
    return (
        <div className="Navbar">
            <div className="nav">
                <div className="navbar">
                    <div className="navGorod">
                        <div className="gorodInfo">
                            <img src={local} alt="" />
                            <p>Shahar:</p>
                            <span>{gorod}</span>
                        </div>
                        <p>Topshirish punktlari</p>
                    </div>
                    <div className="navDatavka">
                        <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
                    </div>
                    <div className="navFoot">
                        <p>Savol-javoblar</p>
                        <p>Buyurtmalarim</p>
                        <div className="lagluage">
                            <img src={flag} alt="" />
                            <select name="" id="">
                                <option value="">Оʻzbekcha</option>
                                <option value="">Ruscha</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navSearch">
              <Link to={'/'}><img className="logo" src={logo} alt="" /></Link>
                <div className="searchBar">
                    <div className="katalog">
                        <label class="container">
                            <input type="checkbox" />
                            <div class="checkmark">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </label>
                        <p>Katalog</p>
                    </div>
                    <div className="search">
                        <input placeholder="Mahsulotlar va turkumlar izlash" type="text" />
                        <button className="button">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
                <div className="searchUsers">
                    <div className="user">
                        <img src={user} alt="" />
                        <p>Kirish</p>
                    </div>
                    <div className="heart user">
                        <img src={heart} alt="" />
                        <p>Saralangan</p>
                    </div>
                    <div className="card user">
                        <img src={shop_card} alt="" />
                        <p>Savat</p>
                    </div>
                </div>

            </div>
            <ul className="navList">
                <li className="items">Elektronika</li>
                <li className="items">Maishiy texnika</li>
                <li className="items">Kiyim</li>
                <li className="items">Poyabzallar</li>
                <li className="items">Aksessuarlarr</li>
                <li className="items">Goʻzallik</li>
                <li className="items">Salomatlik</li>
                <li className="items">Uy-roʻzgʻor buyumlari</li>
                <li className="items">Qurilish va taʼmirlash</li>
                <li className="items">Avtotovarlar</li>
                <li className="items">Bolalar tovarlari</li>
                <li className="items">Yana</li>
            </ul>
        </div>
    )
}