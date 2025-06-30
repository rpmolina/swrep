import { X, Search } from "lucide-react";

type SearchFilterProps = {
  search: string;
  setSearch: (search: string) => void;
};

export function SearchFilter({ search, setSearch }: SearchFilterProps) {
  return (
    <div className="mb-6">
      <label className="text-sm font-medium text-slate-300 mb-2 block">
        Search
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#637278] focus:ring-1 focus:ring-[#637278] focus:outline-none transition-colors duration-200"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
