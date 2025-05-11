
import { InspectionRow } from "./InspectionForm";
import { Plus, Minus } from "lucide-react";

interface InspectionFormTableProps {
  rows: InspectionRow[];
  onRowChange: (rowIndex: number, field: keyof InspectionRow, value: string | boolean) => void;
  onAddRow: () => void;
  onRemoveRow: (rowIndex: number) => void;
}

export const InspectionFormTable = ({
  rows,
  onRowChange,
  onAddRow,
  onRemoveRow,
}: InspectionFormTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="form-table mb-4">
        <thead>
          <tr className="text-xs">
            <th className="w-1/12">Actions</th>
            <th className="w-2/12">Supplier Name (Full name on the PO)</th>
            <th className="w-2/12">Factory Name (Full name)</th>
            <th>Brand</th>
            <th>Season</th>
            <th>PO No.</th>
            <th>Style No.</th>
            <th>Color</th>
            <th>PREPACK</th>
            <th>Label Code</th>
            <th>Boys</th>
            <th>Girls</th>
            <th>Mens</th>
            <th>Womens</th>
            <th>Knitted</th>
            <th>Woven</th>
            <th>Order Qty.</th>
            <th>Actual Inspection Request Date</th>
            <th>Inspection Time*</th>
            <th>Mode of Shipment</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.id}>
              <td className="text-center">
                <div className="flex flex-col space-y-1">
                  <button
                    type="button"
                    onClick={onAddRow}
                    className="p-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  {rows.length > 1 && (
                    <button
                      type="button"
                      onClick={() => onRemoveRow(rowIndex)}
                      className="p-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </td>
              <td>
                <input
                  type="text"
                  value={row.supplierName}
                  onChange={(e) => onRowChange(rowIndex, "supplierName", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.factoryName}
                  onChange={(e) => onRowChange(rowIndex, "factoryName", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.brand}
                  onChange={(e) => onRowChange(rowIndex, "brand", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.season}
                  onChange={(e) => onRowChange(rowIndex, "season", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.poNumber}
                  onChange={(e) => onRowChange(rowIndex, "poNumber", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.styleNumber}
                  onChange={(e) => onRowChange(rowIndex, "styleNumber", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.color}
                  onChange={(e) => onRowChange(rowIndex, "color", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.prepack}
                  onChange={(e) => onRowChange(rowIndex, "prepack", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.labelCode}
                  onChange={(e) => onRowChange(rowIndex, "labelCode", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={row.boys}
                  onChange={(e) => onRowChange(rowIndex, "boys", e.target.checked)}
                  className="small-checkbox"
                />
              </td>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={row.girls}
                  onChange={(e) => onRowChange(rowIndex, "girls", e.target.checked)}
                  className="small-checkbox"
                />
              </td>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={row.mens}
                  onChange={(e) => onRowChange(rowIndex, "mens", e.target.checked)}
                  className="small-checkbox"
                />
              </td>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={row.womens}
                  onChange={(e) => onRowChange(rowIndex, "womens", e.target.checked)}
                  className="small-checkbox"
                />
              </td>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={row.knitted}
                  onChange={(e) => onRowChange(rowIndex, "knitted", e.target.checked)}
                  className="small-checkbox"
                />
              </td>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={row.woven}
                  onChange={(e) => onRowChange(rowIndex, "woven", e.target.checked)}
                  className="small-checkbox"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.orderQty}
                  onChange={(e) => onRowChange(rowIndex, "orderQty", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={row.actualInspectionRequestDate}
                  onChange={(e) => onRowChange(rowIndex, "actualInspectionRequestDate", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="time"
                  value={row.inspectionTime}
                  onChange={(e) => onRowChange(rowIndex, "inspectionTime", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.modeOfShipment}
                  onChange={(e) => onRowChange(rowIndex, "modeOfShipment", e.target.value)}
                  className="w-full p-1 border border-gray-300"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
