import * as React from "react";

function SvgHamburgerAnimated(props) {
    return <svg width="12px" height="12px" viewBox="0 0 12 12" {...props}>
        <style>{".hamburger-icon__top, .hamburger-icon__middle, .hamburger-icon__bottom { fill: var(--color, #000); transform-origin: 50%; transition: all 0.3s; } .open .hamburger-icon__top { transform: translateY(3px) translateX(-25%) rotate(45deg); } .open .hamburger-icon__bottom { transform: translateY(-4px) translateX(-25%) rotate(-45deg); } .open .hamburger-icon__middle { transform: translatex(-100%); opacity: 0; }"}</style>
        <g>
            <rect y={0} className="hamburger-icon__top" width={12} height={2} rx={1}/>
            <rect y={5} className="hamburger-icon__middle" width={12} height={2} rx={1}/>
            <rect y={10} className="hamburger-icon__bottom" width={12} height={2} rx={1}/>
        </g>
    </svg>;
}

export default SvgHamburgerAnimated;

