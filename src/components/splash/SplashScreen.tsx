'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './SplashScreen.module.css';

interface SplashScreenProps {
  /** Duration in milliseconds before auto-dismiss (default: 3500ms, in the 3-5s range) */
  duration?: number;
  /** Callback fired when splash screen finishes exiting */
  onFinish?: () => void;
}

const emptySubscribe = () => () => {};

export default function SplashScreen({
  duration = 3500,
  onFinish,
}: SplashScreenProps) {
  const isMounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isMounted) return;

    // Car start ignition sound effect
    let audio: HTMLAudioElement | null = null;
    let fadeInterval: NodeJS.Timeout | null = null;

    try {
      audio = new Audio('/mixkit-car-start-ignition-1559.wav');
      audio.volume = 0.8;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser autoplay restriction blocks, play on first user interaction
          const handleFirstInteraction = () => {
            if (audio) {
              audio.play().catch(() => {});
            }
            window.removeEventListener('pointerdown', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
          };

          window.addEventListener('pointerdown', handleFirstInteraction, { once: true });
          window.addEventListener('keydown', handleFirstInteraction, { once: true });
          window.addEventListener('touchstart', handleFirstInteraction, { once: true });
        });
      }
    } catch {
      // Audio API unavailable or failed
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const intervalTime = 25;
    const totalSteps = Math.max(1, duration / intervalTime);
    let currentStep = 0;

    const stopAudio = () => {
      if (audio) {
        const currentAudio = audio;
        fadeInterval = setInterval(() => {
          if (currentAudio.volume > 0.1) {
            currentAudio.volume = Math.max(0, currentAudio.volume - 0.15);
          } else {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            if (fadeInterval) clearInterval(fadeInterval);
          }
        }, 50);
      }
    };

    const timer = setInterval(() => {
      currentStep += 1;
      const nextProgress = Math.min(100, (currentStep / totalSteps) * 100);
      setProgress(nextProgress);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        stopAudio();

        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = '';
        }, 100);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      if (fadeInterval) clearInterval(fadeInterval);
      document.body.style.overflow = originalOverflow;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [duration, isMounted]);

  if (!isMounted) return null;

  const handleSkip = () => {
    setIsVisible(false);
    document.body.style.overflow = '';
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = '';
        if (onFinish) onFinish();
      }}
    >
      {isVisible && (
        <motion.div
          className={styles.splashOverlay}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
          }}
          aria-hidden={!isVisible}
        >
         

          <div className={styles.ambientGlow} />

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Lottie Car Animation */}
            <div className={styles.lottieWrapper}>
              <DotLottieReact
                src="/Car.lottie"
                loop
                autoplay
                className={styles.lottiePlayer}
              />
            </div>

            {/* Minimalist Progress Loader */}
            <div className={styles.loaderTrack}>
              <div
                className={styles.loaderFill}
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
