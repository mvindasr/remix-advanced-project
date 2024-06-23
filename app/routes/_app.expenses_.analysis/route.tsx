import { Chart, ExpenseStatistics } from "~/components/expenses";
import { DUMMY_EXPENSES } from "~/data";

export default function ExpensesAnalysisPage() {
    return <main>
        <Chart expenses = {DUMMY_EXPENSES}/>
        <ExpenseStatistics expenses = {DUMMY_EXPENSES}/>
    </main>;
}