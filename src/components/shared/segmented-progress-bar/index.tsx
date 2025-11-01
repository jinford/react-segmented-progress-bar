import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import type * as React from "react";

import { cn } from "@/lib/utils";

export interface Segment {
  label: string;
  value: number;
  color?: string;
}

interface SegmentedProgressBarProps
  extends Omit<
    React.ComponentProps<typeof ProgressPrimitive.Root>,
    "value" | "max"
  > {
  segments: Segment[];
  showTooltip?: boolean;
  unit?: string;
}

export function SegmentedProgressBar({
  className,
  segments,
  showTooltip = true,
  unit,
  ...props
}: SegmentedProgressBarProps) {
  // 合計値を計算（これがmaxとなる）
  const totalValue = segments.reduce((sum, segment) => sum + segment.value, 0);

  // 各セグメントのパーセンテージを計算（実値 / 合計値 * 100）
  const segmentsWithPercentage = segments.map((segment) => ({
    ...segment,
    percentage: totalValue > 0 ? (segment.value / totalValue) * 100 : 0,
  }));

  const progressBar = (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <div className="flex h-full w-full">
        {segmentsWithPercentage.map((segment, index) => (
          <div
            key={`${segment.label}-${index}`}
            data-slot="progress-segment"
            className={cn(
              "h-full transition-all",
              segment.color || "bg-primary",
            )}
            style={{ width: `${segment.percentage}%` }}
          />
        ))}
      </div>
    </ProgressPrimitive.Root>
  );

  if (!showTooltip) {
    return progressBar;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{progressBar}</TooltipTrigger>
      <TooltipContent>
        <div className="space-y-2">
          <div className="border-b pb-1">
            <p className="font-semibold text-sm">内訳</p>
            <p className="text-xs">
              合計: {totalValue}
              {unit && ` ${unit}`}
            </p>
          </div>
          <div className="space-y-1">
            {segmentsWithPercentage.map((segment, index) => (
              <div key={`${segment.label}-${index}`} className="text-xs">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-block h-2 w-2 rounded-full",
                        segment.color || "bg-primary",
                      )}
                    />
                    {segment.label}
                  </span>
                  <span className="font-mono">
                    {segment.value}
                    {unit && `${unit}`} ({segment.percentage.toFixed(1)}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
