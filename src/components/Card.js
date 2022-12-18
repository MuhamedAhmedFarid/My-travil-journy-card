

function Card(props) {
    return (
        <div className="card--1" >
        <div className="img">
            <img className="card--img" src={props.item.imageUrl} />
        </div>
            <div className="card">
                <div className="card--content" >
                    <div className="card--place">
                        <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/place_gm_blue_24dp.png" />
                        <h5>{props.item.location}</h5>
                        <a href="#">View on Google Maps</a>
                    </div>
                    <h3 className="card--title">{props.item.title}</h3>
                    <div className="card--history">
                        <p>{props.item.startDate} : {props.item.endDate}</p>  <br />
                        <p> {props.item.description}</p>
                    </div>

                </div>
            </div>

        </div >

    )
}

export default Card;