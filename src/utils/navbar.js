import Home from '../components/Home';
export const navbar = [
    {
        id: 1,
        title: "Home",
        path: "/home",
        Element: <Home/>,
        hidden: false,
        private: false,
    },
    {
        id: 2,
        title: "Properties",
        path: "/properties",
        Element: <div/>,
        hidden: false,
        private: false,
    },
    {
        id: 3,
        title: "Contacts",
        path: "/contacts",
        Element: <div/>,
        hidden: false,
        private: false,
    }
]