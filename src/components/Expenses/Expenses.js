import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter.js'
import ExpensesList from './ExpensesList.js'
import ExpensesChart from './ExpensesChart.js'
import { useState } from 'react'

const Expenses = (props) => {

    const [filter, setFilter] = useState('2023')

    const handleFilter = (selectedfilter) => {
        setFilter(selectedfilter)
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filter
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filter} onSelect={handleFilter} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses