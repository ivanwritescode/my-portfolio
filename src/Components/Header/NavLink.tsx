import { INavbarItem } from "../../common/interfaces";
import { MouseEvent } from 'react';

interface INavLinkProps {
    activeItem: string,
    item: INavbarItem,
    onClick: (arg: string) => void
}

const NavLink = ({ activeItem, item, onClick }: INavLinkProps) => {
    const disabledLinkStyles: React.CSSProperties = {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: 0.5,
        textDecoration: 'line-through'
    }

    const handleClick = (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onClick(item.label)
    }

    const getLinkClass = (label: string): string => {
        const className = 'nav-link';
        return label === activeItem
            ? `${className} active`
            : className;
    }

    return (
        <li onClick={ handleClick }>
            <a className={ getLinkClass(item.label) }
                style={ item.disabled ? disabledLinkStyles : {} }
                href={ item.link }>{ item.label }</a>
        </li>
    )
}

export default NavLink;