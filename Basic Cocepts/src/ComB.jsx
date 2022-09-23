
import {FirstName, LastName} from './ContextApi'
import ComC from './UseContext'
const ComB = () => {
    return (
        <>
        {/* step 3 : Consume context */}
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return <>
                                <h1>My Name is {fname} {lname}</h1>
                                <ComC />
                                </>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}
export default ComB;