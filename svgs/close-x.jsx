import * as React from "react";

function SvgCloseX(props) {
    return <svg width="11px" height="11px" viewBox="0 0 11 11" {...props}>
        <path fill="var(--color,#000)"
              d="M10.911 1.321L9.68.09 5.5 4.27 1.32.088.09 1.32l4.18 4.18L.09 9.68l1.232 1.231 4.18-4.18 4.178 4.18 1.231-1.232L6.732 5.5z"/>
    </svg>;
}

export default SvgCloseX;