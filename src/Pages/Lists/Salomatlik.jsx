import api from '../../Contex/Api'

import Card from "../../Components/Katta Sotuvlar/Card";

export default function Salomatlik() {
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
                        <p>Salomatlik</p>
                        <p>Vitaminlar, BFQlar, ozuqaviy qoʻshimchalar</p>
                        <p>Intim kosmetika</p>
                        <p>Massaj uskunalari</p>
                        <p>Tibbiy buyumlar va sarflov materiallari</p>
                        <p>Tibbiy jihozlar</p>
                        <p>Optika</p>
                        <p>Ortopedik buyumlar</p>
                        <p>Prezervativlar va lubrikantlar</p>
                        <p>Smartfonlar va telefonlar</p>
                        <p>Televizorlar va videotexnikalar</p>
                        <p>Aqlli soatlar va fitnes bilaguzuklar</p>
                        <p>Aqlli uy va xavfsizlik</p>
                        <p>Foto va video texnika</p>
                        <p>Soatlar va elektron budilniklar</p>
                    </div>
                    <p className="elemTitle">Narx, baho</p>
                    <div className="narx">
                        <input type="range" />
                    </div>
                    <p className="elemTitle">Narx, baho</p>
                    <div className="Brend">
                        <p><div class="cntr">

                            <input checked="" class="check" type="checkbox" />
                        </div> 1MORE</p>
                        <p><div class="cntr">
                            <input checked="" type="checkbox" id="cbx" class="hidden-xs-up" />
                          
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
                <div className="lists f">
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