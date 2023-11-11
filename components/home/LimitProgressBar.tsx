import React from "react";

interface ProgressProps {
  progress: number;
  strokeColor: string;
  textColor: string;
}

export default function LimitProgressBar({
  progress,
  strokeColor = "#428777",
  textColor = "text-blue-700",
}: ProgressProps) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='flex items-center justify-center w-40 h-40 '>
      <svg
        className='w-40 h-40 '
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <circle
          className='text-gray-300'
          strokeWidth='10'
          stroke='currentColor'
          fill='transparent'
          r={radius}
          cx='50%'
          cy='50%'
        />
        <circle
          className={strokeColor}
          strokeWidth='10'
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
          strokeLinecap='round'
          stroke='currentColor'
          fill='transparent'
          r={radius}
          cx='50%'
          cy='50%'
        />
      </svg>
      <span className={`absolute text-xl ${textColor}`}>
        {`${progress}%`}
      </span>
    </div>
  );
}
