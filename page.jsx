"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12 bg-gradient-to-br from-sky-100 via-white to-blue-100 min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur shadow-sm flex flex-wrap gap-4 justify-center text-sm py-3 mb-6 text-blue-800 font-semibold rounded-xl">
        <a href="#profil" className="hover:underline">Profil</a>
        <a href="#keahlian" className="hover:underline">Keahlian</a>
        <a href="#pengalaman" className="hover:underline">Pengalaman</a>
        <a href="#pendidikan" className="hover:underline">Pendidikan</a>
        <a href="#sertifikasi" className="hover:underline">Sertifikasi</a>
        <a href="#kepribadian" className="hover:underline">Kepribadian</a>
        <a href="#organisasi" className="hover:underline">Organisasi</a>
        <a href="#kontak" className="hover:underline">Kontak</a>
      </nav>
      <header className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/profile.jpg"
            alt="Foto Fauzi Hidayat"
            width={140}
            height={140}
            className="rounded-full shadow-2xl border-4 border-white"
          />
        </motion.div>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-gray-800"
        >
          Fauzi Hidayat
        </motion.h1>
        <p className="text-gray-600">Profesional Logistik | SDM | Trainer | ESTP</p>
        <p className="text-sm mt-1">Sumbersuko, Gempol, Pasuruan · 0813-5863-3340 · fauzih536@gmail.com</p>
        <p className="text-sm">Website: fauzihidayat536.github.io · Google Scholar: yYA-meUAAAAJ</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-2 mt-3"
        >
          <a
            href="/CV_ATS_FauziHidayat_Multipurpose_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">Unduh CV Lengkap</Button>
          </a>
          <a
            href="https://wa.me/6281358633340"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Hubungi via WhatsApp</Button>
          </a>
        </motion.div>
      </header>
    </div>
  );
}
