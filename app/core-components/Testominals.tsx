'use client';

import { Box, Container, Typography, Avatar, Card, CardContent } from '@mui/material';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonialsRow1 = [
    {
        name: "Abdullah Ahmed",
        role: "Hajj Pilgrim",
        text: "Excellent service from Makkah to Madinah. The car was clean and the driver was extremely professional and punctual.",
        avatar: "https://i.pravatar.cc/150?u=abdullah"
    },
    {
        name: "Fatimah Zahra",
        role: "Frequent Traveler",
        text: "Best Ziyarat experience! Highly recommend Trust Track for anyone looking for luxury and peace of mind during their trip.",
        avatar: "https://i.pravatar.cc/150?u=fatimah"
    },
    {
        name: "Omar Farooq",
        role: "Business Executive",
        text: "Always on time. The airport pickup was seamless even though my flight was delayed. A truly reliable service.",
        avatar: "https://i.pravatar.cc/150?u=omar"
    },
    {
        name: "Aisha Siddiqa",
        role: "Umrah Visitor",
        text: "The drivers are very respectful and knowledgeable about the holy sites. It made our Ziyarat tours so much more meaningful.",
        avatar: "https://i.pravatar.cc/150?u=aisha"
    }
];

const testimonialsRow2 = [
    {
        name: "Yusuf Idris",
        role: "Travel Vlogger",
        text: "Luxurious vehicles and great customer support. From booking to drop-off, everything was handled with perfection.",
        avatar: "https://i.pravatar.cc/150?u=yusuf"
    },
    {
        name: "Maryam Ibrahim",
        role: "Family Traveler",
        text: "Hassle-free experience during our Umrah trip. The spacious van was perfect for our large family and luggage.",
        avatar: "https://i.pravatar.cc/150?u=maryam"
    },
    {
        name: "Zaid Hassan",
        role: "Tourist",
        text: "Smooth ride and very safe driving. I felt very comfortable throughout the long journey between cities.",
        avatar: "https://i.pravatar.cc/150?u=zaid"
    },
    {
        name: "Khadija Noor",
        role: "Regular Client",
        text: "Trust Track Travels is my go-to transport service in Saudi Arabia. They never disappoint with their quality.",
        avatar: "https://i.pravatar.cc/150?u=khadija"
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonialsRow1[0] }) => (
    <Card
        sx={{
            minWidth: { xs: '300px', md: '400px' },
            mx: 2,
            borderRadius: '24px',
            bgcolor: '#fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            border: '1px solid rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'visible'
        }}
    >
        <CardContent sx={{ p: 4 }}>
            <Box sx={{ color: '#0DCDC2', mb: 2 }}>
                <Quote size={32} fill="#0DCDC2" fillOpacity={0.1} />
            </Box>
            <Typography
                variant="body1"
                className="font-noto"
                sx={{ textWrap: 'balance', color: '#444', mb: 4, lineHeight: 1.7, fontSize: '1.05rem', fontStyle: 'italic' }}
            >
                "{testimonial.text}"
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50, border: '2px solid #0DCDC2' }} />
                <Box>
                    <Typography variant="subtitle1" className="font-noto" sx={{ fontWeight: 700, color: '#000' }}>
                        {testimonial.name}
                    </Typography>
                    <Typography variant="caption" className="font-noto" sx={{ color: '#888' }}>
                        {testimonial.role}
                    </Typography>
                </Box>
            </Box>
        </CardContent>
    </Card>
);

export default function Testominals() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    const springX1 = useSpring(x1, { stiffness: 100, damping: 30 });
    const springX2 = useSpring(x2, { stiffness: 100, damping: 30 });

    return (
        <Box
            ref={sectionRef}
            sx={{
                py: 15,
                bgcolor: '#000', // Luxury dark theme for testimonials to contrast with white Destinations
                color: '#fff',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg" sx={{ mb: 8, textAlign: 'center' }}>
                {/* Badge */}
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        bgcolor: 'rgba(13, 205, 194, 0.1)',
                        border: '1px solid rgba(13, 205, 194, 0.3)',
                        px: 2,
                        py: 0.5,
                        borderRadius: '50px',
                        mb: 3
                    }}
                >
                    <Star size={14} color="#0DCDC2" fill="#0DCDC2" />
                    <Typography variant="caption" className="font-noto" sx={{ fontWeight: 600, color: '#0DCDC2', letterSpacing: 0.5 }}>
                        Rated 4.9/5 by 5,000+ Pilgrims
                    </Typography>
                </Box>

                <Typography
                    variant="h2"
                    className="font-noto"
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: '2.2rem', md: '3.5rem' },
                        mb: 2,
                        background: 'linear-gradient(90deg, #fff 0%, #aaa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Words of praise from others<br />about our presence.
                </Typography>
            </Container>

            {/* Horizontal Scrolling Rows */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {/* Row 1: Moves Left */}
                <motion.div style={{ x: springX1, display: 'flex', whiteSpace: 'nowrap' }}>
                    {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </motion.div>

                {/* Row 2: Moves Right */}
                <motion.div style={{ x: springX2, display: 'flex', whiteSpace: 'nowrap' }}>
                    {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </motion.div>
            </Box>
        </Box>
    );
}