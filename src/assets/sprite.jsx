export const FavoriteIcon = ({ isFavorite }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill={isFavorite ? '#fc832c' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5766 4.99416C22.0233 4.44058 21.3663 4.00144 20.6433 3.70184C19.9202 3.40223 19.1452 3.24802 18.3625 3.24802C17.5798 3.24802 16.8047 3.40223 16.0817 3.70184C15.3586 4.00144 14.7016 4.44058 14.1483 4.99416L13 6.14249L11.8516 4.99416C10.734 3.87649 9.21809 3.2486 7.63747 3.2486C6.05685 3.2486 4.54097 3.87649 3.4233 4.99416C2.30563 6.11183 1.67773 7.62771 1.67773 9.20833C1.67773 10.7889 2.30563 12.3048 3.4233 13.4225L4.57163 14.5708L13 22.9992L21.4283 14.5708L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4891C24.1686 10.766 24.3228 9.99102 24.3228 9.20833C24.3228 8.42563 24.1686 7.65061 23.869 6.92753C23.5693 6.20445 23.1302 5.54748 22.5766 4.99416Z"
        stroke={isFavorite ? '#fc832c' : '#191A15'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyeOnIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_42_2444)">
        <path
          d="M0.833984 10C0.833984 10 4.16732 3.33334 10.0007 3.33334C15.834 3.33334 19.1673 10 19.1673 10C19.1673 10 15.834 16.6667 10.0007 16.6667C4.16732 16.6667 0.833984 10 0.833984 10Z"
          stroke="#191A15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
          stroke="#191A15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_2444">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EyeOffIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_42_2441)">
        <path
          d="M14.9507 14.95C13.5261 16.0358 11.7916 16.6374 10.0007 16.6667C4.16732 16.6667 0.833984 10 0.833984 10C1.87056 8.06825 3.30826 6.38051 5.05065 5.05M8.25065 3.53333C8.82426 3.39907 9.41154 3.33195 10.0007 3.33333C15.834 3.33333 19.1673 10 19.1673 10C18.6615 10.9463 18.0582 11.8373 17.3673 12.6583M11.7673 11.7667C11.5384 12.0123 11.2624 12.2093 10.9558 12.3459C10.6491 12.4826 10.3181 12.556 9.98239 12.562C9.64672 12.5679 9.31329 12.5061 9.00199 12.3804C8.6907 12.2547 8.40792 12.0675 8.17052 11.8301C7.93313 11.5927 7.74598 11.31 7.62024 10.9987C7.49451 10.6874 7.43276 10.3539 7.43868 10.0183C7.4446 9.68258 7.51808 9.35154 7.65472 9.04487C7.79136 8.73821 7.98836 8.46221 8.23399 8.23333"
          stroke="#191A15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.833984 0.833336L19.1673 19.1667"
          stroke="#191A15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_2441">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const UserIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
        fill="#FBFBFB"
      />
    </svg>
  );
};

export const ClockIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_42_2384)">
        <path
          d="M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 10C18.3327 5.39763 14.6017 1.66667 9.99935 1.66667C5.39698 1.66667 1.66602 5.39763 1.66602 10C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z"
          stroke="#191A15"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 5V10L13.3333 11.6667"
          stroke="#191A15"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_2384">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const BackgroundRoundIcon = () => {
  return (
    <svg
      width="1431"
      height="800"
      viewBox="0 0 1431 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_42_1638)">
        <circle cx="1234.5" cy="702.5" r="234.5" fill="#FC832C" />
      </g>
      <defs>
        <filter
          id="filter0_f_42_1638"
          x="0"
          y="-532"
          width="2469"
          height="2469"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="500"
            result="effect1_foregroundBlur_42_1638"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const BurgerMenuIcon = () => {
  return (
    <svg
      width="30px"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18L20 18"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CheckMarkIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 12.5L5 15L12.5 22.5L25 10L22.5 7.5L12.5 17.5L7.5 12.5Z"
        fill="#FC832C"
      />
    </svg>
  );
};

export const QuestionMarkIcon = () => {
  return (
    <svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5.3125C2.5 4.14043 3.39687 3.1875 4.5 3.1875H5.5C6.60313 3.1875 7.5 4.14043 7.5 5.3125V5.43203C7.5 6.15586 7.15313 6.82988 6.58125 7.21836L5.2625 8.11817C4.8753 8.38268 4.5568 8.74625 4.33622 9.17554C4.11564 9.60483 4.00003 10.0861 4 10.5752V10.625C4 11.2127 4.44688 11.6875 5 11.6875C5.55312 11.6875 6 11.2127 6 10.625V10.5785C6 10.3063 6.13125 10.0539 6.34375 9.90781L7.6625 9.00801C8.80625 8.22442 9.5 6.87969 9.5 5.43203V5.3125C9.5 2.96504 7.70937 1.0625 5.5 1.0625H4.5C2.29063 1.0625 0.5 2.96504 0.5 5.3125C0.5 5.9002 0.946875 6.375 1.5 6.375C2.05313 6.375 2.5 5.9002 2.5 5.3125ZM5 15.9375C5.33152 15.9375 5.64946 15.7976 5.88388 15.5485C6.1183 15.2994 6.25 14.9616 6.25 14.6094C6.25 14.2571 6.1183 13.9193 5.88388 13.6703C5.64946 13.4212 5.33152 13.2813 5 13.2813C4.66848 13.2813 4.35054 13.4212 4.11612 13.6703C3.8817 13.9193 3.75 14.2571 3.75 14.6094C3.75 14.9616 3.8817 15.2994 4.11612 15.5485C4.35054 15.7976 4.66848 15.9375 5 15.9375Z"
        fill="#FBFBFB"
        transform="rotate(15 5 4.5)"
      />
    </svg>
  );
};

export const PeopleIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(-15 0 0)"
    >
      <g clipPath="url(#clip0_42_1658)">
        <path
          d="M14.8761 17.6007L14.4483 19.1973L3.27181 16.2026L3.69963 14.6059C3.69963 14.6059 4.55527 11.4126 10.1435 12.91C15.7318 14.4074 14.8761 17.6007 14.8761 17.6007ZM14.1142 9.26792C14.2622 8.7153 14.2431 8.13117 14.0592 7.58941C13.8753 7.04766 13.5349 6.5726 13.081 6.22431C12.6271 5.87603 12.0801 5.67016 11.5092 5.63274C10.9383 5.59532 10.3692 5.72803 9.87368 6.01409C9.37821 6.30015 8.97869 6.72672 8.72565 7.23984C8.47261 7.75295 8.3774 8.32959 8.45208 8.89681C8.52676 9.46404 8.76796 9.99638 9.14519 10.4265C9.52241 10.8567 10.0187 11.1653 10.5713 11.3134C11.3124 11.5119 12.102 11.408 12.7664 11.0244C13.4308 10.6408 13.9156 10.009 14.1142 9.26792ZM15.6839 14.3945C16.0729 14.9058 16.3451 15.4962 16.4814 16.124C16.6177 16.7518 16.6148 17.4019 16.4728 18.0285L16.045 19.6251L19.2383 20.4808L19.6661 18.8841C19.6661 18.8841 20.4426 15.9862 15.6839 14.3945ZM16.8586 7.00857C16.31 6.85828 15.7285 6.87856 15.1917 7.06674C15.4951 7.87424 15.5381 8.75644 15.3149 9.58966C15.0916 10.4229 14.6132 11.1653 13.9467 11.713C14.3176 12.1444 14.811 12.4526 15.3613 12.5968C16.1023 12.7954 16.8919 12.6914 17.5563 12.3078C18.2207 11.9242 18.7055 11.2924 18.9041 10.5514C19.1026 9.81033 18.9987 9.02076 18.6151 8.35635C18.2315 7.69195 17.5997 7.20713 16.8586 7.00857Z"
          fill="#FBFBFB"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_1658">
          <rect width="19.8356" height="19.8356" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowIcon = () => {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8229 1.6731C12.7461 1.12619 12.2404 0.745143 11.6935 0.822006L2.78109 2.07456C2.23418 2.15143 1.85313 2.6571 1.92999 3.20401C2.00685 3.75092 2.51252 4.13196 3.05943 4.0551L10.9816 2.94172L12.095 10.8639C12.1718 11.4108 12.6775 11.7918 13.2244 11.715C13.7713 11.6381 14.1524 11.1324 14.0755 10.5855L12.8229 1.6731ZM1.79864 16.7895L12.6313 2.41409L11.034 1.21046L0.201365 15.5859L1.79864 16.7895Z"
        fill="#FBFBFB"
      />
    </svg>
  );
};

export const StarIcon = () => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z"
        fill="#FFC531"
        stroke="#FFC531"
        strokeWidth="1.2"
      />
    </svg>
  );
};

export const StatusIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="7" fill="#FBFBFB" />
      <circle cx="7.00065" cy="7.00009" r="4.66667" fill="#38CD3E" />
    </svg>
  );
};

export const VerticalLineIcon = () => {
  return (
    <svg
      width="2"
      height="16"
      viewBox="0 0 2 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0V16" stroke="#191A15" strokeOpacity="0.2" />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 8L8 24"
        stroke="#191A15"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8L24 24"
        stroke="#191A15"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
