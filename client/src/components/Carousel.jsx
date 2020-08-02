import React, { useState, useEffect } from 'react';

function Carousel () {
    return (

        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover"> 
            <div className="carousel-inner">
                <div className="item active">
                <img src="https://images.unsplash.com/photo-1541336187922-bffa4ef13d45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="800px" alt="Cute Pug"></img>
                </div>

                <div className="item">
                <img src="https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80" width="800px" alt="Sweet Lab and it's owner"></img>
                </div>

                <div className="item">
                <img src="https://images.unsplash.com/photo-1532717681453-5fe8155b6cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" width="800px" alt="sweet retriever"></img>
                </div>

                <div className="item">
                <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" width="800px" alt="running puppy"></img>
                </div>

                <div className="item">
                <img src="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" width="800px" alt="running puppy"></img>
                </div>

                <div className="item">
                <img src="https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" width="800px" alt="running puppy"></img>
                </div>

                <div className="item">
                <img src="https://images.unsplash.com/photo-1578133559556-9e83af5fc5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" width="800px" alt="running puppy"></img>
                </div>

                <div className="item">
                <img src="https://images.unsplash.com/photo-1527084010108-605725de32ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" width="800px" alt="running puppy"></img>
                </div>

            </div>

            
            {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a> */}
        </div>
    )
}

export default Carousel;
