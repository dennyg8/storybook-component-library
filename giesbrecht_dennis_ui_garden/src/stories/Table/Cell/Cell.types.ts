import 'react'

export interface CellProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Disabled state
     */
    disabled?: boolean;
    /** 
     * Text 
     */
    content: string[];
  }