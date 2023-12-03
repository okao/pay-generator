// assets
import { IconKey, IconAlignBoxBottomLeft, IconMoneybag } from '../../node_modules/@tabler/icons-react';

// constant
const icons = {
    IconKey,
    IconAlignBoxBottomLeft,
    IconMoneybag
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Reservations ',
            type: 'collapse',
            icon: icons.IconAlignBoxBottomLeft,

            children: [
                {
                    id: 'reservations',
                    title: 'Reservations',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'reports',
                    title: 'Reports',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'others',
            title: 'Reports',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'offers',
            title: 'Offers',
            type: 'collapse',
            icon: icons.IconMoneybag,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        }
    ]
};

export default pages;
