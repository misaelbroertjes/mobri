import { Metadata } from 'next';
import { MeppelContent } from './content';

export const metadata: Metadata = {
    title: 'Webdesign Meppel & Virtual Assistant | Lokaal & Persoonlijk | Mobri',
    description: 'Op zoek naar webdesign in Meppel? Mobri bouwt professionele websites en biedt Virtual Assistant ondersteuning. Gewoon, bij jou om de hoek. Plan een kennismaking.',
    alternates: {
        canonical: 'https://www.mobri.nl/webdesign-meppel/'
    },
    openGraph: {
        title: 'Webdesign Meppel & Virtual Assistant | Mobri',
        description: 'Op zoek naar webdesign in Meppel? Mobri bouwt professionele websites en biedt Virtual Assistant ondersteuning. Gewoon, bij jou om de hoek.',
        url: 'https://www.mobri.nl/webdesign-meppel/',
        images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Mobri Webdesign Meppel' }],
    },
};

export default function WebdesignMeppelPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://www.mobri.nl/#localbusiness',
        'name': 'Mobri',
        'image': 'https://www.mobri.nl/opengraph-image.png',
        'url': 'https://www.mobri.nl/webdesign-meppel/',
        'telephone': '+31638125176',
        'email': 'info@mobri.nl',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Bolsterturf 2',
            'addressLocality': 'Meppel',
            'postalCode': '7942 MC',
            'addressCountry': 'NL'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 52.6937,
            'longitude': 6.1945
        },
        'description': 'Professioneel webdesign en Virtual Assistant services in Meppel. Wij komen graag bij je langs op locatie.',
        'priceRange': '€€',
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
            ],
            'opens': '09:00',
            'closes': '17:00'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MeppelContent />
        </>
    );
}
