import 'react'

export interface RadioProps {
    /**
     * Selected option
     */
    selectedOption?: 'Light' | 'Dark';
    /**
     * Text color
     */
    color?: string;
    /**
     * Disabled state
     */
    disabled?: boolean;
}