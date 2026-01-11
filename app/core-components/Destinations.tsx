'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const destinations = [
    {
        title: "Airport Pickup & Drop Off",
        description: "Enjoy a seamless airport transfer with Trust Track Travels. Whether you're arriving or departing, our reliable service ensures timely pickups and drop-offs, providing a stress-free start or end to your journey.",
        image: "/destinations/airport.png",
    },
    {
        title: "Makkah Ziyarat",
        description: "Explore the sacred sites of Makkah with our guided Ziyarat service. Visit historical landmarks and places of Islamic significance in comfort, with knowledgeable drivers ensuring a smooth and enriching experience.",
        image: "/destinations/makkah.png",
    },
    {
        title: "Makkah to Madinah / Madinah to Makkah",
        description: "Experience a smooth and comfortable journey between the two holy cities with our dedicated transport service. We ensure a safe and relaxing ride, allowing you to travel with peace of mind.",
        image: "/destinations/4.png", // Assuming 4.png represents this long-distance route based on common naming
    },
    {
        title: "Madinah Ziyarat",
        description: "Discover the spiritual and historical sites of Madinah with our well-organized Ziyarat tour. From mosques to historic landmarks, travel comfortably while deepening your connection to Islamic history.",
        image: "/destinations/madina.png",
    },
    {
        title: "Badar Ziyarat",
        description: "Visit the historic site of the Battle of Badr, a significant event in Islamic history. Our service ensures a comfortable and informative journey, allowing you to explore this sacred location with ease.",
        image: "/destinations/badar.png",
    },
    {
        title: "Train Station Pickup & Drop Off",
        description: "Enjoy a hassle-free transfer to and from the train station with Trust Track Travels. Whether you're arriving or departing, our punctual and comfortable service ensures a smooth journey, making your travel experience stress-free and convenient.",
        image: "/destinations/trainStation.png",
    }
];

export default function Destinations() {
    const handleWhatsAppBooking = (title: string) => {
        const message = `Hello Trust Track Travels, I would like to book the ${title} service.`;
        const whatsappUrl = `https://wa.me/966500000000?text=${encodeURIComponent(message)}`; // Replace with actual number
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Box sx={{ py: 10, bgcolor: '#fdfdfd' }} id="destinations">
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h2"
                        className="font-noto"
                        sx={{
                            fontWeight: 800,
                            color: '#000',
                            mb: 2,
                            fontSize: { xs: '2.5rem', md: '3.5rem' }
                        }}
                    >
                        Our Exclusive Services
                    </Typography>
                    <Typography
                        variant="h6"
                        className="font-noto"
                        sx={{ color: '#666', fontWeight: 400, maxWidth: '700px', mx: 'auto' }}
                    >
                        We provide premium transportation solutions tailored for your spiritual and travel needs.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {destinations.map((dest, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                                            borderColor: '#0DCDC2'
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                        <CardMedia
                                            component="img"
                                            image={dest.image}
                                            alt={dest.title}
                                            sx={{
                                                height: 300,
                                                transition: 'transform 0.5s ease',
                                                '&:hover': { transform: 'scale(1.1)' }
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h3"
                                            className="font-noto"
                                            sx={{
                                                fontWeight: 700,
                                                color: '#0DCDC2',
                                                fontSize: '1.25rem',
                                                mb: 2,
                                                minHeight: '3rem',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {dest.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className="font-noto"
                                            sx={{
                                                color: '#555',
                                                lineHeight: 1.7,
                                                mb: 4,
                                                flexGrow: 1
                                            }}
                                        >
                                            {dest.description}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            onClick={() => handleWhatsAppBooking(dest.title)}
                                            startIcon={<MessageCircle size={18} />}
                                            sx={{
                                                bgcolor: '#0DCDC2',
                                                color: '#fff',
                                                borderRadius: '12px',
                                                py: 1.5,
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                boxShadow: 'none',
                                                '&:hover': {
                                                    bgcolor: '#0abdb3',
                                                    boxShadow: '0 8px 25px rgba(13, 205, 194, 0.4)'
                                                }
                                            }}
                                        >
                                            Book Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}