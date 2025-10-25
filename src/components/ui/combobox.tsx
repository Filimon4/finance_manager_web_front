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
import { useMemo } from "react";

function ComboboxSearch({
  data,
  searchPlaceholder,
  onClick,
  buttonClassName,
  popperClassName,
}: {
  data: Array<{ label: string; value: string; active: boolean }>;
  searchPlaceholder?: string;
  onClick: (index: number) => void;
  buttonClassName?: string;
  popperClassName?: string;
}) {
  const [open, setOpen] = React.useState(false);

  const activeValue = useMemo(() => {
    return data.find((d) => d.active === true);
  }, [data]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "rounded-xl shadow-sm focus:ring-2 focus:ring-gray-300 justify-between",
            buttonClassName
          )}
        >
          {activeValue ? (
            activeValue?.label
          ) : (
            <p className="text-[#737373] font-normal">{searchPlaceholder}</p>
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-[200px] p-0", popperClassName)}>
        <Command>
          <CommandInput placeholder="Поиск..." className="h-9" />
          <CommandList>
            <CommandEmpty>Пусто</CommandEmpty>
            <CommandGroup>
              {data.map((d, index) => (
                <CommandItem
                  key={d.value}
                  value={d.value}
                  onSelect={() => {
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
