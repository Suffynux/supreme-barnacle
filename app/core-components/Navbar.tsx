'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    Toolbar
} from '@mui/material';
import './header-footer.css';
import { Menu } from 'lucide-react';


export default function MainNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Destinations', href: '/destinations' },
        { name: 'Our Vehicle', href: '/our-vehicle' },
        { name: 'Contact', href: '/contact' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ my: 2 }}>
                <Link href="/" className="logo-text">
                    TrustTrack
                </Link>
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <Link href={item.href} className="nav-link" style={{ width: '100%', padding: '12px 0', display: 'block' }}>
                            {item.name}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" className="custom-navbar" elevation={0} color="transparent">
                <Toolbar className="navbar-container">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <Menu />
                    </IconButton>

                    {/* Logo Section */}
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Link href="/" className="logo-text">
                            TrustTrack
                        </Link>
                    </Box>

                    {/* Navigation Links */}
                    <Box component="nav" className="nav-links" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 4 }}>
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="nav-link">
                                {item.name}
                            </Link>
                        ))}
                    </Box>

                    {/* Action Button */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Button variant="contained" className="action-button">
                            Get Started
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}   
