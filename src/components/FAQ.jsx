import React, { useState } from 'react';
import { invitationData } from '../data/invitationData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { faq } = invitationData;

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-12 bg-ivory text-ink">
      <div className="max-w-col mx-auto px-6 text-left">
        <p className="mb-4 text-center font-pinyon text-[30px] leading-none text-car opacity-85">
          {faq.sectionLabel}
        </p>

        <div className="space-y-2.5">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[22px] bg-[rgba(143,16,32,0.06)] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left p-[20px_22px] font-gloock text-[21px] leading-[1.2] text-ink cursor-pointer border-0 bg-transparent"
                >
                  <span className="pr-4">{item.q}</span>
                  <span className="font-familjen text-[24px] text-car flex-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p className="m-0 px-[22px] pb-5 text-[15px] opacity-80 leading-relaxed text-ink">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
