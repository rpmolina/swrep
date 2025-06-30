import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

type SelectFilterProps = {
  value: string | undefined;
  onSelectChange: (value: string) => void;
  options: string[];
};

const SelectFilter = ({
  value,
  onSelectChange,
  options,
}: SelectFilterProps) => {
  return (
    <Select value={value} onValueChange={onSelectChange}>
      <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278] h-12 w-full px-4 mt-2">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent className="bg-slate-800 border-slate-600">
        {options.map((item: string) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectFilter;
