import React, { useState } from "react";
import "../styles/newhome.css"
import faq from "../assets/home-image/our-faqs-img.webp";
import waterImage from "../assets/home-image/our-faqs-img.webp";
import { Image } from "astro:assets";
const faqData = [
  {
    question: "What services does TWS Service & Solutions offer?",
    answer:
      "We specialize in innovative water management systems, integrated facility maintenance, and comprehensive capital upgrade project management. Our solutions are tailored to meet the unique needs of residential, commercial, and industrial clients.",
  },
  {
    question: "How do you ensure quality and sustainability throughout a project?",
    answer:
      "We adhere to industry best practices and incorporate sustainable technologies into every project. Our commitment to quality and innovation means that we continuously assess and improve our processes to deliver long-term value.",
  },
  {
    question: "Can your maintenance plans be customized for specific facilities?",
    answer:
      " Absolutely. We work closely with each client to develop tailored maintenance and service plans that meet their unique operational requirements and budget considerations.",
  },
  {
    question: "What types of water management solutions do you provide?",
    answer:
           "We offer efficient, cost-effective, and sustainable water management systems that include water conservation, wastewater management, leak detection, and system optimization tailored to your facility’s needs.",
  },
  {
    question: "What industries or sectors do you serve?",
    answer:
      "Our expertise spans a wide range of sectors, including residential communities, commercial facilities, and industrial operations. We design and implement solutions that are specifically optimized for each environment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // FIRST FAQ OPEN

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };


  return (
    <section
      className="faq-section"
      aria-label="Frequently Asked Questions"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
        display: "flex",
        gap: "60px",
        alignItems: "flex-start",
        backgroundColor: "#0d8443",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        flexWrap: "wrap",
      }}
    >
      {/* Left Image */}
      <div
        className="faq-image image-shine"
        style={{
          flex: 1,
          minWidth: "280px",
          maxWidth: "480px",
          borderRadius: "50% 50% 10px 10px",
          overflow: "hidden",
        }}
      >
<img
  src={faq.src}
  alt="Industrial"
  style={{ width: "100%", height: "auto", display: "block" }}
  loading="lazy"
/>
      </div>

      {/* Right Content */}
      <div
        className="faq-content"
        style={{
          flex: 1.2,
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <p
          className="faq-subheading"
          style={{
            color: "#b9a268",
            fontWeight: 600,
            letterSpacing: "1.2px",
            fontSize: 14,
            textTransform: "uppercase",
            marginBottom: 10,
            fontFamily: "'Plus Jakarta Sans', sans-serif",

          }}
        >
          Frequently Asked Questions
        </p>

        <h2
          className="faq-heading"
          style={{
            fontSize: 46,
            fontWeight: 700,
            margin: 0,
            letterSpacing:-0.02,
            lineHeight: 1.1,
fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Answers to Your Most Asked Questions
        </h2>

        {/* FAQ Items */}
        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-item"
            style={{
              borderBottom: index !== faqData.length - 1 ? "1px solid #b9a268" : "none",
              padding: "10px 0",
            }}
          >
            <button
              className={`faq-question ${openIndex === index ? "open" : ""}`}
              aria-expanded={openIndex === index}
              aria-controls={`faq${index + 1}`}
              id={`faq${index + 1}-btn`}
              onClick={() => toggleFAQ(index)}
              style={{
                fontWeight: 600,
                fontSize: 18,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                width: "100%",
                background: "none",
                border: "none",
                color: "inherit",
                fontFamily: "'Plus Jakarta Sans', sans-serif",

                cursor: "pointer",
                padding: 0,
              }}
            >
              <span>{index + 1}.&nbsp;</span>
              <span style={{ flex: 1, textAlign: "left" }}>{item.question}</span>
              <span
                aria-hidden="true"
                style={{
                  fontSize: 20,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",

                  userSelect: "none",
                  transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  marginLeft: 10,
                }}
              >
                ↑
              </span>
            </button>

            <div
              id={`faq${index + 1}`}
              className={`faq-answer ${openIndex === index ? "open" : ""}`}
              role="region"
              aria-labelledby={`faq${index + 1}-btn`}
              style={{
                maxHeight: openIndex === index ? 500 : 0,
                overflow: "hidden",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.5,
fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginTop: 10,
                transition: "max-height 0.4s ease, padding 0.3s ease",
                padding: openIndex === index ? "10px 5px 0 5px" : "0 5px",
              }}
            >
              {item.answer || <em>Answer coming soon.</em>}
            </div>
          </div>
        ))}
      </div>

      {/* Media Queries */}
      <style>
        {`
          @media (max-width: 1024px) {
            .faq-section {
              gap: 40px;
              flex-direction: column;
            }
            .faq-heading {
              font-size: 24px;
            }
          }

          @media (max-width: 768px) {
            .faq-section {
              flex-direction: column;
              padding: 40px 15px;
            }
            .faq-heading {
              font-size: 28px;
            }
            .faq-subheading {
              font-size: 12px;
            }
          }

          @media (max-width: 480px) {
            .faq-heading {
               font-size: 30px !important;
            }
            .faq-question {
              font-size: 16px;
            }
            .faq-answer {
              font-size: 14px;
            }
          }
        `}
      </style>
    </section>
  );
}
