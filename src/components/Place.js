// Place is a component that shows information about the passed place
const Place = ({place}) => {

    return (
        <div className="container">
            <div class='row'>
                <div class='column'>
                    <h2> {place.name} </h2>
                    {place.address}
                </div>
                <div class='column'>
                    <h3> Opening hours: </h3>
                    {/* Render opening hours first by day range  */}
                    {place.openingHours.map(dayRangeTimeInterval => {
                        return <div class='row'>
                            <div class='column'>
                                {dayRangeTimeInterval.dayRange}
                            </div>
                            {/* Then iterate though each of the time intervals of the day range */}
                            <div class='column' style={{textAlign: 'right'}}>
                                {dayRangeTimeInterval.timeIntervals.length > 0 &&
                                dayRangeTimeInterval.timeIntervals.map(timeInterval => {
                                    return <p>{timeInterval.type === 'CLOSED' ? 'closed' : timeInterval.start + '-' + timeInterval.end} </p>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}


export default Place