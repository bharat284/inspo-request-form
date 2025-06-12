
import { InspectionTypeCheckbox } from "./InspectionTypeCheckbox";

interface InspectionFormHeaderProps {
  inspectionTypes: {
    fabricInspection: boolean;
    firstBatchInspection: boolean;
    garmentInLine: boolean;
    garmentFinalInspection: boolean;
    containerLoading: boolean;
  };
  date: string;
  onInspectionTypeChange: (type: keyof InspectionFormHeaderProps["inspectionTypes"]) => void;
  onDateChange: (date: string) => void;
}

export const InspectionFormHeader = ({
  inspectionTypes,
  date,
  onInspectionTypeChange,
  onDateChange,
}: InspectionFormHeaderProps) => {
  return (
    <div className="mb-4">
      <h1 className="text-xl md:text-2xl font-bold text-center border-b-2 border-cia-accent pb-2 mb-4 text-white">
        INSPECTION REQUEST FORM
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-cia-accent/20 border border-cia-accent p-1 flex items-center rounded-md">
            <InspectionTypeCheckbox
              id="fabricInspection"
              label="FABRIC INSPECTION"
              checked={inspectionTypes.fabricInspection}
              onChange={() => onInspectionTypeChange("fabricInspection")}
            />
          </div>
          
          <div className="bg-cia-accent/20 border border-cia-accent p-1 flex items-center rounded-md">
            <InspectionTypeCheckbox
              id="firstBatchInspection"
              label="FIRST BATCH INSPECTION"
              checked={inspectionTypes.firstBatchInspection}
              onChange={() => onInspectionTypeChange("firstBatchInspection")}
            />
          </div>
          
          <div className="bg-cia-accent/20 border border-cia-accent p-1 flex items-center rounded-md">
            <InspectionTypeCheckbox
              id="garmentInLine"
              label="GARMENT IN-LINE"
              checked={inspectionTypes.garmentInLine}
              onChange={() => onInspectionTypeChange("garmentInLine")}
            />
          </div>
          
          <div className="bg-cia-accent/20 border border-cia-accent p-1 flex items-center rounded-md">
            <InspectionTypeCheckbox
              id="garmentFinalInspection"
              label="GARMENT FINAL INSPECTION"
              checked={inspectionTypes.garmentFinalInspection}
              onChange={() => onInspectionTypeChange("garmentFinalInspection")}
            />
          </div>
          
          <div className="bg-cia-accent/20 border border-cia-accent p-1 flex items-center rounded-md">
            <InspectionTypeCheckbox
              id="containerLoading"
              label="CONTAINER LOADING"
              checked={inspectionTypes.containerLoading}
              onChange={() => onInspectionTypeChange("containerLoading")}
            />
          </div>
        </div>
        
        <div className="bg-cia-accent/20 border border-cia-accent p-1 flex items-center justify-between rounded-md">
          <label htmlFor="date" className="font-semibold text-white">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="border border-cia-accent rounded p-1 bg-white/10 text-white"
          />
        </div>
      </div>
    </div>
  );
};
