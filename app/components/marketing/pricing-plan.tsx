
import React from 'react';

type PricingPlanProps = {
  title: string;
  price: string;
  perks: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export function PricingPlan({ title, price, perks, icon: Icon }: PricingPlanProps) {
  return (
    <article>
      <header>
        <div className="icon">
          <Icon />
        </div>
        <h2>{title}</h2>
        <p>{price}</p>
      </header>
      <div className="plan-content">
        <ol>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ol>
        <div className='actions'>
          <a href="/not-implemented">Learn More</a>
        </div>
      </div>
    </article>
  );
}

