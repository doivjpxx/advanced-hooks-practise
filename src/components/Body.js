import React from "react"

const Body = ({ children, className = '', expanded, ...otherProps }) => {
    const combinedClassName = ['Expandable-panel', className].join('');

    return expanded ? <div className={combinedClassName} {...otherProps}>
        {children}
    </div> : null;
}

export default Body;
