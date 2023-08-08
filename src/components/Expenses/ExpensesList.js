import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {


if(props.stuff.length === 0 ){
  return <h2 className='expenses-list__fallback'>Found no expense</h2>
}


  return (
    <ul className='expenses-list'>
    {props.stuff.map((data) => (
      <ExpenseItem
        key={data.id}
        title={data.title}
        cost={data.amount}
        date={data.date}
      />
    ))}


    </ul>
  )
}

export default ExpensesList;