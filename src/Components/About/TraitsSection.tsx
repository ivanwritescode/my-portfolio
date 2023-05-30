const Traits = () => {
    const developerTraits = [
        {name: "Diligent", icon: <i className="bi bi-gear"></i>},
        {name: "Hard Worker", icon: <i className="bi bi-hammer"></i>},
        {name: "Analytical", icon: <i className="bi bi-pie-chart"></i>},
        {name: "Organized", icon: <i className="bi bi-clock"></i>},
    ]
    return (
        <div className="traits container">
            <div className="row">
              { developerTraits.map((trait) =>
                <div className="col-lg-3 col-md-6 mt-5">
                    <div className="trait-box">
                        { trait.icon }
                        <span>{ trait.name }</span>
                    </div>
                </div>) }
            </div> 
        </div>
    )
}

export default Traits;