import api from '../../Contex/Api'

import Card from "../../Components/Katta Sotuvlar/Card";

export default function Gozallik() {
    return (
        <div className="Elektronika">
            <p className="pages_list">Bosh sahifa / Barcha toifalar /Elektronika</p>
            <div className="elektornikaMenu">
                <h2 className="title">Электроника</h2>
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
                        <p>Barcha turkumlar</p>
                        <p>Elektronika</p>
                        <p>Elektronikalar uchun aksessuarlar</p>
                        <p>Oʻyin pristavkalari</p>
                        <p>Kompyuter texnikasi</p>
                        <p>Navigatorlar</p>
                        <p>Quloqchinlar va audio texnikalar</p>
                        <p>Noutbuklar, planshetlar va elektron kitoblar</p>
                        <p>Optik anjomlar</p>
                        <p>Ofis texnikasi</p>
                        <p>Smartfonlar va telefonlar</p>
                        <p>Televizorlar va videotexnikalar</p>
                        <p>Aqlli soatlar va fitnes bilaguzuklar</p>
                        <p>Aqlli uy va xavfsizlik</p>
                        <p>Foto va video texnika</p>
                        <p>Soatlar va elektron budilniklar</p>
                    </div>
                    <p className="elemTitle">Narx, baho</p>
                    <div className="narx">

                    </div>
                    <p className="elemTitle">Narx, baho</p>
                    <div className="Brend">
                        <p><div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up" />
                            <label for="cbx" class="cbx"></label>
                        </div> 1MORE</p>
                        <p><div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up" />
                            <label for="cbx" class="cbx"></label>
                        </div> 1MORE</p>
                        <p><div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up" />
                            <label for="cbx" class="cbx"></label>
                        </div> 1MORE</p>
                        <p><div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up" />
                            <label for="cbx" class="cbx"></label>
                        </div> 1MORE</p>
                        <p><div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up" />
                            <label for="cbx" class="cbx"></label>
                        </div> 1MORE</p>
                        <p><div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up" />
                            <label for="cbx" class="cbx"></label>
                        </div> 1MORE</p>
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