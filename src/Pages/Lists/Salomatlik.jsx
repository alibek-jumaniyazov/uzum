import api from '../../Contex/Api'

import Card from "../../Components/Katta Sotuvlar/Card";
import { useState } from 'react';
export default function Salomatlik() {
    const [narx , setNarx] = useState(200)
    const [max , setMax] = useState(20000)

    return (
        <div className="Elektronika">
            <p className="pages_list">Bosh sahifa / Barcha toifalar /Elektronika</p>
            <div className="elektornikaMenu">
                <h2 className="title">Товары для здоровья</h2>
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
                        <p className="listItemstext"><i class="fa-solid fa-angle-left"></i> Barcha turkumlar</p>
                        <p className='listItemstext mainText'>Elektronika</p>
                        <p className="listItemstext">Elektronikalar uchun aksessuarlar</p>
                        <p className="listItemstext">Oʻyin pristavkalari</p>
                        <p className="listItemstext">Kompyuter texnikasi</p>
                        <p className="listItemstext">Navigatorlar</p>
                        <p className="listItemstext">Quloqchinlar va audio texnikalar</p>
                        <p className="listItemstext">Noutbuklar, planshetlar va elektron kitoblar</p>
                        <p className="listItemstext">Optik anjomlar</p>
                        <p className="listItemstext">Ofis texnikasi</p>
                        <p className="listItemstext">Smartfonlar va telefonlar</p>
                        <p className="listItemstext">Televizorlar va videotexnikalar</p>
                        <p className="listItemstext">Aqlli soatlar va fitnes bilaguzuklar</p>
                        <p className="listItemstext">Aqlli uy va xavfsizlik</p>
                        <p className="listItemstext">Foto va video texnika</p>
                        <p className="listItemstext">Soatlar va elektron budilniklar</p>
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