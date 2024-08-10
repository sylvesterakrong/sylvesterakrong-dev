import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

const links = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'My Projects' },
    { path: '/contact', name: 'Contact me' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
    return (
        <nav className={containerStyles}> 
            {links.map((link, index) => (
                <Link 
                    href={link.path} 
                    key={index} 
                    className={`capitalize ${linkStyles}`}
                >
                    {link.path === path && (
                        <motion.span 
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            transition={{ type: 'tween' }}
                            layoutId='underline'
                            className={underlineStyles}
                        />
                    )}
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
