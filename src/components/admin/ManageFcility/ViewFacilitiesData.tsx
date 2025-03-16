import { EyeFilled } from "@ant-design/icons";
import { FacilitiesDataType } from "../../../pages/admin/ManageFacility";
import { Modal } from "antd";
import { useState } from "react";
import { IoLocation } from "react-icons/io5";

const ViewFacilitiesData = ({ data }: { data: FacilitiesDataType }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        <EyeFilled />
      </button>
      <Modal title={"Facility Details"} footer={false} open={isOpen}>
        <img src={data.image} alt="" />
        <div className="flex mt-4 justify-between items-center">
          <h1 className="text-lg font-bold">{data.name}</h1>
          <span>{data.pricePerHour} / hour</span>
        </div>
        <span className="text-sm text-gray-600 flex items-center gap-1">
          <IoLocation /> {data.location}
        </span>
        <p className="text-black">{data.description}</p>
      </Modal>
    </div>
  );
};

export default ViewFacilitiesData;
