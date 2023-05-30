import { INavbarItem } from "../../common/interfaces";

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

    const getLinkClass = (label: string): string => {
        const className = 'nav-link';
        return label === activeItem
            ? `${className} active`
            : className;
    }

    return (
        <li onClick={ () => onClick(item.label) }>
            <a className={ getLinkClass(item.label) }
                style={ item.disabled ? disabledLinkStyles : {} }
                href={ item.link }>{ item.label }</a>
        </li>
    )
}

export default NavLink;