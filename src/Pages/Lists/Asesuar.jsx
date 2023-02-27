import api from '../../Contex/Api'

import Card from "../../Components/Katta Sotuvlar/Card";

export default function Aksesuar() {
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
                        <p>Aksessuarlar</p>
                        <p>Kattalar uchun aksessuarlar</p>
                        <p>Oʻyin pristavkalari</p>
                        <p>Qizlar uchun aksessuarlar</p>
                        <p>Oʻgʻil bolalar uchun aksessuarlar</p>
                        <p>Sayohat uchun aksessuarlar</p>
                        <p>Noutbuklar, planshetlar va elektron kitoblar</p>
                        <p>Ayollar aksessuarlari</p>
                        <p>Erkaklar aksessuarlari</p>
                        <p>Diniy aksessuarlar</p>
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