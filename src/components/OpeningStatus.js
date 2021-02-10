const OpeningStatus = ({isOpen, opensNextTime}) => {

    const getColor = () => {
        return isOpen ? 'green' : 'red'
    }

    return (
        <span style={{color: getColor(), marginLeft: '5px'}}>
            {isOpen ?
                '(Open)'
                :
                '(Closed) opens ' + opensNextTime
            }
        </span>
    )
}
export default OpeningStatus