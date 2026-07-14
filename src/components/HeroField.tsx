/**
 * The hero field.
 *
 * The watershed is no longer an object sitting in the middle of the page. It IS
 * the hero - full-bleed, behind the headline, running slowly and forever. The
 * type sits on top of it under a scrim, the way titles sit over a plate in a
 * film.
 *
 * Thirteen channels fall from the top of the frame and converge into the basin
 * below the copy. A fourteenth breaks away on the right and leaves the frame.
 * That grey line is the leak, and it is the only thing on the page that never
 * arrives anywhere.
 *
 * Inline SVG behind a CSS aurora. No canvas (the neural field was removed on
 * purpose and is not coming back), no video, no library, no network request.
 * Everything animates on stroke-dashoffset and opacity, which the compositor
 * handles on the GPU. Under prefers-reduced-motion the current stops and it
 * becomes a still plate, which is what a poster frame would have been anyway.
 *
 * When the Seedance budget arrives, a <video> drops into this exact slot behind
 * the same scrim. The architecture is already right for it: reserved box, no
 * layout shift, and a still that already looks finished if the clip never loads.
 */
export default function HeroField() {
  return (
    <div className="hf" aria-hidden="true">
      <div className="hf-aurora" />
      <svg className="hf-svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g className="hf-terrain">
        <path className="hf-contour" style={{ ["--i" as string]: 0 }} d="M 909.5 620.0 L 909.4 626.3 L 909.1 632.8 L 898.8 638.1 L 891.0 643.6 L 881.3 648.7 L 866.6 651.8 L 855.1 656.2 L 840.7 659.4 L 825.1 661.8 L 807.9 660.2 L 791.9 660.9 L 776.4 659.3 L 758.7 660.0 L 744.0 656.8 L 734.2 651.3 L 715.9 649.7 L 705.3 644.5 L 699.5 638.4 L 693.8 632.4 L 694.6 626.0 L 694.8 620.0 L 691.0 613.8 L 699.1 608.2 L 703.7 602.4 L 711.2 597.0 L 722.8 592.8 L 731.6 587.4 L 745.3 584.0 L 758.6 579.9 L 775.5 579.2 L 791.7 577.8 L 808.2 578.3 L 824.8 578.7 L 840.0 581.2 L 853.9 584.5 L 871.7 585.9 L 884.2 590.3 L 893.7 595.7 L 901.0 601.5 L 903.4 607.9 L 906.1 613.9 L 907.9 620.0 Z" />
        <path className="hf-contour" style={{ ["--i" as string]: 1 }} d="M 973.0 620.0 L 982.3 630.4 L 970.5 640.0 L 967.2 650.6 L 947.2 658.1 L 937.4 668.4 L 915.7 675.1 L 886.0 676.6 L 864.0 682.0 L 841.5 689.1 L 813.4 688.0 L 786.0 691.2 L 760.3 686.1 L 736.8 681.2 L 709.0 679.9 L 685.0 674.8 L 670.8 665.6 L 656.8 657.1 L 640.3 649.2 L 620.8 641.0 L 617.9 630.4 L 626.2 620.0 L 626.1 610.0 L 634.2 600.6 L 644.2 591.5 L 647.3 580.4 L 671.9 574.8 L 687.2 566.2 L 710.4 561.0 L 736.1 558.1 L 759.1 551.9 L 787.0 554.1 L 813.6 550.9 L 838.7 555.6 L 865.3 556.8 L 887.7 562.3 L 909.9 567.6 L 937.5 571.5 L 952.8 580.4 L 959.3 590.8 L 978.0 599.1 L 973.4 610.1 L 978.3 620.0 Z" />
        <path className="hf-contour" style={{ ["--i" as string]: 2 }} d="M 1070.4 620.0 L 1062.4 635.0 L 1041.4 648.3 L 1046.4 665.1 L 1010.9 674.6 L 987.9 686.2 L 967.4 699.7 L 929.0 704.9 L 894.0 711.0 L 856.1 713.3 L 818.9 715.6 L 780.3 720.0 L 743.0 714.8 L 703.4 713.5 L 670.5 705.2 L 637.3 697.5 L 600.0 690.5 L 583.8 676.0 L 562.4 663.5 L 541.4 650.3 L 548.3 634.4 L 546.2 620.0 L 531.4 604.6 L 542.5 589.8 L 569.3 577.8 L 589.6 565.5 L 603.8 550.8 L 630.2 539.1 L 672.6 536.1 L 700.4 523.6 L 739.7 519.6 L 780.2 519.8 L 819.4 521.4 L 856.2 526.4 L 891.7 531.2 L 936.5 530.2 L 959.5 544.0 L 995.6 551.0 L 1011.7 565.1 L 1042.9 575.5 L 1052.5 590.4 L 1054.3 605.4 L 1054.3 620.0 Z" />
        <path className="hf-contour" style={{ ["--i" as string]: 3 }} d="M 1163.1 620.0 L 1138.4 639.4 L 1131.9 658.9 L 1122.5 679.0 L 1103.5 698.6 L 1063.7 713.0 L 1017.6 723.7 L 984.7 741.6 L 926.6 742.6 L 875.8 746.2 L 826.1 752.1 L 773.5 754.2 L 723.9 746.7 L 673.7 742.3 L 624.1 735.8 L 576.6 726.5 L 547.7 709.0 L 509.5 695.3 L 468.0 680.8 L 445.1 661.6 L 443.0 640.4 L 437.9 620.0 L 445.3 599.7 L 470.8 581.4 L 492.7 563.8 L 518.6 547.1 L 529.4 524.6 L 574.0 512.3 L 614.6 498.0 L 675.5 499.5 L 719.8 486.5 L 773.4 485.3 L 827.2 482.3 L 877.9 490.3 L 935.9 488.4 L 971.2 507.3 L 1022.9 513.8 L 1066.5 526.0 L 1104.7 541.0 L 1127.6 560.1 L 1146.4 579.4 L 1161.3 599.3 L 1169.3 620.0 Z" />
        <path className="hf-contour" style={{ ["--i" as string]: 4 }} d="M 1255.8 620.0 L 1264.5 646.6 L 1257.4 673.6 L 1230.1 698.7 L 1178.9 718.2 L 1147.5 742.5 L 1097.5 761.7 L 1032.5 773.0 L 970.7 785.3 L 901.7 789.3 L 834.8 796.4 L 765.1 796.8 L 701.1 784.7 L 629.1 785.5 L 558.7 778.8 L 502.1 761.9 L 454.4 741.9 L 422.1 717.9 L 374.9 697.8 L 355.3 672.1 L 345.6 646.0 L 323.9 620.0 L 360.3 594.8 L 348.6 567.1 L 401.4 547.1 L 414.8 520.2 L 461.9 500.8 L 518.9 486.1 L 564.9 465.2 L 631.3 456.6 L 696.1 447.1 L 764.2 438.3 L 833.8 448.8 L 898.3 456.4 L 965.8 459.5 L 1034.7 465.5 L 1080.3 486.4 L 1128.6 504.1 L 1195.7 517.5 L 1222.2 542.7 L 1239.2 568.5 L 1272.9 592.9 L 1254.8 620.0 Z" />
        <path className="hf-contour" style={{ ["--i" as string]: 5 }} d="M 1388.7 620.0 L 1358.0 652.0 L 1350.8 684.6 L 1337.0 718.3 L 1297.1 748.8 L 1239.7 775.0 L 1157.9 790.5 L 1092.2 812.3 L 1008.4 821.8 L 924.8 827.8 L 843.3 839.7 L 755.3 846.5 L 666.9 841.6 L 584.1 829.1 L 498.3 818.6 L 445.6 788.9 L 387.5 765.4 L 322.9 743.6 L 288.0 713.7 L 260.0 683.3 L 230.9 652.6 L 213.4 620.0 L 226.8 587.2 L 255.0 556.1 L 261.5 521.5 L 300.0 490.5 L 376.6 470.7 L 452.2 454.3 L 522.2 437.2 L 581.0 408.0 L 676.3 414.0 L 755.8 396.1 L 843.6 398.8 L 926.8 408.8 L 1017.5 409.5 L 1077.4 437.4 L 1149.8 453.3 L 1223.4 470.7 L 1258.7 501.2 L 1338.1 521.5 L 1341.1 556.6 L 1355.0 588.2 L 1356.4 620.0 Z" />
        <path className="hf-contour" style={{ ["--i" as string]: 6 }} d="M 1518.3 620.0 L 1498.7 660.0 L 1486.4 700.5 L 1448.6 738.7 L 1402.9 776.2 L 1341.9 811.1 L 1250.0 834.4 L 1145.4 847.3 L 1058.8 870.6 L 953.4 875.4 L 850.7 877.2 L 747.1 888.4 L 639.0 888.1 L 548.1 863.9 L 452.3 848.9 L 363.5 828.0 L 270.3 806.8 L 212.3 772.3 L 153.7 738.3 L 105.9 701.4 L 104.7 659.8 L 71.3 620.0 L 72.3 578.3 L 146.7 543.4 L 135.4 498.4 L 201.6 465.0 L 296.9 442.6 L 359.2 409.9 L 441.0 383.7 L 531.0 359.6 L 643.8 359.9 L 746.6 349.3 L 854.9 341.8 L 962.2 349.9 L 1069.8 358.8 L 1153.8 387.1 L 1248.7 406.2 L 1306.6 441.4 L 1398.3 465.0 L 1458.0 499.6 L 1487.1 539.5 L 1515.8 579.0 L 1491.7 620.0 Z" />
        <path className="hf-contour" style={{ ["--i" as string]: 7 }} d="M 1682.7 620.0 L 1678.9 670.3 L 1649.1 719.5 L 1570.2 760.9 L 1522.4 807.2 L 1414.5 836.7 L 1350.8 882.5 L 1239.6 909.4 L 1107.0 917.3 L 982.5 923.8 L 863.3 941.1 L 736.0 944.3 L 605.8 943.3 L 489.1 921.0 L 392.1 888.5 L 254.0 880.2 L 199.9 831.6 L 77.0 807.3 L 55.0 756.3 L -2.1 714.0 L -64.3 669.5 L -24.4 620.0 L -15.8 573.3 L -15.4 524.4 L 16.9 476.7 L 74.5 432.0 L 164.8 396.0 L 247.5 356.7 L 374.3 339.8 L 476.1 306.4 L 617.5 316.1 L 737.9 305.2 L 863.8 296.4 L 986.0 310.3 L 1117.7 312.4 L 1231.3 336.1 L 1332.3 366.4 L 1443.9 393.0 L 1507.8 436.6 L 1554.6 481.9 L 1605.4 525.6 L 1668.7 570.2 L 1682.7 620.0 Z" />
        <path className="hf-contour" style={{ ["--i" as string]: 8 }} d="M 1778.6 620.0 L 1825.1 678.7 L 1800.8 737.3 L 1707.4 786.1 L 1635.8 836.5 L 1516.9 872.8 L 1428.6 919.5 L 1302.6 950.8 L 1170.6 978.9 L 1014.1 976.5 L 878.3 1016.9 L 724.8 1001.4 L 578.4 989.0 L 422.9 985.1 L 294.7 952.6 L 173.9 918.3 L 50.6 884.2 L 2.1 826.7 L -108.6 786.3 L -152.9 731.7 L -234.6 679.3 L -243.3 620.0 L -173.1 564.3 L -158.0 507.7 L -75.1 459.9 L -25.4 406.2 L 42.3 352.9 L 150.8 310.7 L 298.6 290.0 L 438.9 270.3 L 582.6 258.0 L 724.1 235.1 L 878.0 224.6 L 1016.2 260.1 L 1176.4 255.6 L 1280.9 303.5 L 1409.4 329.6 L 1518.6 366.6 L 1644.3 401.2 L 1691.0 457.0 L 1747.8 508.9 L 1804.5 562.5 L 1769.3 620.0 Z" />
        </g>
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 0 }} d="M 40 -20 C 40 200, 648 440, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 1 }} d="M 150 -20 C 150 234, 670 466, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 2 }} d="M 262 -20 C 262 268, 692 492, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 3 }} d="M 372 -20 C 372 302, 714 440, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 4 }} d="M 486 -20 C 486 200, 737 466, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 5 }} d="M 598 -20 C 598 234, 760 492, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 6 }} d="M 712 -20 C 712 268, 782 440, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 7 }} d="M 826 -20 C 826 302, 805 466, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 8 }} d="M 940 -20 C 940 200, 828 492, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 9 }} d="M 1052 -20 C 1052 234, 850 440, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 10 }} d="M 1166 -20 C 1166 268, 873 466, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 11 }} d="M 1280 -20 C 1280 302, 896 492, 800 590" />
        <path className="hf-bed" pathLength={1} style={{ ["--i" as string]: 12 }} d="M 1392 -20 C 1392 200, 918 440, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 0 }} d="M 40 -20 C 40 200, 648 440, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 1 }} d="M 150 -20 C 150 234, 670 466, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 2 }} d="M 262 -20 C 262 268, 692 492, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 3 }} d="M 372 -20 C 372 302, 714 440, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 4 }} d="M 486 -20 C 486 200, 737 466, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 5 }} d="M 598 -20 C 598 234, 760 492, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 6 }} d="M 712 -20 C 712 268, 782 440, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 7 }} d="M 826 -20 C 826 302, 805 466, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 8 }} d="M 940 -20 C 940 200, 828 492, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 9 }} d="M 1052 -20 C 1052 234, 850 440, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 10 }} d="M 1166 -20 C 1166 268, 873 466, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 11 }} d="M 1280 -20 C 1280 302, 896 492, 800 590" />
        <path className="hf-flow" pathLength={1} style={{ ["--i" as string]: 12 }} d="M 1392 -20 C 1392 200, 918 440, 800 590" />
        <path className="hf-leak-bed" pathLength={1} d="M 1512 -20 C 1512 210, 1585 380, 1548 520 C 1516 642, 1610 720, 1624 920" />
        <path className="hf-leak-flow" pathLength={1} d="M 1512 -20 C 1512 210, 1585 380, 1548 520 C 1516 642, 1610 720, 1624 920" />
        <circle className="hf-basin-halo" cx="800" cy="620" r="74" />
        <circle className="hf-basin-ring" cx="800" cy="620" r="34" />
        <circle className="hf-basin-core" cx="800" cy="620" r="10" />
      </svg>
      <div className="hf-scrim" />
    </div>
  );
}
