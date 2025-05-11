
import { useState } from "react";
import { InspectionFormHeader } from "./InspectionFormHeader";
import { InspectionFormTable } from "./InspectionFormTable";
import { InspectionFormFooter } from "./InspectionFormFooter";

export interface InspectionRow {
  id: string;
  supplierName: string;
  factoryName: string;
  brand: string;
  season: string;
  poNumber: string;
  styleNumber: string;
  color: string;
  prepack: string;
  labelCode: string;
  boys: boolean;
  girls: boolean;
  mens: boolean;
  womens: boolean;
  knitted: boolean;
  woven: boolean;
  orderQty: string;
  actualInspectionRequestDate: string;
  inspectionTime: string;
  modeOfShipment: string;
}

export interface InspectionFormData {
  inspectionTypes: {
    fabricInspection: boolean;
    firstBatchInspection: boolean;
    garmentInLine: boolean;
    garmentFinalInspection: boolean;
    containerLoading: boolean;
  };
  date: string;
  rows: InspectionRow[];
  preparedBy: string;
}

export const InspectionForm = () => {
  const [formData, setFormData] = useState<InspectionFormData>({
    inspectionTypes: {
      fabricInspection: false,
      firstBatchInspection: false,
      garmentInLine: false,
      garmentFinalInspection: false,
      containerLoading: false,
    },
    date: new Date().toISOString().split('T')[0],
    rows: [createEmptyRow()],
    preparedBy: "",
  });

  function createEmptyRow(): InspectionRow {
    return {
      id: crypto.randomUUID(),
      supplierName: "",
      factoryName: "",
      brand: "",
      season: "",
      poNumber: "",
      styleNumber: "",
      color: "",
      prepack: "",
      labelCode: "",
      boys: false,
      girls: false,
      mens: false,
      womens: false,
      knitted: false,
      woven: false,
      orderQty: "",
      actualInspectionRequestDate: "",
      inspectionTime: "",
      modeOfShipment: "",
    };
  }

  const handleInspectionTypeChange = (type: keyof InspectionFormData["inspectionTypes"]) => {
    setFormData({
      ...formData,
      inspectionTypes: {
        ...formData.inspectionTypes,
        [type]: !formData.inspectionTypes[type],
      },
    });
  };

  const handleDateChange = (date: string) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handlePreparedByChange = (preparedBy: string) => {
    setFormData({
      ...formData,
      preparedBy,
    });
  };

  const handleRowChange = (rowIndex: number, field: keyof InspectionRow, value: string | boolean) => {
    const updatedRows = [...formData.rows];
    updatedRows[rowIndex] = {
      ...updatedRows[rowIndex],
      [field]: value,
    };
    setFormData({
      ...formData,
      rows: updatedRows,
    });
  };

  const addRow = () => {
    setFormData({
      ...formData,
      rows: [...formData.rows, createEmptyRow()],
    });
  };

  const removeRow = (rowIndex: number) => {
    if (formData.rows.length <= 1) return;
    
    const updatedRows = formData.rows.filter((_, index) => index !== rowIndex);
    setFormData({
      ...formData,
      rows: updatedRows,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server or perform other actions
  };

  return (
    <form className="inspection-form" onSubmit={handleSubmit}>
      <InspectionFormHeader 
        inspectionTypes={formData.inspectionTypes}
        date={formData.date}
        onInspectionTypeChange={handleInspectionTypeChange}
        onDateChange={handleDateChange}
      />
      
      <InspectionFormTable 
        rows={formData.rows} 
        onRowChange={handleRowChange}
        onAddRow={addRow}
        onRemoveRow={removeRow}
      />
      
      <InspectionFormFooter 
        preparedBy={formData.preparedBy}
        onPreparedByChange={handlePreparedByChange}
      />
      
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Form
        </button>
      </div>
    </form>
  );
};
