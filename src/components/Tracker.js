import { useState } from "react";

function Tracker() {
    const[amount, setAmount] = useState(0)
    const expense = amount - 10;
    return (<div className="create">
<h1>Expense Tracker</h1>
<form>
    <label>Enter the amount</label>
    <input type="number" required value={amount}>
    </input>

 
</form>
    </div>
    )
}

export default Tracker;