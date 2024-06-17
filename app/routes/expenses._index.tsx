import { ExpensesList } from "~/components/expenses";
import { DUMMY_EXPENSES } from "~/data";

export default function ExpensesPage() {
  return (
    <main>
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </main>
  );
}
