import React, { useState, useEffect } from "react";
import { fetchTransactions } from "../api";

const TransactionsTable = ({ month }) => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const perPage = 10;

  useEffect(() => {
    fetchTransactions({ month, search, page, perPage }).then((res) => {
      setTransactions(res.data.transactions);
      setTotal(res.data.total);
    });
  }, [month, search, page]);

  return (
    <div>
      <h2>Transactions</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.description}</td>
              <td>{t.price}</td>
              <td>{new Date(t.dateOfSale).toLocaleDateString()}</td>
              <td>{t.sold ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-secondary"
      >
        Previous
      </button>
      <button
        disabled={page * perPage >= total}
        onClick={() => setPage(page + 1)}
        className="btn btn-primary ml-2"
      >
        Next
      </button>
    </div>
  );
};

export default TransactionsTable;
