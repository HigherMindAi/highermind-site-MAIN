/**
 * The Catchment, drawn.
 *
 * A catchment is a watershed: terrain that drains to a single point. Every
 * channel here is somebody nearby, searching, finding their way to you. They
 * converge into the basin - Cortex - which catches every one of them.
 *
 * Except one. The grey channel on the right breaks away before the basin and
 * runs off the edge of the frame. That is the leak. It is grey and not red on
 * purpose: it does not announce itself, which is exactly why a practice owner
 * never notices it happening.
 *
 * Inline SVG. No animation library, no canvas, no network request. The draw is
 * stroke-dashoffset and the current is a dash pattern chasing down the path -
 * both compositor-only, both effectively free. Every path is normalised with
 * pathLength=1 so the timing is identical regardless of how long the channel
 * actually is.
 *
 * Under prefers-reduced-motion everything stops and it reads as a still chart.
 */
export default function CatchmentDiagram() {
  return (
    <div className="cx reveal">
      <svg
        className="cx-svg"
        viewBox="0 0 1200 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="A watershed chart. Nine channels of demand converge into a single basin - the AI front desk - which catches every one of them and sends them on as a booking. A tenth channel breaks away before the basin and drains off the edge of the frame: the enquiry nobody answered."
      >
        {/* the terrain */}
        <path className="cx-contour" style={{ ["--i" as string]: 0 }} d="M 717.9 392.0 L 712.4 403.6 L 707.9 415.8 L 686.0 424.0 L 668.4 433.6 L 642.0 438.5 L 613.8 439.8 L 585.5 442.1 L 559.4 436.9 L 532.3 433.2 L 514.0 424.0 L 498.1 414.5 L 484.4 404.0 L 476.1 392.0 L 487.9 380.4 L 496.7 369.2 L 509.0 358.2 L 528.8 348.7 L 557.1 344.5 L 585.7 342.5 L 615.2 339.6 L 640.6 347.0 L 670.6 349.0 L 687.9 359.3 L 702.5 369.4 L 712.1 380.4 L 717.7 392.0 Z" />
        <path className="cx-contour" style={{ ["--i" as string]: 1 }} d="M 796.0 392.0 L 778.6 410.5 L 769.6 429.4 L 744.2 445.7 L 706.6 456.8 L 667.7 467.0 L 621.9 467.8 L 578.1 467.7 L 534.6 464.4 L 490.1 458.9 L 458.8 444.5 L 434.9 428.4 L 413.9 411.3 L 410.9 392.0 L 419.2 373.3 L 426.8 353.8 L 455.0 338.0 L 494.8 328.0 L 532.1 316.8 L 577.0 312.6 L 623.8 309.8 L 668.9 315.7 L 705.6 327.7 L 749.0 336.5 L 761.8 356.3 L 783.0 373.1 L 794.9 392.0 Z" />
        <path className="cx-contour" style={{ ["--i" as string]: 2 }} d="M 858.7 392.0 L 859.9 418.9 L 826.4 441.9 L 804.0 467.9 L 756.3 487.1 L 695.7 498.0 L 633.5 507.9 L 568.3 501.7 L 503.1 499.3 L 446.3 485.5 L 397.8 467.2 L 363.7 444.1 L 330.9 419.9 L 320.1 392.0 L 340.5 365.1 L 358.8 338.8 L 408.2 320.6 L 444.7 297.5 L 503.6 285.2 L 566.1 274.8 L 633.3 276.7 L 693.0 289.0 L 750.5 300.4 L 804.0 316.1 L 826.0 342.2 L 859.2 365.2 L 859.1 392.0 Z" />
        <path className="cx-contour" style={{ ["--i" as string]: 3 }} d="M 938.5 392.0 L 926.7 425.8 L 920.0 462.5 L 853.7 486.4 L 794.9 510.6 L 723.5 528.7 L 644.0 544.2 L 559.4 532.6 L 475.8 529.5 L 399.1 514.3 L 326.4 493.8 L 278.4 462.9 L 245.8 428.7 L 255.8 392.0 L 261.1 356.9 L 292.7 324.3 L 326.4 290.2 L 390.9 264.8 L 479.5 258.6 L 558.9 250.0 L 641.3 249.2 L 721.5 257.5 L 799.7 270.5 L 865.8 293.1 L 904.3 324.9 L 924.8 358.4 L 949.1 392.0 Z" />
        <path className="cx-contour" style={{ ["--i" as string]: 4 }} d="M 1038.2 392.0 L 1034.0 436.9 L 1011.0 482.6 L 938.7 518.0 L 852.6 545.7 L 759.3 568.4 L 654.5 580.4 L 548.9 568.9 L 436.3 573.3 L 340.7 549.8 L 255.2 520.3 L 195.1 481.2 L 173.5 436.1 L 160.5 392.0 L 186.0 349.1 L 201.6 304.2 L 282.2 273.8 L 358.7 245.2 L 447.1 222.7 L 548.3 213.1 L 652.7 209.8 L 750.4 225.4 L 839.6 246.2 L 920.7 272.7 L 977.5 308.8 L 1025.2 348.0 L 1022.9 392.0 Z" />
        <path className="cx-contour" style={{ ["--i" as string]: 5 }} d="M 1164.4 392.0 L 1134.2 447.3 L 1064.8 494.4 L 997.1 539.8 L 904.3 577.2 L 790.3 602.7 L 663.1 610.3 L 532.1 626.7 L 397.6 616.2 L 292.0 579.4 L 193.5 543.3 L 138.3 493.8 L 92.8 444.5 L 64.6 392.0 L 84.2 338.6 L 102.5 282.3 L 206.6 245.6 L 305.7 212.9 L 398.4 168.7 L 534.2 164.5 L 663.3 173.2 L 793.7 177.4 L 894.4 212.9 L 1008.3 240.1 L 1104.7 280.7 L 1147.4 335.3 L 1154.7 392.0 Z" />
        <path className="cx-contour" style={{ ["--i" as string]: 6 }} d="M 1236.4 392.0 L 1224.6 456.7 L 1158.1 515.0 L 1101.3 578.5 L 971.6 618.1 L 837.7 655.2 L 677.3 659.2 L 523.6 656.3 L 361.6 656.0 L 211.7 628.3 L 94.8 580.0 L 5.0 523.2 L -53.2 459.6 L -67.6 392.0 L -15.8 328.3 L 21.7 264.5 L 119.0 213.0 L 247.1 177.2 L 379.7 148.0 L 523.1 126.2 L 676.7 126.7 L 835.7 131.0 L 987.3 156.3 L 1085.5 211.4 L 1202.5 259.2 L 1263.9 323.3 L 1281.7 392.0 Z" />

        {/* the channel beds */}
        <path className="cx-bed" pathLength={1} style={{ ["--i" as string]: 0 }} d="M 60 30 C 60 150, 481 268, 600 366" />
        <path className="cx-bed" pathLength={1} style={{ ["--i" as string]: 1 }} d="M 175 30 C 175 168, 506 280, 600 366" />
        <path className="cx-bed" pathLength={1} style={{ ["--i" as string]: 2 }} d="M 295 30 C 295 186, 533 292, 600 366" />
        <path className="cx-bed" pathLength={1} style={{ ["--i" as string]: 3 }} d="M 415 30 C 415 150, 559 304, 600 366" />
        <path className="cx-bed" pathLength={1} style={{ ["--i" as string]: 4 }} d="M 535 30 C 535 168, 586 268, 600 366" />
        <path className="cx-bed" pathLength={1} style={{ ["--i" as string]: 5 }} d="M 660 30 C 660 186, 613 280, 600 366" />
        <path className="cx-bed" pathLength={1} style={{ ["--i" as string]: 6 }} d="M 780 30 C 780 150, 640 292, 600 366" />
        <path className="cx-bed" pathLength={1} style={{ ["--i" as string]: 7 }} d="M 900 30 C 900 168, 666 304, 600 366" />
        <path className="cx-bed" pathLength={1} style={{ ["--i" as string]: 8 }} d="M 1015 30 C 1015 186, 691 268, 600 366" />

        {/* the current running down them */}
        <path className="cx-flow" pathLength={1} style={{ ["--i" as string]: 0 }} d="M 60 30 C 60 150, 481 268, 600 366" />
        <path className="cx-flow" pathLength={1} style={{ ["--i" as string]: 1 }} d="M 175 30 C 175 168, 506 280, 600 366" />
        <path className="cx-flow" pathLength={1} style={{ ["--i" as string]: 2 }} d="M 295 30 C 295 186, 533 292, 600 366" />
        <path className="cx-flow" pathLength={1} style={{ ["--i" as string]: 3 }} d="M 415 30 C 415 150, 559 304, 600 366" />
        <path className="cx-flow" pathLength={1} style={{ ["--i" as string]: 4 }} d="M 535 30 C 535 168, 586 268, 600 366" />
        <path className="cx-flow" pathLength={1} style={{ ["--i" as string]: 5 }} d="M 660 30 C 660 186, 613 280, 600 366" />
        <path className="cx-flow" pathLength={1} style={{ ["--i" as string]: 6 }} d="M 780 30 C 780 150, 640 292, 600 366" />
        <path className="cx-flow" pathLength={1} style={{ ["--i" as string]: 7 }} d="M 900 30 C 900 168, 666 304, 600 366" />
        <path className="cx-flow" pathLength={1} style={{ ["--i" as string]: 8 }} d="M 1015 30 C 1015 186, 691 268, 600 366" />

        {/* the leak: it breaks away, and it never arrives */}
        <path className="cx-leak-bed" pathLength={1} d="M 1130 30 C 1130 150, 1178 236, 1150 330 C 1128 402, 1196 448, 1204 520" />
        <path className="cx-leak-flow" pathLength={1} d="M 1130 30 C 1130 150, 1178 236, 1150 330 C 1128 402, 1196 448, 1204 520" />

        {/* every person nearby, already searching */}
        <circle className="cx-src" style={{ ["--i" as string]: 0 }} cx="60" cy="30" r="4" />
        <circle className="cx-src" style={{ ["--i" as string]: 1 }} cx="175" cy="30" r="4" />
        <circle className="cx-src" style={{ ["--i" as string]: 2 }} cx="295" cy="30" r="4" />
        <circle className="cx-src" style={{ ["--i" as string]: 3 }} cx="415" cy="30" r="4" />
        <circle className="cx-src" style={{ ["--i" as string]: 4 }} cx="535" cy="30" r="4" />
        <circle className="cx-src" style={{ ["--i" as string]: 5 }} cx="660" cy="30" r="4" />
        <circle className="cx-src" style={{ ["--i" as string]: 6 }} cx="780" cy="30" r="4" />
        <circle className="cx-src" style={{ ["--i" as string]: 7 }} cx="900" cy="30" r="4" />
        <circle className="cx-src" style={{ ["--i" as string]: 8 }} cx="1015" cy="30" r="4" />
        <circle className="cx-src cx-src-lost" style={{ ["--i" as string]: 9 }} cx="1130" cy="30" r="4" />

        {/* the basin */}
        <circle className="cx-basin-halo" cx="600" cy="392" r="54" />
        <circle className="cx-basin-ring" cx="600" cy="392" r="30" />
        <circle className="cx-basin-core" cx="600" cy="392" r="9" />

        {/* caught, qualified, booked */}
        <path className="cx-out" pathLength={1} d="M 600 422 L 600 534" />
        <circle className="cx-out-dot" cx="600" cy="534" r="5" />
      </svg>

      <div className="cx-legend">
        <span className="cx-key cx-key-in">Everyone in your catchment</span>
        <span className="cx-key cx-key-hold">Caught, qualified, booked</span>
        <span className="cx-key cx-key-lost">The one nobody answered</span>
      </div>
    </div>
  );
}
