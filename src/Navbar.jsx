import { useRef, useState } from "react"
import local from './image/local.svg'
import uzb from './image/uzb.svg'
import icon1 from './image/elektronika.svg'
import icon3 from './image/Kiyim.svg'
import icon2 from './image/Texnika.svg'
import icon4 from './image/Poyovzal.svg'
import icon5 from './image/Aksesuar.svg'
import icon6 from './image/Gozallik.svg'
import icon7 from './image/Salomatlik.svg'
import icon8 from './image/uy.svg'
import icon9 from './image/qurilish.svg'
import icon10 from './image/avtotolovlar.svg'
import user from './image/user.svg'
import heart from './image/heart.svg'
import shop_card from './image/shop_card.svg'
import logo from './image/logo.svg'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

export default function Navbar() {
    const [gorod, setGorod] = useState('Urganch')
    const [flag, setFlag] = useState(uzb)
    const [box, setBox] = useState('katalogClose')

    const boxRef = useRef(null)

    function className() {
        if (box == 'katalogClose') {
            boxRef.current.style.display = 'block'
            setBox('katalogOpen')
        }
        if (box == 'katalogOpen') {
            setBox('katalogClose')

            setTimeout(() => {
                boxRef.current.style.display = 'none'
            }, 500)
        }
    }

                                      
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
                    <div onClick={() => className()} className="katalog">
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
                <Link to={'/elektronika'} >  <li className="items">Elektronika</li>  </Link>
                <Link to={'/texnika'} >  <li className="items">Maishiy texnika</li>  </Link>
                <Link to={'/kiyim'} >  <li className="items">Kiyim</li>  </Link>
                <Link to={'/poyabzallar'} >  <li className="items">Poyabzallar</li>  </Link>
                <Link to={'/aksesuarlar'} >  <li className="items">Aksessuarlarr</li>  </Link>
                <Link to={'/goʻzallik'} >  <li className="items">Goʻzallik</li>  </Link>
                <Link to={'/salomatlik'} >  <li className="items">Salomatlik</li>  </Link>
                <Link to={'/uy'} >  <li className="items">Uy-roʻzgʻor buyumlari</li>  </Link>
                <Link to={'/qurilish'} >  <li className="items">Qurilish va taʼmirlash</li>  </Link>
                <Link to={'/avtotolovlarr'} >  <li className="items">Avtotovarlar</li>  </Link>
                <Link to={'/bolalar'} >  <li className="items">Bolalar tovarlari</li>  </Link>
                <li className="items">Yana</li>
            </ul>
            <div ref={boxRef} className={box}>
                <div className="boxContainer">
                    <div className="iconTitle">
                        <div className="boxTitlt elektronika1">
                            <div className="boxItem">
                                <img src={icon1} alt="" />
                                <p>Elektronika</p>
                            </div>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>

                        <div className="boxTitlt texnika1">
                            <div className="boxItem">
                                <img src={icon1} alt="" />
                                <p>Elektronika</p>
                            </div>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                    <div className="iconText">
                        <div className="elektronikaText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam tenetur atque inventore reprehenderit, corporis odit fugit, praesentium incidunt necessitatibus nulla cupiditate sapiente? Doloribus, aspernatur sapiente. Dolorum sapiente sed nemo.
                        </div>

                        <div className="texnikaText">
                            Minima aperiam tenetur atque inventore reprehenderit, corporis odit fugit, praesentium incidunt necessitatibus nulla cupiditate sapiente? Doloribus, aspernatur sapiente. Dolorum sapiente sed nemo.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}