import "./timeperiod.css"


export const TimePeriod = (props) => {

    return (
        <div>
            <h2 className = "timePeriod">
                Period: { props.timePeriod }
            </h2>
        </div>
    )
}
