"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function ComboboxSearch({
  data,
  searchPlaceholder,
  onClick,
}: {
  data: Array<{ label: string; value: string; active: boolean }>;
  searchPlaceholder?: string;
  onClick: (index: number) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="rounded-xl shadow-sm focus:ring-2 focus:ring-gray-300 justify-between"
        >
          {value
            ? data.find((d) => d.value === value)?.label
            : searchPlaceholder || "Поиск..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Поиск..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {data.map((d, index) => (
                <CommandItem
                  key={d.value}
                  value={d.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    onClick(index);
                  }}
                >
                  {d.label}
                  {d.active && (
                    <>
                      <Check className={cn("ml-auto")} />
                    </>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { ComboboxSearch };
