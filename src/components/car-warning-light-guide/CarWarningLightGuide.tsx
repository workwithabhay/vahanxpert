
"use client";

import { useMemo, useState } from "react";
import styles from "./CarWarningLightGuide.module.css";
import { Cog } from "lucide-react";
import { Clock3, Check, ShieldCheck } from "lucide-react";
type WarningLight = {
  id: string;
  name: string;
  icon: string;
  category: string;
  severity: "High" | "Moderate" | "Low";
  description: string;
  causes: string[];
  actions: string[];
  important: string;
};

function EngineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 3h6" />
      <path d="M13 3v4" />
      <path d="M2 10v6" />
      <path d="M2 13h4" />
      <path d="M6 16a2 2 0 002 2h1a2 2 0 011.6.8l.3.4a2 2 0 001.6.8h2.264a2 2 0 001.789-1.106l1.67-3.341a1 1 0 01.895-.553H21a1 1 0 001-1v-4a1 1 0 00-1-1h-3.5a1 1 0 01-.8-.4l-.9-1.2A1 1 0 0015 7h-4a1 1 0 00-.8.4l-.9 1.2a1 1 0 01-.8.4H7a1 1 0 00-1 1z" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M 22 14 L 22 10" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  );
}

function OilIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
      <circle cx="12" cy="12" r="2" />
      <path d="M13.4 10.6 19 5" />
    </svg>
  );
}


function BrakeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19v3" />
      <path d="M12 2v3" />
      <path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" />
      <path d="M19 12h3" />
      <path d="M2 12h3" />
      <path d="m2 2 20 20" />
      <path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" />
    </svg>
  );
}

function GaugeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function AbsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function AirbagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v5l-3 3" />
      <path d="m12 12 4 2 2 4" />
      <path d="M8 21h8" />
      <path d="M5 10 3 8" />
      <path d="m19 10 2-2" />
    </svg>
  );
}

function TemperatureIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 14.76V5a3 3 0 0 0-6 0v9.76a5 5 0 1 0 6 0Z" />
      <path d="M11 11v7" />
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 22V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17" />
      <path d="M3 22h12" />
      <path d="M7 7h4v5H7z" />
      <path d="M15 10h2l3 3v5a2 2 0 0 0 4 0v-7l-3-3" />
    </svg>
  );
}

function TractionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 16a7 7 0 0 1 14 0" />
      <path d="M8 16h8" />
      <path d="m4 5 2 2" />
      <path d="m20 5-2 2" />
      <path d="M12 3v3" />
      <path d="m7 20 2-2" />
      <path d="m17 20-2-2" />
    </svg>
  );
}

function DoorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
      <path d="M2 21h20" />
      <path d="M14 12h.01" />
    </svg>
  );
}

function LightsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 18V5" />
      <path d="m15 8 4-3" />
      <path d="m15 12 6-1" />
      <path d="m15 16 4 3" />
      <path d="M5 8a7 7 0 0 0 0 8h7V8Z" />
    </svg>
  );
}


const warnings: WarningLight[] = [
  {
    id: "engine",
    name: "Check Engine",
    icon: "engine",
    category: "Engine",
    severity: "Moderate",
    description: "Indicates a problem with the engine or emission system.",
    causes: [
      "Loose or faulty fuel cap",
      "Minor sensor issue",
      "Catalytic converter problem",
      "More serious engine fault",
    ],
    actions: [
      "Check whether the fuel cap is properly closed.",
      "If the light stays on, arrange a diagnostic check.",
      "Avoid aggressive driving until the issue is checked.",
    ],
    important:
      "If the light is flashing, reduce speed and load. Stop safely and seek professional help, especially if the engine runs roughly.",
  },
  {
    id: "battery",
    name: "Battery Charge",
    icon: "battery",
    category: "Battery & Electrical",
    severity: "High",
    description: "The battery may not be charging correctly.",
    causes: [
      "Alternator fault",
      "Loose or damaged battery connections",
      "Worn drive belt",
      "Battery or charging-system fault",
    ],
    actions: [
      "Switch off unnecessary electrical accessories.",
      "Stop somewhere safe if the light remains on.",
      "Have the charging system checked promptly.",
    ],
    important:
      "The vehicle may stall when its battery power runs out. Do not ignore this warning.",
  },
  {
    id: "oil",
    name: "Oil Pressure",
    icon: "oil",
    category: "Engine",
    severity: "High",
    description: "Engine oil pressure may be too low.",
    causes: [
      "Low engine oil level",
      "Oil leak",
      "Oil pump problem",
      "Blocked oil filter or internal engine fault",
    ],
    actions: [
      "Pull over safely as soon as possible.",
      "Switch off the engine.",
      "Check the oil level when safe and seek professional assistance.",
    ],
    important:
      "Stop the engine when the oil-pressure warning appears. Continuing to drive can cause severe engine damage.",
  },
  {
    id: "brake",
    name: "Brake System",
    icon: "brake",
    category: "Brakes",
    severity: "High",
    description: "The brake system may have a fault, or the parking brake may be engaged.",
    causes: [
      "Parking brake is engaged",
      "Low brake fluid",
      "Brake system fault",
      "Worn or damaged brake components",
    ],
    actions: [
      "Check whether the parking brake is fully released.",
      "If the warning remains, stop in a safe place.",
      "Arrange professional inspection before continuing if braking may be affected.",
    ],
    important:
      "If braking feels unusual, the pedal changes, or a red brake warning remains on, do not continue driving.",
  },
  {
    id: "tyre",
    name: "Tyre Pressure",
    icon: "gauge",
    category: "Tyres",
    severity: "Moderate",
    description: "One or more tyres may have incorrect air pressure.",
    causes: [
      "Low tyre pressure",
      "Puncture or air leak",
      "Temperature-related pressure change",
      "Tyre-pressure monitoring sensor issue",
    ],
    actions: [
      "Reduce speed and avoid sudden manoeuvres.",
      "Check all tyre pressures when safe.",
      "Inflate to the vehicle manufacturer's recommended pressure.",
    ],
    important:
      "If a tyre looks flat or the vehicle pulls to one side, stop safely and inspect it before continuing.",
  },
  {
    id: "abs",
    name: "ABS",
    icon: "abs",
    category: "Brakes",
    severity: "Moderate",
    description: "The anti-lock braking system may not be working correctly.",
    causes: [
      "Wheel-speed sensor fault",
      "Damaged sensor wiring",
      "ABS module issue",
      "Low battery voltage",
    ],
    actions: [
      "Drive cautiously and leave extra stopping distance.",
      "Have the ABS system diagnosed.",
      "If the red brake warning also appears, stop safely.",
    ],
    important:
      "Normal braking may remain available, but anti-lock assistance may not. Your vehicle's manual explains the specific warning.",
  },
  {
    id: "airbag",
    name: "Airbag",
    icon: "airbag",
    category: "Safety",
    severity: "High",
    description: "A fault may be present in the airbag or supplemental restraint system.",
    causes: [
      "Airbag sensor fault",
      "Seat-belt pretensioner issue",
      "Wiring or connector fault",
      "Restraint control module problem",
    ],
    actions: [
      "Arrange a prompt inspection by a qualified technician.",
      "Follow the vehicle manual's safety instructions.",
      "Do not tamper with airbag wiring or components.",
    ],
    important:
      "Airbags or seat-belt pretensioners may not work as intended in a collision. Get the system checked promptly.",
  },
  {
    id: "temperature",
    name: "Temperature",
    icon: "temperature",
    category: "Engine",
    severity: "High",
    description: "The engine may be overheating.",
    causes: [
      "Low coolant",
      "Cooling-system leak",
      "Cooling fan failure",
      "Thermostat or water-pump problem",
    ],
    actions: [
      "Pull over safely and switch off the engine.",
      "Allow the engine to cool completely.",
      "Get professional help if the warning persists.",
    ],
    important:
      "Never open a hot radiator or coolant cap. Pressurised hot coolant can cause serious burns.",
  },
  {
    id: "fuel",
    name: "Fuel Low",
    icon: "fuel",
    category: "Other",
    severity: "Low",
    description: "The fuel level is getting low.",
    causes: [
      "Fuel level is near reserve",
      "Vehicle is on a steep incline",
      "Fuel-level sender fault",
    ],
    actions: [
      "Plan a stop at a suitable fuel station.",
      "Refuel before the tank becomes empty.",
      "If the warning remains after refuelling, arrange a check.",
    ],
    important:
      "Do not rely on a fixed remaining-distance estimate. Fuel reserve varies by vehicle and driving conditions.",
  },
  {
    id: "esp",
    name: "ESP / Traction Control",
    icon: "traction",
    category: "Safety",
    severity: "Moderate",
    description: "The stability or traction-control system is active or may have a fault.",
    causes: [
      "Traction control is intervening",
      "Slippery road conditions",
      "Wheel-speed sensor fault",
      "Stability-control system fault",
    ],
    actions: [
      "Ease off the accelerator on slippery roads.",
      "Avoid sudden steering or braking.",
      "If the light stays on, consult the vehicle manual and arrange an inspection.",
    ],
    important:
      "A flashing light may indicate the system is actively intervening. A persistent light may indicate reduced assistance.",
  },
  {
    id: "door",
    name: "Door Open",
    icon: "door",
    category: "Other",
    severity: "Low",
    description: "A door, bonnet, or boot may not be fully closed.",
    causes: [
      "Door not fully latched",
      "Boot or bonnet left open",
      "Latch sensor fault",
    ],
    actions: [
      "Park safely before checking.",
      "Close all doors, the bonnet and the boot securely.",
      "If the warning persists, have the latch sensors checked.",
    ],
    important:
      "Do not continue driving until doors and other closures are secured properly.",
  },
  {
    id: "lights",
    name: "Lights",
    icon: "lights",
    category: "Other",
    severity: "Low",
    description: "An exterior bulb may have failed, or a lighting system may need attention.",
    causes: [
      "Headlight or tail-light bulb failure",
      "Brake light not working",
      "Blown fuse",
      "Lighting circuit fault",
    ],
    actions: [
      "Check the exterior lights when safely parked.",
      "Replace faulty bulbs with the correct specification.",
      "Get electrical faults diagnosed if needed.",
    ],
    important:
      "Working lights help you see and be seen. Avoid driving at night with essential lights not working.",
  },
];

const categories = [
  "All",
  "Engine",
  "Battery & Electrical",
  "Brakes",
  "Tyres",
  "Safety",
  "Other",
];

export default function CarWarningLightGuide() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<WarningLight | null>(null);

  const filteredWarnings = useMemo(() => {
    const term = search.trim().toLowerCase();

    return warnings.filter((warning) => {
      const matchesCategory =
        activeCategory === "All" ||
        warning.category === activeCategory;

      const matchesSearch =
        !term ||
        [
          warning.name,
          warning.category,
          warning.description,
          ...warning.causes,
        ]
          .join(" ")
          .toLowerCase()
          .includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  function downloadGuide() {
    window.print();
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* <span className={styles.eyebrow}>FREE TOOLS</span> */}
          <h1>
            Car Warning Light
            <br />
            Guide
          </h1>
          <p className={styles.heroText}>
            Understand what your dashboard warning lights mean,
            what to do and how urgent it is — so you can drive
            safer and avoid costly repairs.
          </p>

          <label className={styles.searchBox}>
            <span aria-hidden="true">⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for a warning light (e.g. battery, oil, tyre...)"
              aria-label="Search warning lights"
            />
            {search && (
              <button
                type="button"
                className={styles.clearSearch}
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </label>

          
<div className={styles.heroFeatures}>
  <span className={styles.heroFeature}>
    <Clock3 size={14} strokeWidth={1.8} aria-hidden="true" />
    Quick guide
  </span>

  <span className={styles.heroFeature}>
    <Check size={14} strokeWidth={1.8} aria-hidden="true" />
    Easy to understand
  </span>

  <span className={styles.heroFeature}>
    <ShieldCheck size={14} strokeWidth={1.8} aria-hidden="true" />
    Stay safe on the road
  </span>
</div>

        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.categoryBar} aria-label="Warning categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${styles.categoryButton} ${
                activeCategory === category ? styles.categoryActive : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.cardsGrid}>
            {filteredWarnings.map((warning) => (
              <button
                type="button"
                key={warning.id}
                className={`${styles.warningCard} ${
                  selected?.id === warning.id ? styles.cardSelected : ""
                }`}
                onClick={() => setSelected(warning)}
                aria-label={`View details for ${warning.name}`}
              >
               

<span
  className={`${styles.warningIcon} ${
    warning.severity === "High"
      ? styles.iconHigh
      : warning.severity === "Low"
      ? styles.iconLow
      : styles.iconModerate
  }`}
  aria-hidden="true"
>





{warning.name === "Check Engine" ? (
  <EngineIcon />
) : warning.name === "Battery Charge" ? (
  <BatteryIcon />
) : warning.name === "Oil Pressure" ? (
  <OilIcon />
) : warning.name === "Brake System" ? (
  <BrakeIcon />
) : warning.name === "Tyre Pressure" ? (
  <GaugeIcon />
) : warning.name === "ABS" ? (
  <AbsIcon />
) : warning.name === "Airbag" ? (
  <AirbagIcon />
) : warning.name === "Temperature" ? (
  <TemperatureIcon />
) : warning.name === "Fuel Low" ? (
  <FuelIcon />
) : warning.name === "ESP / Traction Control" ? (
  <TractionIcon />
) : warning.name === "Door Open" ? (
  <DoorIcon />
) : warning.name === "Lights" ? (
  <LightsIcon />
) : (
  warning.icon
)}






</span>


                <strong>{warning.name}</strong>
                <span className={styles.cardDescription}>
                  {warning.description}
                </span>
                <span
                  className={`${styles.severity} ${
                    warning.severity === "High"
                      ? styles.severityHigh
                      : warning.severity === "Low"
                      ? styles.severityLow
                      : styles.severityModerate
                  }`}
                >
                  {warning.severity}
                </span>
                <span className={styles.cardHint}>View details ↗</span>
              </button>
            ))}

            {filteredWarnings.length === 0 && (
              <div className={styles.noResults}>
                <span>⌕</span>
                <h3>No warning lights found</h3>
                <p>Try a different search or choose another category.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* <aside className={styles.sidePanel}>
            <span className={styles.sideEyebrow}>DRIVE WITH CONFIDENCE</span>
            <h2>Know your warning lights.</h2>
            <p>
              Select any warning-light card to understand its meaning,
              possible causes and recommended next steps.
            </p>
            <div className={styles.sideDivider} />
            <h3>Remember</h3>
            <p>
              Red warnings and unusual vehicle behaviour can indicate
              an urgent problem. Stop somewhere safe and consult your
              vehicle manual.
            </p>
            <a className={styles.garageButton} href="#trusted-garage">
              Find a nearby garage <span>→</span>
            </a>
            <button
              type="button"
              className={styles.pdfButton}
              onClick={downloadGuide}
            >
              ↓ Download / Print Guide
            </button>
            <p className={styles.disclaimer}>
              Warning-light meanings vary by vehicle. Always refer to
              your owner's manual.
            </p>
          </aside> */}
        </div>

        <section className={styles.bottomBanner} id="trusted-garage">
          <div className={styles.bannerCopy}>
            <span className={styles.eyebrow}>STILL UNSURE?</span>
            <h2>
              Get your car checked
              <br />
              by trusted experts.
            </h2>
            <p>
              Book an inspection or service with a qualified garage.
            </p>
        <button
  type="button"
  className={styles.ctaButton}
  onClick={() => {
    window.dispatchEvent(new Event("open-book-service"));
  }}
>
  Book a Service <span aria-hidden="true">→</span>
</button>
          </div>
          <div className={styles.bannerVisual} aria-hidden="true">
            <span>VX</span>
          </div>
        </section>
      </section>

      {selected && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelected(null);
            }
          }}
        >
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="warning-modal-title"
          >
            <div className={styles.modalTop}>
              <span className={styles.modalEyebrow}>WARNING LIGHT GUIDE</span>
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setSelected(null)}
                aria-label="Close warning details"
              >
                ×
              </button>
            </div>

            
<div className={styles.modalHeading}>
 
<span
  className={`${styles.warningIcon} ${
    selected.severity === "High"
      ? styles.iconHigh
      : selected.severity === "Low"
      ? styles.iconLow
      : styles.iconModerate
  }`}
  aria-hidden="true"
>
  {selected.id === "engine" ? (
    <EngineIcon />
  ) : selected.id === "battery" ? (
    <BatteryIcon />
  ) : selected.id === "oil" ? (
    <OilIcon />
  ) : selected.id === "brake" ? (
    <BrakeIcon />
  ) : selected.id === "tyre" ? (
    <GaugeIcon />
  ) : selected.id === "abs" ? (
    <AbsIcon />
  ) : selected.id === "airbag" ? (
    <AirbagIcon />
  ) : selected.id === "temperature" ? (
    <TemperatureIcon />
 ) : selected.name === "ESP / Traction Control" ? (
  <TractionIcon />
  ) : selected.id === "fuel" ? (
    <FuelIcon />
  ) : selected.id === "traction" ? (
    <TractionIcon />
  ) : selected.id === "door" ? (
    <DoorIcon />
  ) : selected.id === "lights" ? (
    <LightsIcon />
  ) : null}
</span>


  <div>
    <h2 id="warning-modal-title">{selected.name}</h2>
    <p>{selected.description}</p>
  </div>
</div>

<div className={styles.modalSection}>
  <h3>What it could mean</h3>
  <ul>
    {selected.causes.map((cause) => (
      <li key={cause}>{cause}</li>
    ))}
  </ul>
</div>

<div className={styles.modalSection}>
  <h3>What you should do</h3>
  <ol className={styles.actionList}>
    {selected.actions.map((action) => (
      <li key={action}>{action}</li>
    ))}
  </ol>
</div>


            <div className={styles.modalSection}>
              <h3>What it could mean</h3>
              <ul>
                {selected.causes.map((cause) => (
                  <li key={cause}>{cause}</li>
                ))}
              </ul>
            </div>

            <div className={styles.modalSection}>
              <h3>What you should do</h3>
              <ol className={styles.actionList}>
                {selected.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ol>
            </div>

            <div className={styles.importantBox}>
              <span className={styles.importantIcon}>!</span>
              <div>
                <strong>Important safety information</strong>
                <p>{selected.important}</p>
              </div>
            </div>

            <div className={styles.modalActions}>
  <button
  type="button"
  className={styles.garageButton}
  onClick={() => {
    window.dispatchEvent(new Event("open-book-service"));
    setSelected(null);
  }}
>
  Book a Service <span>→</span>
</button>

  <button
    type="button"
    className={styles.pdfButton}
    onClick={downloadGuide}
  >
    ↓ Download / Print Guide
  </button>
</div>
            <p className={styles.disclaimer}>
              This guide is general information, not a vehicle diagnosis.
              Check your owner's manual for model-specific advice.
            </p>
          </section>
        </div>
      )}
      
    </div>
    
  );
}
