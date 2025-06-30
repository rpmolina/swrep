import { Badge } from "@workspace/ui/components/badge";
import { X } from "lucide-react";

type FilterBadgeProps<T> = {
  label: string;
  value: string;
  onRemoveFilter: () => void;
};

const FilterBadge = <T extends Record<string, string>>({
  label,
  value,
  onRemoveFilter,
}: FilterBadgeProps<T>) => {
  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-1 bg-purple-200 border-purple-500/30 text-purple-900 hover:bg-purple-300 hover:text-purple-900 hover:border-purple-500"
    >
      {label}: {value}
      <X
        className="h-3 w-3 cursor-pointer hover:text-white"
        onClick={onRemoveFilter}
      />
    </Badge>
  );
};

export default FilterBadge;
