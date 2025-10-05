import * as React from "react";
import { cn } from "../lib/utils";

const AccordionContext = React.createContext({});

const Accordion = React.forwardRef(
  (
    {
      className,
      type,
      collapsible,
      defaultValue,
      value,
      onValueChange,
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue || (type === "single" ? "" : [])
    );
    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = (itemValue) => {
      if (type === "single") {
        const newValue =
          currentValue === itemValue && collapsible ? "" : itemValue;
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
      } else {
        const newValue = currentValue.includes(itemValue)
          ? currentValue.filter((v) => v !== itemValue)
          : [...currentValue, itemValue];
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
      }
    };

    const isOpen = (itemValue) => {
      if (type === "single") {
        return currentValue === itemValue;
      }
      return currentValue.includes(itemValue);
    };

    return (
      <AccordionContext.Provider value={{ type, isOpen, handleValueChange }}>
        <div ref={ref} className={cn("", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    return (
      <AccordionContext.Consumer>
        {(context) => (
          <div
            ref={ref}
            data-state={context.isOpen(value) ? "open" : "closed"}
            className={cn("border-b", className)}
            {...props}
          >
            <AccordionContext.Provider value={{ ...context, itemValue: value }}>
              {children}
            </AccordionContext.Provider>
          </div>
        )}
      </AccordionContext.Consumer>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const isOpen = context.isOpen(context.itemValue);

    return (
      <h3 className="flex">
        <button
          ref={ref}
          type="button"
          className={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            className
          )}
          data-state={isOpen ? "open" : "closed"}
          onClick={() => context.handleValueChange(context.itemValue)}
          {...props}
        >
          {children}
          <svg
            className="h-4 w-4 shrink-0 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </h3>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const isOpen = context.isOpen(context.itemValue);

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm transition-all",
          isOpen ? "animate-accordion-down" : "animate-accordion-up"
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
