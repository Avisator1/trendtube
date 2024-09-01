import React, { useState, useRef, useEffect } from 'react';

const Faq = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [heights, setHeights] = useState({});

  const contentRefs = useRef([]);

  useEffect(() => {
    // Initialize activeIndices to include all indices to open all items by default
    setActiveIndices(faqs.map((_, index) => index));

    // Calculate and set the heights for each FAQ item
    const initialHeights = {};
    contentRefs.current.forEach((ref, index) => {
      initialHeights[index] = ref.scrollHeight;
    });
    setHeights(initialHeights);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );

    setHeights((prevHeights) => ({
      ...prevHeights,
      [index]: contentRefs.current[index].scrollHeight,
    }));
  };

  const faqs = [
    { question: "How do you determine the trending niches?", answer: "We analyze the latest data from YouTube and social media platforms to identify niches that are gaining popularity, ensuring our content is always on-trend." },
    { question: "How can these shorts help my YouTube channel?", answer: "Our shorts are designed to capture audience attention quickly, increasing your chances of going viral and attracting new subscribers." },
    { question: "Are the shorts personalized for my channel's theme?", answer: "Yes, we offer customization options to align the shorts with your channel's theme, making sure they resonate with your existing audience." },
    { question: "How often is the content updated?", answer: "We update our content daily to ensure you have access to the latest trends and viral niches on YouTube." },
    { question: "Can I try TrendTube for free?", answer: "Yes, we offer a free trial for new users." },
    { question: "How do I get started?", answer: "Simply choose a plan and sign up. You will be guided through the setup process." },
    { question: "Can I request a specific niche for my shorts?", answer: "Absolutely! You can request a niche, and our AI will work on creating shorts that fit within that niche." },
    { question: "What is the virality rate of your shorts?", answer: "Our shorts have a high virality rate due to their alignment with trending topics and optimized engagement strategies, giving you the best chance to go viral." },
    { question: "I have another question", answer: "Feel free to contact our support team for any other inquiries." },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-20 p-6 rounded-lg font-inter">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section: Title */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-md text-center lg:text-left text-[#e895c5] font-bold">FAQ</h2>
          <h2 className="text-3xl text-center lg:text-left font-bold text-[#221d4b] mb-6">Frequently Asked Questions</h2>
        </div>

        {/* Right Section: Accordion */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b">
                <button
                  className={`w-full text-left flex justify-between items-center py-3 ${
                    activeIndices.includes(index) ? 'text-[#e895c5]' : 'text-[#221d4b]'
                  } transition-colors duration-300`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">
                    {activeIndices.includes(index) ? '-' : '+'}
                  </span>
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    height: activeIndices.includes(index) ? `${heights[index]}px` : '0px',
                    overflow: 'hidden',
                    transition: 'height 0.3s ease',
                  }}
                  className="text-gray-600 text-left"
                >
                  <div className="py-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
