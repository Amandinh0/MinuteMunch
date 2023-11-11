import OrderCard from "../components/OrderCard"

function Driver(){
    return(
    <>
        <div>
            <h1>
                Pending Orders:
            </h1>
            <OrderCard />
            <OrderCard />
        </div>
    </>
    )
}

export default Driver