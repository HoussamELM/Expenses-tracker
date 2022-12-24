import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card'

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.items.map((expense) =>
            (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>
            ))}
        </Card>
    )
}

export default Expenses