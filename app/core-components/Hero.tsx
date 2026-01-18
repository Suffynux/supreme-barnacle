'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
    // Driving/Car POV - Luxury Travel
    '/herovideos/herovid1.mp4',
    // City/Urban transfer feel
    '/herovideos/herovid2.mp4',
    // Abstract/Clean motion (or another relevant travel clip)
    '/herovideos/herovid3.mp4'
];

// Fallback in case videos fail
const fallbackImage = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2621&q=80";

export default function Hero() {
    const [currentVideo, setCurrentVideo] = useState(0);

    // Auto-rotate videos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 8000); // Switch every 8 seconds
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const handlePrev = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                height: 'calc(100vh - 80px)', // Adjust for navbar height
                minHeight: '600px',
                width: '100%',
                overflow: 'hidden',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#000' // Dark background as fallback
            }}
        >
            {/* Video Background Layer using simple CSS transitions for cross-fade */}
            {videos.map((src, index) => (
                <video
                    key={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={fallbackImage}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1, // Base layer
                        opacity: currentVideo === index ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out'
                    }}
                >
                    <source src={src} type="video/mp4" />
                </video>
            ))}

            {/* Overlay to ensure text readability */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2, // Above video
                    background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)'
                }}
            />

            {/* Text Content */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, px: { xs: 3, md: 5 } }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-noto"
                    style={{ maxWidth: '800px' }}
                >

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 2,
                                py: 1,
                                borderRadius: '50px',
                                border: '1px solid rgba(255,255,255,0.3)',
                                bgcolor: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                mb: 3
                            }}
                        >
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#0DCDC2' }} />
                            <Typography variant="caption" sx={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                                Trusted by pilgrims traveling from the UK, USA & Europe
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* Main Heading */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '4.5rem' },
                            fontWeight: 800,
                            lineHeight: 1.1,
                            mb: 4,
                            // Gradient text effect
                            background: 'linear-gradient(90deg, #FFFFFF 0%, #E0E0E0 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        Stress-Free Airport Transfers & City Travel for Umrah & International Pilgrims
                    </Typography>

                    {/* Primary Text */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            fontWeight: 300,
                            lineHeight: 1.6,
                            color: 'rgba(255,255,255,0.9)',
                            mb: 6,
                            maxWidth: '650px'
                        }}
                    >
                        From the moment you land in Saudi Arabia until your return — we provide reliable, punctual, and pilgrim-friendly transportation so you can focus on your worship, not your travel worries.
                    </Typography>

                    {/* Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowRight size={20} />}
                            sx={{
                                borderRadius: '50px',
                                px: 5,
                                py: 2,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                bgcolor: '#0DCDC2', // Teal-ish color
                                color: '#000',
                                boxShadow: '0 0 20px rgba(13, 205, 194, 0.4)',
                                ':hover': {
                                    bgcolor: '#0abdb3',
                                    boxShadow: '0 0 30px rgba(13, 205, 194, 0.6)'
                                }
                            }}
                        >
                            Book Now
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <Box sx={{ display: 'flex', gap: 4, mt: 8, opacity: 0.8 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircle2 size={18} color="#0DCDC2" />
                            <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>ISO Certified</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircle2 size={18} color="#0DCDC2" />
                            <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>24/7 Support</Typography>
                        </Box>
                    </Box>

                </motion.div>
            </Container>

            {/* Slide Navigation Dots */}
            <Box sx={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 2, zIndex: 10 }}>
                {videos.map((_, idx) => (
                    <Box
                        key={idx}
                        onClick={() => setCurrentVideo(idx)}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            bgcolor: currentVideo === idx ? '#0DCDC2' : 'rgba(255,255,255,0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            ':hover': { bgcolor: '#fff' }
                        }}
                    />
                ))}
            </Box>

        </Box>
    );
}
