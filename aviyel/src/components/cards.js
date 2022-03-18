import './cards.css';
const Card = () => {

    return(
        <>
            <div className="card">
                <div className="card-image">
                    <img src="https://picsum.photos/200/300" alt=""/>          
                </div> 
                <div  className="card-content">
                    <h2>Vaishnav Agarwal</h2>
                    <h4>Ux/Ui Designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                    <div className="card-button">
                        <button>Contribution link</button>
                        <button>Social Connect</button>

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;