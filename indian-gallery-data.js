// Gujarati Gallery Data
const galleryData = [
   {
    id: 1,
    title: 'Gujarati Thali',
    category: 'dishes',
    image: 'https://imgs.search.brave.com/d-JPf9eCjID1eAl5U4OTx-JXs2KeBBzulNV5wG7rUOs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vSXZ4ejdF/RFlxSTJjRFROQU5O/cnJMcG9CR2FWSjh0/VGhuME1ETnc1WDh0/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZiM0pwL1oy/bHVZV3h6TDJFd0wy/Sm0vTHpJekwyRXdZ/bVl5TXprei9OVGxs/WlRReE16ZG1Zek00/L1ltRmlZVEV3WVRW/bE5qSXkvTG1wd1p3'
  },
  {
    id: 2,
    title: 'Dhokla Platter',
    category: 'dishes',
    image: 'https://imgs.search.brave.com/o-mbXYSWkjfIRBVeC1ExMXm_jLmXs9ovKymjEjtzmbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vaHBJVnda/WEpqZ2xBNGcwZ19r/MUtqNnBqLTNvNnVi/SURFT29ZcXVSTFBB/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/STEvTnpBeE9Ea3lP/Qzl3YUc5MC9ieTlu/ZFdwaGNtRjBhUzFy/L2FHRnRZVzR0Wkdo/dmEyeGgvTFc5eUxY/TjBaV0Z0WldRdC9a/M0poYlMxbWJHOTFj/aTF3L2RXWm1lUzF6/Ym1GamF5MWovWVd0/bExtcHdaejl6UFRZ/eC9NbmcyTVRJbWR6/MHdKbXM5L01qQW1Z/ejFIVVdsWFUwSjIv/T0hWUWVVd3lWa2Rx/ZHpOeC9iMUZWVlZa/SFdUZzJha2hML04y/SnNVMWMzV1VwUFFV/Wm4vUFE.jpeg'
  },
  {
    id: 3,
    title: 'Fafda Jalebi',
    category: 'dishes',
    image: 'https://imgs.search.brave.com/7K4cv1HTaRUBN0G0kHuvTuWmB1vWqgTT1LAa1UcO4Fk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTi1VcmN2/djdMakJsazlRdGNG/aTBwMWR6Q0pKeXF2/d2JXVVptc0luMVp1/dy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/YUhWdC9Zbk11WkhK/bFlXMXpkR2x0L1pT/NWpiMjB2WWk5bGJY/QjAvZVMxamNtbHpj/SGt0WTJGdS9ZWEJs/TFdOaGJtRndKVU16/L0pVRTVMV2x1Wkds/aGJpMWovYUdGMExX/MWxiblV0Wlcxdy9k/SGt0WTNKcGMzQjVM/V05oL2JtRndaUzFq/WVc1aGNDVkQvTXlW/Qk9TMXpkR0Z5ZEdW/eS9MWEpsWTJsd1pT/MXBibVJwL1lTMXli/M1Z1WkMweE1qRXkv/TURNeE9EZ3VhbkJu'
  },
  {
    id: 4,
    title: 'Undhiyu',
    category: 'dishes',
    image: 'https://imgs.search.brave.com/jLYyXNeMTjgYf_KS3Zclty90s-jfuKkpx0vwOqfSQyU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vWW9Tek1F/T3QxTHAwMkhVdVVu/OFliNUs4cnVPZi03/YXFTcllKOXhKbkRO/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/ZEdGMC9hV011ZEc5/cGFXMW5MbU52L2JT/OTBhSFZ0WWk5dGMy/bGsvTFRFeE56RTJO/ak0zTUN4cC9iV2R6/YVhwbExUZzNOamd5/L0xIZHBaSFJvTFRR/d01DeHkvWlhOcGVt/VnRiMlJsTFRRdi9N/VEUzTVRZMk16Y3dM/bXB3L1p3'
  },
  {
    id: 5,
    title: 'Gujarati Summer Thali',
    category: 'events',
    image: 'https://imgs.search.brave.com/4u1IyB6KitErlHHRUQI9M3HfH1UeiS-OAwPnMIkFc_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vNm1NVUVt/dG5ua0VjS2UtRER5/UWtzVXJqWU02cDBT/ZDRkcnV4bG9fSHJ5/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZiM0pwL1oy/bHVZV3h6THpOakwy/WmovTHpnNUx6Tmpa/bU00T1dZMC9Nelpp/TmpnNE0yVmtNR0l5/L05XSXlaREZrTlRR/NVlqazQvTG1wd1p3'
  },
  {
    id: 6,
    title: 'Traditional Gujarati Thali',
    category: 'interior',
    image: 'https://imgs.search.brave.com/S2OnoGHtKfmKR_N0ozjjUtGCXk5tEtwC0Dvca3gSMyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTFoyMkkt/Zjd6dk93dFRtdVBP/QWlpcmo3aW5uOXM4/a1BZMmQzXzlHanZl/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/TXk1bS9kR05rYmk1/dVpYUXZhbkJuL0x6/RXlMelF6THpjMEx6/TXcvTHpNMk1GOUdY/ekV5TkRNMy9ORE13/TnpSZlYwSTFTMnA0/L2RHWklaMXBtTkZa/U1p6UlcvTlZwclpG/TmlaV1JqY1dKUi9T/RlV1YW5Cbg'
  },
  {
    id: 7,
    title: 'Shrikhand Dessert',
    category: 'sweets',
    image: 'https://imgs.search.brave.com/-iMptODjGEMP-fS4-YTPaQiTUHfywG7BvJCPa2BkKEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vd056VFVU/V2FSc2syVGpFZjBS/S21uQmI4LW9nTVRI/MnRadWpxRUVSRFZk/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/TXk1bS9kR05rYmk1/dVpYUXZhbkJuL0x6/QTJMemM1THpRMUx6/TXkvTHpNMk1GOUdY/elkzT1RRMS9Nekl4/TjE5Rk5FWTFUamhr/L1pXOXdUa05FYldR/eVNISm0vYlhweGFI/QklWbmx3Y3pKNS9U/UzVxY0dj'
  }
];