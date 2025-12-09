
import React from 'react';

/**
 * Button component renders a button that can be re-styled
 * @param {props} children denoting that component may contain children
 * @param {props} onClick to allow for customizable click handlers
 * @param {props} className to allow for multiple styles
 * @param {props} testId, used to identify a button for testing purposes
 * @returns Button component
 */
const Button = ({
    children, onClick, className, testId
}) => (
    <div>
        <button
            data-testid={testId}
            className={className}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    </div>
);

export default Button;