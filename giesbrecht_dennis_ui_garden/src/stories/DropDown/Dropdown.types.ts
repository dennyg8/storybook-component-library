import 'react'

export interface DropdownProps {
    /**
     * Whether the dropdown is open
     */
    isOpen: boolean;
    /**
     * Disabled state
     */
    disabled: boolean;
    /**
     * The background color of the dropdown
     */
    backgroundColor?: string;
    /**
     * List of items to display in the dropdown
     */
    items: string[];
    /**
     * The currently hovered item in the dropdown
     */
    hoveredItem: string | null;
}