"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Code2, Terminal, Laptop, Palette, PenTool, MessageSquareHeart, Sparkles, Database, Globe, Brush, Users } from "lucide-react";
import React, { useRef, useEffect } from "react";

const team = [
    {
        name: "Misaël Broertjes",
        role: "Web & Tech Lead",
        bio: "Ik zorg dat jouw website [technisch] staat als een huis. [Snel], [veilig] en makkelijk te gebruiken.",
        image: "/images/team/misael-headshot.png",
        imageClass: "-translate-x-[8%] translate-y-[8%]",
        icons: [
            { Icon: Code2, x: "-55%", y: "-45%", size: "w-14 h-14", delay: 0, parallax: 40, mouseStrength: 15 },
            { Icon: Terminal, x: "55%", y: "-25%", size: "w-10 h-10", delay: 0.2, parallax: -30, mouseStrength: -20 },
            { Icon: Laptop, x: "-50%", y: "25%", size: "w-16 h-16", delay: 0.4, parallax: 20, mouseStrength: 10 },
            { Icon: Database, x: "65%", y: "30%", size: "w-12 h-12", delay: 0.1, parallax: -45, mouseStrength: 18 },
            { Icon: Globe, x: "-10%", y: "-65%", size: "w-11 h-11", delay: 0.3, parallax: 35, mouseStrength: -12 },
        ]
    },
    {
        name: "Eva Broertjes",
        role: "Design & Virtual Assistant",
        bio: "Ik ben jouw [creatieve] en organisatorische rechterhand. Van [huisstijl] tot [workflow].",
        image: "/images/team/eva-headshot.png",
        imageClass: "translate-y-[8%]",
        icons: [
            { Icon: Palette, x: "-50%", y: "-40%", size: "w-14 h-14", delay: 0.1, parallax: -50, mouseStrength: 25 },
            { Icon: PenTool, x: "60%", y: "20%", size: "w-10 h-10", delay: 0.3, parallax: 30, mouseStrength: -15 },
            { Icon: MessageSquareHeart, x: "40%", y: "-65%", size: "w-16 h-16", delay: 0.5, parallax: -20, mouseStrength: 20 },
            { Icon: Brush, x: "-65%", y: "15%", size: "w-12 h-12", delay: 0.2, parallax: 45, mouseStrength: -18 },
            { Icon: Users, x: "10%", y: "55%", size: "w-11 h-11", delay: 0.4, parallax: -35, mouseStrength: 12 },
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
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set((e.clientX / innerWidth) - 0.5);
            mouseY.set((e.clientY / innerHeight) - 0.5);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section ref={sectionRef} id="team" className="py-40 bg-white text-secondary relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
                            Creators & Thinkers
                        </span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-secondary">
                            Het hart van Mobri<span className="text-primary">.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed px-4">
                            Geen groot bureau, maar persoonlijke aandacht. Wij bouwen samen aan jouw digitale succes.
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
                                                priority
                                            />
                                        </motion.div>

                                        <div
                                            className={`absolute inset-0 z-30`}
                                            style={{
                                                maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 60%)',
                                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 60%)'
                                            }}
                                        >
                                            <Image
                                                src={member.image}
                                                alt={`Portretfoto van ${member.name} - ${member.role} bij Mobri`}
                                                width={400}
                                                height={400}
                                                className={`w-full h-full object-contain ${member.imageClass} select-none pointer-events-none drop-shadow-2xl`}
                                                priority
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
                                    "<HighlightText text={member.bio} />"
                                </motion.p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
}
