import  React, { useContext } from "react"
import { ExpandableContext } from "./Expandable"

const Icon = ({ className = '', expanded, ...otherProps }) => {
    const combinedClassName = ['Expandable-icon', className].join('');

    return <span className={combinedClassName} {...otherProps}>{expanded ? '-' : '+'}</span>;
}

export default Icon;
