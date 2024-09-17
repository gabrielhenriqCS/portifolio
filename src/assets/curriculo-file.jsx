import * as React from "react"

export const CurriculoBaixar = ({
    fill = 'currentColor',
    filled,
    size,
    height,
    width,
    label,
    ...props
  }) => {
    return (
      <svg
        width={size || width || 24}
        height={size || height || 24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
            <title>baixar.curriculo</title>
            <path fillRule="evenoldd" clipRule="evenodd" d="M9.293 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4.707A1 1 0 0013.707 4L10 .293A1 1 0 009.293 0M9.5 3.5v-2l3 3h-2a1 1 0 01-1-1M11 8a3 3 0 11-6 0 3 3 0 016 0m2 5.755V14a1 1 0 01-1 1H4a1 1 0 01-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
        </svg>
    )
  }
  
  