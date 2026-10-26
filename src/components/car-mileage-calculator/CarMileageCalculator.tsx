
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./CarMileageCalculator.module.css";
import { MapPin, Fuel, IndianRupee, Gauge, Coins, MapPinned } from "lucide-react";


type Results = {
  mileage: number;
  fuelCost: number;
  costPerKm: number;
  tripCost: number;
};

const initialResults: Results = {
  mileage: 0,
  fuelCost: 0,
  costPerKm: 0,
  tripCost: 0,
};

const money = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value);

export default function CarMileageCalculator() {
  const [distance, setDistance] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");
  const [results, setResults] = useState<Results>(initialResults);
  const [calculated, setCalculated] = useState(false);
  const [error, setError] = useState("");

  function calculate() {
    const d = Number(distance);
    const f = Number(fuel);
    const p = Number(price);

    if (
      distance.trim() === "" ||
      fuel.trim() === "" ||
      price.trim() === "" ||
      !Number.isFinite(d) ||
      !Number.isFinite(f) ||
      !Number.isFinite(p) ||
      d <= 0 ||
      f <= 0 ||
      p <= 0
    ) {
      setError("Please enter valid values greater than zero in all fields.");
      setResults(initialResults);
      setCalculated(false);
      return;
    }

    const mileage = d / f;
    const fuelCost = f * p;
    const costPerKm = fuelCost / d;
    const tripCost = d * costPerKm;

    setResults({ mileage, fuelCost, costPerKm, tripCost });
    setCalculated(true);
    setError("");
  }

  function reset() {
    setDistance("0");
    setFuel("0");
    setPrice("0");
    setResults(initialResults);
    setCalculated(false);
    setError("");
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>⚡ Free Tool</span>

          <h1>
            Car <span>Mileage</span> Calculator
          </h1>

          <p className={styles.heroDescription}>
            Know your car&apos;s mileage, fuel cost and trip expenses in seconds.
          </p>

          <p className={styles.heroSubtext}>Save fuel. Drive smarter.</p>

          <div className={styles.features}>
            <span>⚡ Quick &amp; Easy</span>
            <span>♙ No Login Required</span>
            <span>✓ 100% Free</span>
          </div>
        </div>
      </section>

      <section className={styles.calculatorShell}>
        <div className={styles.calculatorGrid}>
          <div className={styles.inputPanel}>
            <h2>Enter your details</h2>
            <p className={styles.muted}>
              Fill in the values below to calculate your mileage and expenses.
            </p>

            <div className={styles.fields}>
              <label className={styles.field}>
                <span className={styles.fieldIcon}>
                <MapPin size={20} strokeWidth={2} />
                </span>
                <span className={styles.fieldContent}>
                  <span className={styles.labelText}>Distance Travelled</span>
                  <span className={styles.inputWrap}>
                    <input
                      type="number"
                      min="0"
                      step="any"
                      placeholder="e.g. 200"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                    />
                    <span>km</span>
                  </span>
                </span>
              </label>

              <label className={styles.field}>
                <span className={styles.fieldIcon}>⛽</span>
                <span className={styles.fieldContent}>
                  <span className={styles.labelText}>Fuel Consumed</span>
                  <span className={styles.inputWrap}>
                    <input
                      type="number"
                      min="0"
                      step="any"
                      placeholder="e.g. 10"
                      value={fuel}
                      onChange={(e) => setFuel(e.target.value)}
                    />
                    <span>litres</span>
                  </span>
                </span>
              </label>

              <label className={styles.field}>
                <span className={styles.fieldIcon}>₹</span>
                <span className={styles.fieldContent}>
                  <span className={styles.labelText}>Fuel Price</span>
                  <span className={styles.inputWrap}>
                    <input
                      type="number"
                      min="0"
                      step="any"
                      placeholder="e.g. 105"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <span>₹ per litre</span>
                  </span>
                </span>
              </label>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.calculateButton}
                onClick={calculate}
              >
                ▦ &nbsp; Calculate
              </button>

              <button
                type="button"
                className={styles.resetButton}
                onClick={reset}
              >
                ↻ &nbsp; Reset
              </button>
            </div>
          </div>

          <div className={styles.resultsPanel}>
            
<h2 className={styles.resultsHeading}>
  <span className={styles.resultsHeadingIcon} aria-hidden="true">
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 8h6" />
      <path d="M9 12h2" />
      <path d="M14 12h1" />
      <path d="M9 16h2" />
      <path d="M14 16h1" />
    </svg>
  </span>
  Your Results
</h2>


            
<div className={styles.resultGrid}>
  <div className={`${styles.resultCard} ${styles.mileageCard}`}>
    <span className={styles.resultIcon}>
      <Gauge size={22} strokeWidth={2} />
    </span>
    <div>
      <p>Mileage</p>
      <strong>{money(results.mileage)}</strong>
      <small>km/l</small>
    </div>
  </div>

  <div className={`${styles.resultCard} ${styles.fuelCard}`}>
    <span className={styles.resultIcon}>
      <IndianRupee size={22} strokeWidth={2} />
    </span>
    <div>
      <p>Fuel Cost</p>
      <strong>₹ {money(results.fuelCost)}</strong>
    </div>
  </div>

  <div className={`${styles.resultCard} ${styles.costCard}`}>
    <span className={styles.resultIcon}>
      <Coins size={22} strokeWidth={2} />
    </span>
    <div>
      <p>Cost per KM</p>
      <strong>₹ {money(results.costPerKm)}</strong>
    </div>
  </div>

  <div className={`${styles.resultCard} ${styles.tripCard}`}>
    <span className={styles.resultIcon}>
      <MapPinned size={22} strokeWidth={2} />
    </span>
    <div>
      <p>Estimated Trip Cost</p>
      <strong>₹ {money(results.tripCost)}</strong>
    </div>
  </div>
</div>


            <div className={styles.howItWorks}>
              <span className={styles.bulb} aria-hidden="true">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M8.5 14.5a7 7 0 1 1 7 0c-.8.6-1.2 1.4-1.3 2.5h-4.4c-.1-1.1-.5-1.9-1.3-2.5Z" />
    <path d="M12 2v2" />
  </svg>
</span>
              <div>
                <strong>How it works?</strong>
                <p>
                  Mileage = Distance ÷ Fuel Consumed
                  <br />
                  Fuel Cost = Fuel Consumed × Fuel Price
                  <br />
                  Cost per KM = Fuel Cost ÷ Distance
                  <br />
                  Trip Cost = Distance × Cost per KM
                </p>
                {calculated && (
                  <small className={styles.success}>
                    Calculation completed successfully.
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infoGrid}>
        <div className={styles.whySection}>
          <h2 className={styles.importantHeading}>
  <span className={styles.importantIcon} aria-hidden="true">
    <span className={styles.importantIcon} aria-hidden="true">
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2Z" />
  </svg>
</span>
  </span>
  Why is Mileage Important?
</h2>
          <p>
            Your car&apos;s mileage affects your daily running costs. Higher
            mileage means you can travel farther using the same amount of fuel,
            helping you save money and reduce your environmental impact.
          </p>

          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 8h2l-1 3" />
                  <path d="M5 10a7 7 0 0 1 13 1v4a2 2 0 0 1-2 2h-1l-1 2h-3l-1-2H8l-1 2H5l-1-4a6 6 0 0 1 1-5Z" />
                  <path d="M9 11h.01M14 8l1-2" />
                </svg>
              </span>
              <span>Save Fuel<br />&amp; Money</span>
            </div>

            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
                  <path d="M9 3v15M15 6v15" />
                  <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                  <path d="M12 12v2" />
                </svg>
              </span>
              <span>Plan Better<br />Trips</span>
            </div>

            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16Z" />
                  <path d="M4 21c3-5 6-8 12-12" />
                </svg>
              </span>
              <span>Drive<br />Greener</span>
            </div>
          </div>
        </div>

        <div className={styles.tipsCard}>
          <h2 className={styles.tipsHeading}>
  <span className={styles.tipsHeadingIcon} aria-hidden="true">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8.5 14.5a7 7 0 1 1 7 0c-.8.6-1.2 1.4-1.3 2.5h-4.4c-.1-1.1-.5-1.9-1.3-2.5Z" />
      <path d="M12 2v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m19.1 4.9-1.4 1.4" />
    </svg>
  </span>
  Quick Tips to Improve Mileage
</h2>
          <ol>
            <li>Keep your tyres properly inflated.</li>
            <li>Avoid sudden acceleration and hard braking.</li>
            <li>Use the right engine oil and get regular servicing.</li>
            <li>Remove unnecessary weight from your car.</li>
            <li>Use good quality fuel.</li>
          </ol>
        </div>
      </section>

      <section className={styles.serviceBanner}>
        <div className={styles.serviceIcon}>♧</div>
        <div className={styles.serviceText}>
          <h2>Need a Service?</h2>
          <p>Get your car checked at a trusted garage near you.</p>
        </div>
        <Link href="/services" className={styles.garageButton}>
          Find a Garage <span>→</span>
        </Link>
      </section>
    </div>
  );
}
