import { useNavigate } from "@remix-run/react";
import { ExpenseForm } from "~/components/expenses";
import { Modal } from "~/components/util";

export default function UpdateExpensesPage() {
    const navigate = useNavigate();
    function closeHandler() {
        // navigate programatically
        navigate('/expenses');
    }
    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm/>
        </Modal>
    );
}


