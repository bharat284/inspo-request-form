import { Button } from "@/components/ui/button";
import { InspectionRow } from "./InspectionForm";
import { Plus, Trash2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface InspectionFormTableProps {
  rows: InspectionRow[];
  onRowChange: (rowIndex: number, field: keyof InspectionRow, value: string | boolean) => void;
  onAddRow: () => void;
  onRemoveRow: (rowIndex: number) => void;
}

export const InspectionFormTable = ({ rows, onRowChange, onAddRow, onRemoveRow }: InspectionFormTableProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full space-y-6 mb-6">
        {rows.map((row, rowIndex) => (
          <div key={row.id} className="bg-white/10 backdrop-blur-sm border border-cia-accent/30 rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Item {rowIndex + 1}</h3>
              {rows.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveRow(rowIndex)}
                  className="text-white hover:bg-red-500/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Supplier Name</label>
                <input
                  type="text"
                  value={row.supplierName}
                  onChange={(e) => onRowChange(rowIndex, "supplierName", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Factory Name</label>
                <input
                  type="text"
                  value={row.factoryName}
                  onChange={(e) => onRowChange(rowIndex, "factoryName", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Brand</label>
                <input
                  type="text"
                  value={row.brand}
                  onChange={(e) => onRowChange(rowIndex, "brand", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Season</label>
                <input
                  type="text"
                  value={row.season}
                  onChange={(e) => onRowChange(rowIndex, "season", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">PO Number</label>
                <input
                  type="text"
                  value={row.poNumber}
                  onChange={(e) => onRowChange(rowIndex, "poNumber", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Style Number</label>
                <input
                  type="text"
                  value={row.styleNumber}
                  onChange={(e) => onRowChange(rowIndex, "styleNumber", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Color</label>
                <input
                  type="text"
                  value={row.color}
                  onChange={(e) => onRowChange(rowIndex, "color", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Prepack</label>
                <input
                  type="text"
                  value={row.prepack}
                  onChange={(e) => onRowChange(rowIndex, "prepack", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Label Code</label>
                <input
                  type="text"
                  value={row.labelCode}
                  onChange={(e) => onRowChange(rowIndex, "labelCode", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Categories</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      checked={row.boys}
                      onChange={(e) => onRowChange(rowIndex, "boys", e.target.checked)}
                      className="mr-2 h-4 w-4 border border-cia-accent/40 rounded accent-cia-accent"
                    />
                    Boys
                  </label>
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      checked={row.girls}
                      onChange={(e) => onRowChange(rowIndex, "girls", e.target.checked)}
                      className="mr-2 h-4 w-4 border border-cia-accent/40 rounded accent-cia-accent"
                    />
                    Girls
                  </label>
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      checked={row.mens}
                      onChange={(e) => onRowChange(rowIndex, "mens", e.target.checked)}
                      className="mr-2 h-4 w-4 border border-cia-accent/40 rounded accent-cia-accent"
                    />
                    Mens
                  </label>
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      checked={row.womens}
                      onChange={(e) => onRowChange(rowIndex, "womens", e.target.checked)}
                      className="mr-2 h-4 w-4 border border-cia-accent/40 rounded accent-cia-accent"
                    />
                    Womens
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Fabric Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      checked={row.knitted}
                      onChange={(e) => onRowChange(rowIndex, "knitted", e.target.checked)}
                      className="mr-2 h-4 w-4 border border-cia-accent/40 rounded accent-cia-accent"
                    />
                    Knitted
                  </label>
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      checked={row.woven}
                      onChange={(e) => onRowChange(rowIndex, "woven", e.target.checked)}
                      className="mr-2 h-4 w-4 border border-cia-accent/40 rounded accent-cia-accent"
                    />
                    Woven
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Order Qty</label>
                <input
                  type="text"
                  value={row.orderQty}
                  onChange={(e) => onRowChange(rowIndex, "orderQty", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Inspection Request Date</label>
                <input
                  type="date"
                  value={row.actualInspectionRequestDate}
                  onChange={(e) => onRowChange(rowIndex, "actualInspectionRequestDate", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Inspection Time</label>
                <input
                  type="time"
                  value={row.inspectionTime}
                  onChange={(e) => onRowChange(rowIndex, "inspectionTime", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Mode of Shipment</label>
                <select
                  value={row.modeOfShipment}
                  onChange={(e) => onRowChange(rowIndex, "modeOfShipment", e.target.value)}
                  className="w-full p-2 bg-white/10 backdrop-blur-sm text-white border border-cia-accent/30 rounded"
                >
                  <option value="">Select...</option>
                  <option value="Air">Air</option>
                  <option value="Sea">Sea</option>
                  <option value="Road">Road</option>
                  <option value="Rail">Rail</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <Button
            type="button"
            onClick={onAddRow}
            className="bg-white text-cia-brightpurple hover:bg-gray-100 transition-all duration-300"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Row
          </Button>
        </div>
      </div>
    );
  }

  // Desktop table view - keep existing code
  return (
    <div className="w-full overflow-x-auto mb-6">
      <table className="form-table min-w-full">
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Factory Name</th>
            <th>Brand</th>
            <th>Season</th>
            <th>PO Number</th>
            <th>Style Number</th>
            <th>Color</th>
            <th>Prepack</th>
            <th>Label Code</th>
            <th>Boys</th>
            <th>Girls</th>
            <th>Mens</th>
            <th>Womens</th>
            <th>Knitted</th>
            <th>Woven</th>
            <th>Order Qty</th>
            <th>Inspection Request Date</th>
            <th>Inspection Time</th>
            <th>Mode of Shipment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  value={row.supplierName}
                  onChange={(e) => onRowChange(rowIndex, "supplierName", e.target.value)}
                  className="w-full min-w-32 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.factoryName}
                  onChange={(e) => onRowChange(rowIndex, "factoryName", e.target.value)}
                  className="w-full min-w-32 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.brand}
                  onChange={(e) => onRowChange(rowIndex, "brand", e.target.value)}
                  className="w-full min-w-24 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.season}
                  onChange={(e) => onRowChange(rowIndex, "season", e.target.value)}
                  className="w-full min-w-24 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.poNumber}
                  onChange={(e) => onRowChange(rowIndex, "poNumber", e.target.value)}
                  className="w-full min-w-28 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.styleNumber}
                  onChange={(e) => onRowChange(rowIndex, "styleNumber", e.target.value)}
                  className="w-full min-w-28 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.color}
                  onChange={(e) => onRowChange(rowIndex, "color", e.target.value)}
                  className="w-full min-w-20 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.prepack}
                  onChange={(e) => onRowChange(rowIndex, "prepack", e.target.value)}
                  className="w-full min-w-20 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.labelCode}
                  onChange={(e) => onRowChange(rowIndex, "labelCode", e.target.value)}
                  className="w-full min-w-24 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
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
                  className="w-full min-w-20 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={row.actualInspectionRequestDate}
                  onChange={(e) => onRowChange(rowIndex, "actualInspectionRequestDate", e.target.value)}
                  className="w-full min-w-32 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <input
                  type="time"
                  value={row.inspectionTime}
                  onChange={(e) => onRowChange(rowIndex, "inspectionTime", e.target.value)}
                  className="w-full min-w-20 p-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-cia-accent/30 rounded text-xs"
                />
              </td>
              <td>
                <select
                  value={row.modeOfShipment}
                  onChange={(e) => onRowChange(rowIndex, "modeOfShipment", e.target.value)}
                  className="w-full min-w-20 p-1 bg-white/10 backdrop-blur-sm text-white border border-cia-accent/30 rounded text-xs"
                >
                  <option value="">Select...</option>
                  <option value="Air">Air</option>
                  <option value="Sea">Sea</option>
                  <option value="Road">Road</option>
                  <option value="Rail">Rail</option>
                </select>
              </td>
              <td className="text-center">
                {rows.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveRow(rowIndex)}
                    className="text-white hover:bg-red-500/20 p-1"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4 flex justify-center">
        <Button
          type="button"
          onClick={onAddRow}
          className="bg-white text-cia-brightpurple hover:bg-gray-100 transition-all duration-300"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Row
        </Button>
      </div>
    </div>
  );
};
