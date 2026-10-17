'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionContextType {
  value: string[];
  toggleItem: (itemValue: string) => void;
  multiple: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
}

interface AccordionItemContextType {
  itemValue: string;
  isOpen: boolean;
}

const AccordionItemContext = React.createContext<AccordionItemContextType | null>(null);

function useAccordionItem() {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionItem components must be used within an AccordionItem');
  }
  return context;
}

export interface AccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function Accordion({
  children,
  multiple = false,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className = '',
  style
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const value = controlledValue !== undefined
    ? (Array.isArray(controlledValue) ? controlledValue : [controlledValue])
    : internalValue;

  const toggleItem = React.useCallback(
    (itemValue: string) => {
      let nextValue: string[];
      if (multiple) {
        nextValue = value.includes(itemValue)
          ? value.filter((v) => v !== itemValue)
          : [...value, itemValue];
      } else {
        nextValue = value.includes(itemValue) ? [] : [itemValue];
      }

      if (controlledValue === undefined) {
        setInternalValue(nextValue);
      }
      onValueChange?.(multiple ? nextValue : (nextValue[0] || ''));
    },
    [multiple, value, controlledValue, onValueChange]
  );

  return (
    <AccordionContext.Provider value={{ value, toggleItem, multiple }}>
      <div className={`w-full ${className}`} style={style} data-slot="accordion">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AccordionItem({
  children,
  value,
  className = '',
  style
}: AccordionItemProps) {
  const { value: selectedValues } = useAccordion();
  const isOpen = selectedValues.includes(value);

  return (
    <AccordionItemContext.Provider value={{ itemValue: value, isOpen }}>
      <div
        data-slot="accordion-item"
        data-state={isOpen ? 'open' : 'closed'}
        className={className}
        style={style}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
}

export function AccordionTrigger({
  children,
  className = '',
  style,
  showArrow = true
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordion();
  const { itemValue, isOpen } = useAccordionItem();

  return (
    <button
      type="button"
      data-slot="accordion-trigger"
      data-panel-open={isOpen ? 'true' : undefined}
      aria-expanded={isOpen}
      onClick={() => toggleItem(itemValue)}
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        cursor: 'pointer',
        textAlign: 'left',
        background: 'none',
        border: 'none',
        outline: 'none',
        ...style
      }}
    >
      <span className="flex-1">{children}</span>
      {showArrow && (
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
        >
          <ChevronDown className="w-5 h-5 transition-colors" />
        </motion.span>
      )}
    </button>
  );
}

export interface AccordionPanelProps {
  children: React.ReactNode;
  keepRendered?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AccordionPanel({
  children,
  keepRendered = false,
  className = '',
  style
}: AccordionPanelProps) {
  const { isOpen } = useAccordionItem();

  return (
    <AnimatePresence initial={false}>
      {(isOpen || keepRendered) && (
        <motion.div
          key="accordion-panel"
          data-slot="accordion-panel"
          initial={keepRendered && !isOpen ? false : { height: 0, opacity: 0 }}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            overflow: 'hidden',
            ...style
          }}
          className={className}
        >
          <div style={{ paddingTop: '0.25rem', paddingBottom: '1rem' }}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
