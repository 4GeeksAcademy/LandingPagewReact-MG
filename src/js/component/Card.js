import React from 'react';
import placeHolder from "../../img/500x325.png";

const Card = (props) => {
    let cardStyle = {
        width: '18rem'
    }
    return (
        <div className='mb-4 col-lg-3 col-md-6'>
            <div className="h-100 card text-center">
                <img src={placeHolder} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        {props.cardText}
                    </p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;