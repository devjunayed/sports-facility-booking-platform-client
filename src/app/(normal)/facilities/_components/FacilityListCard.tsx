import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Clock, MapIcon, Users } from "lucide-react";
import { BiStar } from "react-icons/bi";

import { FacilitiesDataType } from "@/types/facility.type";

interface FacilityListCardProps {
  facility: FacilitiesDataType;
}

const FacilityListCard = ({ facility }: FacilityListCardProps) => {
  return (
    <Card
      shadow="sm"
      className="border border-gray-300 dark:border-[#3F3F46] hover:shadow-md transition-all duration-200 dark:bg-[#18181B]"
    >
      <Link href={`/facilities/${facility._id}`}>
        <CardBody className="flex flex-col sm:flex-row gap-5 p-4">
          {/* Image */}
          <div className="relative w-full sm:w-64 h-44 shrink-0 overflow-hidden rounded-lg">
            <img
              src={
                facility.images?.[0] || "/assets/images/placeholder.jpg"
              }
              alt={facility.name}
              className="w-full h-full object-cover"
            />

            {/* Category */}
            <Chip
              size="sm"
              className="absolute top-3 right-3 bg-white dark:bg-[#3F3F46] shadow-sm"
            >
              {facility.category}
            </Chip>

            {/* Rating */}
            <Chip
              size="sm"
              className="absolute top-3 left-3 bg-white dark:bg-[#3F3F46] shadow-sm"
            >
              <div className="flex items-center gap-1 text-yellow-500">
                <BiStar className="text-sm" />

                <span className="text-sm font-medium">
                  {facility?.rating?.toFixed(1) ?? "N/A"}
                </span>
              </div>
            </Chip>
          </div>

          {/* Information */}
          <div className="flex-1 flex flex-col justify-center space-y-3">
            {/* Title */}
            <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
              {facility.name}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapIcon className="h-4 w-4 shrink-0" />
              <span>{facility.location}</span>
            </div>

            {/* Capacity */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Users className="h-4 w-4 shrink-0" />
              <span>{facility.capacity} people</span>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="h-4 w-4 shrink-0" />
              <span>{facility.openHours}</span>
            </div>

            {/* Price */}
            <div className="pt-1">
              <span className="text-lg font-semibold text-[#1B1F3B] dark:text-white">
                {facility.pricePerHour} ৳
              </span>

              <span className="text-sm text-gray-500 ml-1">
                / hour
              </span>
            </div>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
};

export default FacilityListCard;