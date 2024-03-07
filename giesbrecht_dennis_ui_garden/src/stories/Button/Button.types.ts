import 'react'

export interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Button text
     */
    label: string;
    /**
     * Disabled state
     */
    disabled?: boolean;
  }