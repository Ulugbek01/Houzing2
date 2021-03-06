import Home from '../components/Home';
import Properties from '../components/Properties';
import Contacts from '../components/Contacts';

export const navbar = [
    {
        id: 1,
        title: "Home",
        path: "/home",
        Element: <Home/>,
        hidden: true,
        private: false,
    },
    {
        id: 2,
        title: "Properties",
        path: "/properties",
        Element: <Properties/>,
        hidden: true,
        private: false,
    },
    {
        id: 3,
        title: "Contacts",
        path: "/contacts",
        Element: <Contacts/>,
        hidden: true,
        private: false,
    }
]