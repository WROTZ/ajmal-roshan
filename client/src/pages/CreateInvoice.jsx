import { useState } from "react";

export default function CreateInvoice() {
    const [invoiceNumber, setInvoiceNumber] = useState("INV-001");
    const [customerName, setCustomerName] = useState("Sample Customer");
    const [items, setItems] = useState([
        { description: "Marine Spare Part", qty: 1, unitPrice: 100 }
    ]);

    const grandTotal = items.reduce(
        (sum, i) => sum + i.qty * i.unitPrice,
        0
    );

    return (
        <div className="print-container max-w-5xl mx-auto bg-white p-8 shadow">

        {/* Header */}
        <div className="flex justify-between mb-6">
            <div>
            <h1 className="text-2xl font-bold">COMMERCIAL INVOICE</h1>
            <p>Potent Marine Services L.L.C-FZ</p>
            <p>Dubai, United Arab Emirates</p>
            </div>
            <div className="text-right">
            <p><strong>Invoice No:</strong> {invoiceNumber}</p>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
            </div>
        </div>

        <hr className="my-4" />

        {/* Customer */}
        <h2 className="font-semibold mb-2">Customer Details</h2>
        <p>{customerName}</p>

        {/* Table */}
        <table className="mt-4 w-full border">
            <thead>
            <tr>
                <th className="border p-2">Description</th>
                <th className="border p-2">Qty</th>
                <th className="border p-2">Unit Price</th>
                <th className="border p-2">Total</th>
            </tr>
            </thead>
            <tbody>
            {items.map((i, idx) => (
                <tr key={idx}>
                <td className="border p-2">{i.description}</td>
                <td className="border p-2">{i.qty}</td>
                <td className="border p-2">{i.unitPrice}</td>
                <td className="border p-2">{i.qty * i.unitPrice}</td>
                </tr>
            ))}
            </tbody>
        </table>

        {/* Total */}
        <div className="text-right mt-4">
            <p className="font-bold">
            Grand Total: USD {grandTotal}
            </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm">
            We certify that the information on this invoice is true and correct.
        </p>

        {/* Print Button */}
        <button
            onClick={() => window.print()}
            className="no-print mt-6 bg-marine text-white px-4 py-2 rounded"
        >
            Print / Save as PDF
        </button>

        </div>
    );
}
