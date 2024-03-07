import 'react'

export interface FooterProps {
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