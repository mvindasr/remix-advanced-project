import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { ExpenseForm } from "~/components/expenses";
import { Modal } from "~/components/util";
import { addExpense } from "~/data/expenses.server";
import { Expense } from "~/models";

export default function AddExpensesPage() {
  const navigate = useNavigate();
  function closeHandler() {
    // navigate programatically
    navigate("/expenses");
  }
  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const expenseData: Expense = {
    id: "",
    title: formData.get("title") as string,
    amount: +formData.get("amount")!,
    date: formData.get("date") as string,
  };

  await addExpense(expenseData);
  return redirect('/expenses')
}
