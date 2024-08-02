"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b-", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

type PropsTypes = {
  title?: string;
  path?: string;
  Icon?: React.ReactNode;
  location: any;
  isCollapsed?: boolean;
  handleClick?: () => void;
  includeChildren?: boolean;
};
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & PropsTypes
>(({ className, children, ...props }, ref) => (
  <Button
    onClick={props.handleClick}
    className={`w-[100%] flex justify-start  mx-auto ${
      props.path === props.location.pathname && "bg-primary hover:bg-primary"
    }`}
    variant={"ghost"}
  >
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between  transition-all  [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center">
              <div
                className={`${
                  props.path === location.pathname && "text-primary-foreground "
                }`}
              >
                {props.Icon}
              </div>
              <p
                className={`${
                  props.path === props.location.pathname &&
                  "text-primary-foreground"
                }`}
              >
                {props.isCollapsed ? "" : props.title}
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-primary">{props.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {!props.isCollapsed && props.includeChildren && (
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-gray-500" />
      )}
    </AccordionPrimitive.Trigger>
  </Button>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn(`first-letter:pb-4 pt-0 `, className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
