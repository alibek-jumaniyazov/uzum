import star from '../../image/star.svg'
import shopBtn from '../../image/button.svg'

export default function Card({ item }) {
    
    return (
        <div className="Card">
            <div className="img">
                <img src={item.img} alt="" />
                <p>Katta sotuvlar</p>
            </div>
            <p className="name">{item.name}</p>
            <div className="ballar">
                <img src={star} alt="" />
                <p>{item.ball}</p>
            </div>
            <div className="nasiya">
                <p>{item.nasia} so'm/oyiga</p>
            </div>
            <div className="card_foot">
                <div className="sum">
                    <p className="oldigni">{item.oldingi} so'm</p>
                    <p className="hozirgi">{item.hozirgi} so'm</p>
                </div>
                <img className='shop_btn' src={shopBtn}alt="" />
            </div>

        </div>
    )
}
