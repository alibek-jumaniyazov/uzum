import api from '../../Contex/Api'
import { Link } from "react-router-dom"

import Card from "../../Components/Katta Sotuvlar/Card";
import { useState } from 'react';
export default function Kiyim() {
    const [narx, setNarx] = useState(200)
    const [max, setMax] = useState(20000)

    return (
        <div className="Elektronika">
            <p className="pages_list">Bosh sahifa / Barcha toifalar /Elektronika</p>
            <div className="elektornikaMenu">
                <h2 className="title">Одежда</h2>
                <div className="selects">
                    <span>Saralash</span>
                    <select name="" id="">
                        <option value="">Ommabop</option>
                    </select>
                </div>
            </div>
            <hr className='hrElecktronika' />
            <div className="contents">
                <div className="elements">
                    <p className="elemTitle">Turkumlar</p>
                    <div className="listItems">
                        <Link to={'/barcha'} > <p className="listItemstext bar"><i class="fa-solid fa-angle-left"></i> Barcha turkumlar</p> </Link>
                        <p className='listItemstext mainText'>Kiyim</p>
                        <p className="listItemstext">Bolalar kiyimi</p>
                        <p className="listItemstext">Ayollar kiyimi</p>
                        <p className="listItemstext">Erkaklar kiyimi</p>
                        <p className="listItemstext">Maxsus kiyimlar</p>
                    </div>
                    <p className="elemTitle">Narx, baho</p>
                    <div className="narx">
                        <div className="narxInput">
                            <div className="inputTextura">
                                <div className="oranm">
                                    <p>dan</p>
                                    <input type="text" value={narx} />
                                </div>

                            </div>
                            <div className="inputTextura">
                                <div className="oranm">
                                    <p>oldin</p>
                                    <input type="text" value={max} />
                                </div>

                            </div>
                        </div>

                    </div>
                    <p className="elemTitle">Brend</p>
                    <div className="Brend">
                        <p>
                            <input type="checkbox" />
                            1MORE
                        </p>
                        <p>
                            <input type="checkbox" />
                            7saber
                        </p>
                        <p>
                            <input type="checkbox" />
                            HAGIBIS
                        </p>
                        <p>
                            <input type="checkbox" />
                            NOVEY
                        </p>
                        <p>
                            <input type="checkbox" />
                            Varmilo
                        </p>
                        <p>
                            <input type="checkbox" />
                            2E
                        </p>
                    </div>
                </div>
                <div className="lists">
                    <div className="Cards elem">

                        {
                            api.map((item) => (
                                <Card item={item} />
                            ))
                        }

                    </div>

                </div>
            </div>

        </div>
    )
}