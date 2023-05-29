import { useState } from 'react';
import { INavbarItem } from '../../common/interfaces';
import NavLink from './NavLink';

interface INavbarProps {
    activeItem: string,
    items: INavbarItem[],
    onItemSelect: (arg: string) => void
}

const NavBar = ({ activeItem, items, onItemSelect }: INavbarProps) => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const onToggle = (): void =>
        setIsToggled(prevState => !prevState)

    const getNavbarClass = (isToggled: boolean): string =>
        isToggled ? 'navbar navbar-mobile' : 'navbar'

    const getToggleClass = (isToggled: boolean): string =>
        isToggled ? 'bi bi-x mobile-nav-toggle' : 'bi bi-list mobile-nav-toggle'

    return (
        <nav id="navbar" className={getNavbarClass(isToggled)}>
            <ul>
                {items.map((item) =>
                    <NavLink
                        key={item.label}
                        activeItem={activeItem}
                        item={item}
                        onItemSelect={onItemSelect} />)}
            </ul>
            <i className={getToggleClass(isToggled)} onClick={onToggle}></i>
        </nav>
    )
}

export default NavBar;