import apple from './image/apple.svg'
import insta from './image/insta.svg'
import youtube from './image/youtube.svg'
import tg from './image/tg.svg'
import facebook from './image/facebook.svg'
import play from './image/Gplay.svg'


export default function Footer() {
    return (
        <div className="Footer">
            <div className="mainFooter">
                <div className="footInfo">
                    <div className="infoText">
                        <p>Biz haqimizda</p>
                        <span>Topshirish punktlari</span>
                        <span>Vakansiyalar</span>
                    </div>
                    <div className="infoText">
                        <p>Foydalanuvchilarga</p>
                        <span>Biz bilan bogʻlanish</span>
                        <span>Savol-Javob</span>
                    </div>
                    <div className="infoText">
                        <p>Tadbirkorlarga</p>
                        <span>Sotuvchi kabinetiga kirish</span>
                    </div>
                    <div className="infoText s">
                        <p>Ilovani yuklab olish</p>
                        <div className="footIcon">
                            <p><img src={apple} alt="" />AppStore</p>
                            <p><img src={play} alt="" />Google Play</p>
                        </div>
                        <div className="infoText">
                            <p>Uzum ijtimoiy tarmoqlarda</p>
                            <div className="iconsFoot">
                                <img src={insta} alt="" />
                                <img src={tg} alt="" />
                                <img src={youtube} alt="" />
                                <img src={facebook} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footBottom">
                    <p>Maxfiylik kelishuvi Foydalanuvchi kelishuvi</p>
                    <span>«2023© MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</span>
                </div>
            </div>

        </div>
    )
}