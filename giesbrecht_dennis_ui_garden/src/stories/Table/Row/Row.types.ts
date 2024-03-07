import 'react'

export interface RowProps {
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