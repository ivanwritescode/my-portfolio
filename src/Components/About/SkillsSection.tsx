const SkillsSection = () => {
    return (
        <div className="skills container">
            <div className="section-title">
                <h2>skills</h2>
            </div>
            <div className="row skills-content">
                <div className="col-lg-6">
                    <div className="progress">
                        <span className="skill">HTML <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                style={{ width: "90%" }}
                                role="progressbar"
                                aria-valuenow={ 100 }
                                aria-valuemin={ 0 }
                                aria-valuemax={ 100 }>
                            </div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">CSS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                style={{width: "90%"}}
                                role="progressbar"
                                aria-valuenow={ 100 }
                                aria-valuemin={ 0 }
                                aria-valuemax={ 100 }>
                            </div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">JavaScript <i className="val">60%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                style={{width: "60%"}}
                                role="progressbar"
                                aria-valuenow={ 100 }
                                aria-valuemin={ 0 }
                                aria-valuemax={ 100 }>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="progress">
                        <span className="skill">React <i className="val">50%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                style={{width: "50%"}}
                                role="progressbar"
                                aria-valuenow={ 100 }
                                aria-valuemin={ 0 }
                                aria-valuemax={ 100 }>
                            </div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">Redux <i className="val">40%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                style={{width: "40%"}}
                                role="progressbar"
                                aria-valuenow={ 100 }
                                aria-valuemin={ 0 }
                                aria-valuemax={ 100 }>
                            </div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill">PHP <i className="val">70%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                style={{width: "40%"}}
                                role="progressbar"
                                aria-valuenow={ 100 }
                                aria-valuemin={ 0 }
                                aria-valuemax={ 100 }>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;