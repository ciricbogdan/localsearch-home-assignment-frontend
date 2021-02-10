// Place is a component that shows information about the passed place
import OpeningStatus from "./OpeningStatus";

const Place = ({place}) => {

    return (
        <div className="container">
            <div className='row'>
                <div className='column'>
                    <h2> {place.name} </h2>
                    {place.address}
                </div>
                <div className='column'>
                    <h3> Opening hours:
                        <OpeningStatus isOpen={place.open} opensNextTime={place.opensNextTime} />
                        {/*<span style={{color: 'red'}}> {place.open ? '(Open now)': '(Closed) opens in ' + {place.opensNextTime}}</span>*/}
                    </h3>
                    {/* Render opening hours first by day range  */}
                    {place.openingHours.map(dayRangeTimeInterval => {
                        return <div className='row' key={dayRangeTimeInterval.dayRange}>
                            <div className='column'>
                                {dayRangeTimeInterval.dayRange}
                            </div>
                            {/* Then iterate though each of the time intervals of the day range */}
                            <div className='column' style={{textAlign: 'right'}}>
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