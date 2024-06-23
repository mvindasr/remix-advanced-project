import { Link, Outlet } from "@remix-run/react";
import { ExpensesList } from "~/components/expenses";
import { DUMMY_EXPENSES } from "~/data";
import { FaPlus, FaDownload } from "react-icons/fa";

export default function ExpensesPage() {
  return (
    <main>
      <section id="expenses-actions">
        <Link to="add">
          <FaPlus />
          <span>Add Expense</span>
        </Link>
        <a href="/expenses/raw">
          <FaDownload />
          <span>Load Raw Data</span>
        </a>
      </section>
      <ExpensesList expenses={DUMMY_EXPENSES} />
      <Outlet />
    </main>
  );
}
