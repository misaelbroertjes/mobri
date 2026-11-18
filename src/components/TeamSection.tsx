"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Code2, Laptop, Palette, PenTool, Globe } from "lucide-react";
import React, { useRef, useEffect } from "react";

const team = [
    {
        name: "Misaël Broertjes",
        role: "Webdesign, Development & Onderhoud",
        bio: "Ik ontwerp en bouw websites die [snel], [herkenbaar] en [vindbaar] zijn, en zorg dat ze daarna ook zonder zorgen blijven draaien.",
        details: "Vanuit Meppel help ik ondernemers in Drenthe, Overijssel en daarbuiten. Geen groot bureau met tussenlagen, maar direct contact, korte lijnen en oog voor detail.",
        image: "/images/team/misael-headshot.webp",
        imageClass: "-translate-x-[8%] translate-y-[8%]",
        icons: [
            { Icon: Code2, x: "-55%", y: "-45%", size: "w-14 h-14", delay: 0, parallax: 40, mouseStrength: 15 },
            { Icon: Palette, x: "55%", y: "-25%", size: "w-10 h-10", delay: 0.2, parallax: -30, mouseStrength: -20 },
            { Icon: Laptop, x: "-50%", y: "25%", size: "w-16 h-16", delay: 0.4, parallax: 20, mouseStrength: 10 },
            { Icon: PenTool, x: "65%", y: "30%", size: "w-12 h-12", delay: 0.1, parallax: -45, mouseStrength: 18 },
            { Icon: Globe, x: "-10%", y: "-65%", size: "w-11 h-11", delay: 0.3, parallax: 35, mouseStrength: -12 },
        ]
    }
];

const BLOB_VARIANTS = {
    animate: {
        borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
        ],
    }
};

const BLOB_TRANSITION = {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut"
} as const;

function HighlightText({ text }: { text: string }) {
    const parts = text.split(/\[(.*?)\]/);
    return (
        <>
            {parts.map((part, i) => (
                i % 2 === 1 ? (
                    <span key={i} className="relative inline-block px-1">
                        <span className="relative z-10 text-secondary font-bold">{part}</span>
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 + (i * 0.1) }}
                            className="absolute bottom-1 left-0 h-[30%] bg-primary/30 z-0 rounded-sm"
                        />
                    </span>
                ) : part
            ))}
        </>
    );
}

function FloatingIcon({ Icon, x, y, size, delay, parallax, mouseStrength, scrollYProgress, mouseX, mouseY }: any) {
    const scrollYOffset = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);
    const mouseXOffset = useTransform(mouseX, [-0.5, 0.5], [-mouseStrength, mouseStrength]);
    const mouseYOffset = useTransform(mouseY, [-0.5, 0.5], [-mouseStrength, mouseStrength]);

    const springX = useSpring(mouseXOffset, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseYOffset, { stiffness: 60, damping: 20 });
    const springScrollY = useSpring(scrollYOffset, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            className={`absolute ${size} bg-white/40 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-primary border border-white/40 z-40 pointer-events-none`}
            style={{
                left: "50%",
                top: "50%",
                marginLeft: x,
                marginTop: y,
                x: springX,
                y: springY,
                translateY: springScrollY
            }}
            animate={{
                rotate: [0, 5, -5, 0]
            }}
            transition={{
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay }
            }}
        >
            <Icon className="w-1/2 h-1/2" />
        </motion.div>
    );
}

export function TeamSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Dynamic tilt values
    const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 50, damping: 20 });
    const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 50, damping: 20 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) return;
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set((e.clientX / innerWidth) - 0.5);
            mouseY.set((e.clientY / innerHeight) - 0.5);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section ref={sectionRef} id="over-mij" className="py-32 md:py-40 bg-white text-secondary relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
                            Over mij
                        </span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-secondary">
                            Het gezicht achter Mobri<span className="text-primary">.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed px-4">
                            Geen groot bureau met tussenlagen, maar persoonlijke aandacht en één vast aanspreekpunt voor design, techniek en onderhoud.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-32 lg:space-y-48 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <div
                            key={member.name}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-24 md:gap-32 lg:gap-40 group`}
                        >

                            {/* Visual Side with 3D Tilt */}
                            <motion.div
                                className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex-shrink-0"
                                style={{
                                    perspective: "1000px",
                                    rotateX: tiltX,
                                    rotateY: tiltY,
                                }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-secondary/5 rounded-full z-0 border border-secondary/10 backdrop-blur-sm"
                                    variants={BLOB_VARIANTS}
                                    animate="animate"
                                    transition={BLOB_TRANSITION}
                                />

                                {member.icons.map((item, i) => (
                                    <FloatingIcon
                                        key={i}
                                        {...item}
                                        scrollYProgress={scrollYProgress}
                                        mouseX={mouseX}
                                        mouseY={mouseY}
                                    />
                                ))}

                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                    <div className="relative w-full h-full flex items-center justify-center p-4">

                                        <motion.div
                                            className="absolute inset-0 overflow-hidden z-20"
                                            variants={BLOB_VARIANTS}
                                            animate="animate"
                                            transition={BLOB_TRANSITION}
                                        >
                                            <Image
                                                src={member.image}
                                                alt={`Portretfoto van ${member.name} - ${member.role} bij Mobri`}
                                                width={400}
                                                height={400}
                                                className={`w-full h-full object-contain ${member.imageClass} select-none pointer-events-none drop-shadow-2xl`}
                                            />
                                        </motion.div>

                                        <div
                                            className={`absolute inset-0 z-30`}
                                            aria-hidden="true"
                                            style={{
                                                maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 60%)',
                                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 60%)'
                                            }}
                                        >
                                            <Image
                                                src={member.image}
                                                alt=""
                                                width={400}
                                                height={400}
                                                className={`w-full h-full object-contain ${member.imageClass} select-none pointer-events-none drop-shadow-2xl`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-16 bg-secondary/10 rounded-full blur-[100px] z-[-1] opacity-30" />
                            </motion.div>

                            {/* Text Side - Staggered entrance */}
                            <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <motion.h3
                                    className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    {member.name}
                                </motion.h3>

                                <motion.div
                                    className={`flex ${index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} mb-10`}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.45 }}
                                >
                                    <p className="text-white font-bold text-sm uppercase tracking-widest px-6 py-2 bg-secondary rounded-full shadow-lg">
                                        {member.role}
                                    </p>
                                </motion.div>

                                <motion.p
                                    className="text-muted-foreground leading-relaxed italic text-2xl md:text-3xl opacity-90 max-w-xl mx-auto md:mx-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    &ldquo;<HighlightText text={member.bio} />&rdquo;
                                </motion.p>

                                {member.details && (
                                    <motion.p
                                        className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6 max-w-xl mx-auto md:mx-0"
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.75 }}
                                    >
                                        {member.details}
                                    </motion.p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Extra Over mij diepgang & werkwijze */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10"
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">01 • Eerlijk &amp; klein</p>
                        <h3 className="text-xl font-heading font-bold text-secondary mb-3">Eén vast aanspreekpunt</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Mobri is bewust kleinschalig. Je spreekt geen verkoper of tussenpersoon, maar rechtstreeks degene die jouw website ontwerpt, bouwt en onderhoudt.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10"
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">02 • Zonder jargon</p>
                        <h3 className="text-xl font-heading font-bold text-secondary mb-3">Duidelijke afspraken</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Ik denk nuchter met je mee over wat jouw bedrijf echt nodig heeft. Geen onnodige functies, maar een snelle website waar bezoekers makkelijk contact opnemen.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10"
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">03 • Lokaal &amp; flexibel</p>
                        <h3 className="text-xl font-heading font-bold text-secondary mb-3">Meppel &amp; heel Nederland</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            In Meppel, Zwolle, Steenwijk en Hoogeveen kom ik graag bij je langs voor een kop koffie. Daarbuiten werken we net zo vlot samen via video-overleg en WhatsApp.
                        </p>
                    </motion.div>
                </div>
            </div >
        </section >
    );
}
