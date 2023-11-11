import { cn } from "../../lib/utils";
import Card from "../ui/card";
import LimitProgressBar from "./LimitProgressBar";

export default function Spending() {
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 text-card'>
      <SpendingCard
        heading='Subscription'
        spending={400}
        budget={3400}
        className=''
      />
      <SpendingCard
        heading='Subscription'
        spending={1400}
        budget={4500}
        className='bg-[#F0CA43]'
      />
      <SpendingCard
        heading='Subscription'
        spending={2300}
        budget={3400}
        className='bg-muted-foreground'
      />
      <SpendingCard
        heading='Subscription'
        spending={1700}
        budget={3800}
        className='bg-destructive'
      />
    </div>
  );
}
type CardProps = {
  className?: string;
  heading: string;
  spending: number;
  budget: number;
};

function SpendingCard({
  className,
  heading,
  spending,
  budget,
}: CardProps) {
  function percentageCalculation(budget: number, spending: number) {
    return Math.round((spending / budget) * 100);
  }

  const cardClass = cn("h-[237px] bg-primary flex p-8", className);
  return (
    <Card className={cardClass}>
      <div className='flex flex-col'>
        <small className='text-lg'>{heading}</small>
        <small className='text-lg font-bold'>
          {spending} / {budget}
        </small>
      </div>
      <div className='mt-auto ml-auto'>
        <LimitProgressBar
          progress={percentageCalculation(budget, spending)}
          textColor='#FFFFFF'
          strokeColor='#FFFFFF'
        />
      </div>
    </Card>
  );
}
