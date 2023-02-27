import api from '../../Contex/Api'
import { Link } from "react-router-dom"

import Card from "../../Components/Katta Sotuvlar/Card";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'
import { useState } from 'react';


export default function Barcha() {


    const [narx, setNarx] = useState(200)
    const [max, setMax] = useState(20000)

    return (
        <div className="Elektronika">
            <p className="pages_list">Bosh sahifa / Barcha toifalar /Elektronika</p>
            <div className="elektornikaMenu">
                <h2 className="title">Все категории</h2>
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
                        <Link to={'/avtotolovlarr'} > <p className="listItemstext">Avtotovarlar</p> </Link>
                        <Link to={'/aksesuarlar'} >  <p className="listItemstext">Aksessuarlar</p> </Link>
                        <Link to={'/texnika'} >  <p className="listItemstext">Maishiy texnika</p> </Link>
                        <p className="listItemstext">Maishiy kimyoviy moddalar va shaxsiy gigiyena</p>
                        <p className="listItemstext">Dacha, bogʻ va tomorqa</p>
                        <Link to={'/bolalar'} >  <p className="listItemstext">Bolalar tovarlari</p> </Link>
                        <Link to={'/salomatlik'} >    <p className="listItemstext">Salomatlik</p> </Link>
                        <p className="listItemstext">Hayvonlar uchun tovarlar</p>
                        <p className="listItemstext">Kanselyariya tovarlari</p>
                        <p className="listItemstext">Kitoblar</p>
                        <Link to={'/goʻzallik'} > <p className="listItemstext">Goʻzallik</p> </Link>
                        <Link to={'/poyabzallar'} > <p className="listItemstext">Poyabzallar</p> </Link>
                        <Link to={'/kiyim'} >   <p className="listItemstext">Kiyim</p> </Link>
                        <p className="listItemstext">Oziq-ovqat mahsulotlari</p>
                        <p className="listItemstext">Sport va hordiq</p>
                        <Link to={'/qurilish'} ><p className="listItemstext">Qurilish va taʼmirlash</p></Link>
                        <Link to={'/uy'} > <p className="listItemstext">Uy-roʻzgʻor buyumlari</p></Link>
                        <p className="listItemstext">Xobbi va ijod</p>
                        <Link to={'/elektronika'} > <p className="listItemstext">Elektronika</p> </Link>
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