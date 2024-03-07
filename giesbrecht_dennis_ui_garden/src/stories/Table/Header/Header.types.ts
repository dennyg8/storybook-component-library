import 'react'

export interface HeaderProps {
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