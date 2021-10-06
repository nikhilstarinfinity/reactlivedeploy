import React from 'react'
const Menucard = ({ menuData }) => {
    // console.log(menuData)
    return (
        <>
<section className="main-card--container">

            {menuData.map(
                (currElem) => {
                    return (
<>

                        <div className="card-container" key={currElem.id}>
                            <div className="card">
                                <div className="cardbody">
                                    <span className="card-number card-circle subtle">{currElem.id}</span>
                                    <h2 className="card-title">{currElem.description}</h2>
                                    <span className="card-author" >Breakfast karoonga actually jarror karoonga</span>
                                    <img src={currElem.Image} alt="images aa rhi" className="card-media" />
                                </div>

                            </div>


                        </div>
</>  
                    )
                }
            )}

</section>
        </>
    )
}

export default Menucard
