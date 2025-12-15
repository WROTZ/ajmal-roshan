import { useState } from "react";

export default function CreatePackingList() {
    const [items, setItems] = useState([
        {
        description: "Marine Spare Part",
        quantity: 1,
        netWeight: 10,
        grossWeight: 12
        }
    ]);

    return (
        <div className="print-container max-w-5xl mx-auto bg-white p-8 shadow">

        <h1 className="text-2xl font-bold mb-4">PACKING LIST</h1>

        <table className="w-full border">
            <thead>
            <tr>
                <th className="border p-2">Description</th>
                <th className="border p-2">Qty</th>
                <th className="border p-2">Net Wt</th>
                <th className="border p-2">Gross Wt</th>
            </tr>
            </thead>
            <tbody>
            {items.map((i, idx) => (
                <tr key={idx}>
                <td className="border p-2">{i.description}</td>
                <td className="border p-2">{i.quantity}</td>
                <td className="border p-2">{i.netWeight}</td>
                <td className="border p-2">{i.grossWeight}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <p className="mt-6 text-sm">
            This packing list is true and correct for shipping purposes.
        </p>

        <button
            onClick={() => window.print()}
            className="no-print bg-marine text-white px-4 py-2 rounded mt-4"
        >
            Print / Save as PDF
        </button>

        </div>
    );
}
