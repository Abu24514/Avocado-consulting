"use client";

import { FiTarget, FiLayers, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { whyItems } from "@/data/why";

const icons = { FiTarget, FiLayers, FiTrendingUp, FiCheckCircle };

export function WhyAvocado() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <SectionHeading 
          eyebrow="Why Avocado" 
          title="Why Businesses Choose Avocado" 
          className="mb-14 md:mb-16" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {whyItems.map((item, i) => {
            
            const Icon = icons[item.icon as keyof typeof icons] || FiCheckCircle; 

            return (
             
              <FadeUp key={item.index} delay={i * 0.08} className="h-full">
                <div className="relative group rounded-3xl border border-gray-200 bg-gray-50/50 p-8 xl:p-10 h-full flex flex-col hover:bg-gray-50 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
                  
                  <div className="flex items-start justify-between mb-8">
                
                    <span className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <Icon size={26} />
                    </span>
                    
                    {/* Index Number (e.g., 01, 02) */}
                    <span className="text-sm font-mono text-gray-400 font-medium">
                      {item.index}
                    </span>
                  </div>
                  
                  <h3 className="font-medium text-2xl text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}