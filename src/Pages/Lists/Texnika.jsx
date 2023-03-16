import api from '../../Contex/Api'
import { Link } from "react-router-dom"

import Card from "../../Components/Katta Sotuvlar/Card";
import { useState } from 'react';
export default function Texnika() {
  

    return (
        <div className="Elektronika">
            <p className="pages_list">Bosh sahifa / Barcha toifalar /Elektronika</p>
            <div className="elektornikaMenu">
                <h2 className="title">Бытовая техника</h2>
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
                        <p className='listItemstext mainText'>Maishiy texnika</p>
                        <p className="listItemstext">Iqlim texnikasi</p>
                        <p className="listItemstext">Oʻyin pristavkalari</p>
                        <p className="listItemstext">Katta maishiy texnika</p>
                        <p className="listItemstext">Maishiy texnika uchun boshqa aksessuarlar va ehtiyot qismlar
                        </p>
                        <p className="listItemstext">Quloqchinlar va audio texnikalar</p>
                        <p className="listItemstext">Uy uchun texnika</p>
             

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