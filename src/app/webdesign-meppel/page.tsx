import { Metadata } from 'next';
import { MeppelContent } from './content';

export const metadata: Metadata = {
    title: 'Website laten maken Meppel | Webdesign op maat | Mobri',
    description: 'Op zoek naar webdesign of een website laten maken in Meppel? Mobri ontwerpt, bouwt en onderhoudt snelle, vindbare websites voor ondernemers in Meppel en omgeving.',
    alternates: {
        canonical: 'https://www.mobri.nl/webdesign-meppel/'
    },
    openGraph: {
        title: 'Website laten maken Meppel | Webdesign op maat | Mobri',
        description: 'Professionele website laten maken in Meppel? Persoonlijk contact, strak webdesign en zorgeloos onderhoud bij Mobri.',
        url: 'https://www.mobri.nl/webdesign-meppel/',
        images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Mobri - Website laten maken in Meppel' }],
    },
};

export default function WebdesignMeppelPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Website laten maken & Webdesign Meppel',
        'serviceType': 'Webdesign, Website Bouw & Onderhoud',
        'url': 'https://www.mobri.nl/webdesign-meppel/',
        'description': 'Professioneel webdesign, WordPress en maatwerk websites laten maken en onderhouden in Meppel, Zwolle, Steenwijk, Hoogeveen, Drenthe en Overijssel.',
        'provider': {
            '@id': 'https://www.mobri.nl/#localbusiness',
        },
        'areaServed': [
            { '@type': 'City', 'name': 'Meppel' },
            { '@type': 'City', 'name': 'Zwolle' },
            { '@type': 'City', 'name': 'Steenwijk' },
            { '@type': 'City', 'name': 'Hoogeveen' },
            { '@type': 'City', 'name': 'Staphorst' },
            { '@type': 'AdministrativeArea', 'name': 'Drenthe' },
            { '@type': 'AdministrativeArea', 'name': 'Overijssel' },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <MeppelContent />
        </>
    );
}
