
interface InspectionFormFooterProps {
  preparedBy: string;
  onPreparedByChange: (preparedBy: string) => void;
}

export const InspectionFormFooter = ({
  preparedBy,
  onPreparedByChange,
}: InspectionFormFooterProps) => {
  return (
    <div>
      <div className="mb-4">
        <div className="highlight-bg p-2 font-semibold text-sm">
          Note:
        </div>
        <div className="p-2 text-sm">
          <ol className="list-decimal pl-8">
            <li className="mb-1">The above columns need to be filled in with correct information prior sending to us.</li>
            <li className="mb-1">The inspection request is advised to be done <strong>4 working days</strong> prior to actual Fabric / In-line / Final inspection request.</li>
          </ol>
        </div>
      </div>
      
      <div className="flex justify-end items-center">
        <div className="highlight-bg p-2 font-semibold text-sm">
          Prepared by:
        </div>
        <input
          type="text"
          value={preparedBy}
          onChange={(e) => onPreparedByChange(e.target.value)}
          className="border-b-2 border-gray-400 ml-2 p-1 w-48"
        />
      </div>
    </div>
  );
};
